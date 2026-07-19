import React from "react";
import { Link } from "react-router-dom";
import {
  Minus,
  Plus,
  Trash2,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

export default function Cart({
  cart,
  onUpdate,
  onRemove,
}) {
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.qty,
    0
  );

  const shipping =
    subtotal >= 999 || subtotal === 0
      ? 0
      : 79;

  const total = subtotal + shipping;

  return (
    <main className="section cart-page">

      {/* PAGE HEADER */}
      <div className="page-title">

        <p className="eyebrow">
          YOUR EDIT
        </p>

        <h1>
          Shopping <em>bag.</em>
        </h1>

        {cart.length > 0 && (
          <p className="cart-count">
            {cart.length}{" "}
            {cart.length === 1
              ? "item"
              : "items"}{" "}
            in your bag
          </p>
        )}

      </div>

      {/* EMPTY CART */}
      {!cart.length ? (

        <div className="empty cart-empty">

          <ShoppingBag size={42} />

          <h2>
            Your bag is waiting.
          </h2>

          <p>
            Discover something beautiful
            for your next ritual.
          </p>

          <Link
            className="btn dark"
            to="/shop"
          >
            Continue shopping
            <ArrowRight size={17} />
          </Link>

        </div>

      ) : (

        <div className="cart-layout">

          {/* CART ITEMS */}
          <div className="cart-items">

            {cart.map((item) => (

              <article
                className="cart-item"
                key={item.id}
              >

                {/* IMAGE */}
                <Link
                  to={`/product/${item.id}`}
                  className="cart-image"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />
                </Link>

                {/* DETAILS */}
                <div className="cart-item-info">

                  <p className="eyebrow">
                    {item.category}
                  </p>

                  <Link
                    to={`/product/${item.id}`}
                  >
                    <h3>
                      {item.name}
                    </h3>
                  </Link>

                  <p className="cart-price">
                    ₹
                    {item.price.toLocaleString(
                      "en-IN"
                    )}
                  </p>

                  {/* CONTROLS */}
                  <div className="cart-controls">

                    <div className="qty">

                      <button
                        onClick={() =>
                          onUpdate(
                            item.id,
                            Math.max(
                              1,
                              item.qty - 1
                            )
                          )
                        }
                        aria-label="Decrease quantity"
                      >
                        <Minus size={14} />
                      </button>

                      <b>
                        {item.qty}
                      </b>

                      <button
                        onClick={() =>
                          onUpdate(
                            item.id,
                            item.qty + 1
                          )
                        }
                        aria-label="Increase quantity"
                      >
                        <Plus size={14} />
                      </button>

                    </div>

                    <button
                      className="remove"
                      onClick={() =>
                        onRemove(item.id)
                      }
                    >
                      <Trash2 size={15} />
                      Remove
                    </button>

                  </div>

                </div>

                {/* ITEM TOTAL */}
                <strong className="item-total">
                  ₹
                  {(
                    item.price * item.qty
                  ).toLocaleString("en-IN")}
                </strong>

              </article>

            ))}

          </div>

          {/* SUMMARY */}
          <aside className="summary">

            <h2>
              Order summary
            </h2>

            <div className="summary-row">
              <span>
                Subtotal
              </span>

              <b>
                ₹
                {subtotal.toLocaleString(
                  "en-IN"
                )}
              </b>
            </div>

            <div className="summary-row">
              <span>
                Shipping
              </span>

              <b>
                {shipping
                  ? `₹${shipping}`
                  : "Free"}
              </b>
            </div>

            <hr />

            <div className="total">

              <span>
                Total
              </span>

              <b>
                ₹
                {total.toLocaleString(
                  "en-IN"
                )}
              </b>

            </div>

            <Link
              className="btn dark full"
              to="/checkout"
            >
              Proceed to checkout
              <ArrowRight size={17} />
            </Link>

            <p className="free-shipping">
              Free shipping on orders
              above ₹999
            </p>

          </aside>

        </div>

      )}

    </main>
  );
}