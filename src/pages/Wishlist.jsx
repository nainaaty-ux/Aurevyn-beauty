import React from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, Trash2 } from "lucide-react";
import { products } from "../data/products";

export default function Wishlist({
  wishlist,
  onAdd,
  onWishlist,
}) {
  const wishlistProducts = products.filter((product) =>
    wishlist.includes(product.id)
  );

  return (
    <main className="wishlist-page section">

      <div className="page-title">
        <p className="eyebrow">YOUR FAVOURITES</p>

        <h1>
          Your wishlist
        </h1>

        <p>
          Keep the beauty essentials you love close.
        </p>
      </div>

      {wishlistProducts.length === 0 ? (

        <div className="wishlist-empty">

          <div className="empty-heart">
            <Heart size={38} />
          </div>

          <h2>
            Your wishlist is waiting.
          </h2>

          <p>
            Save the products you love and find them here anytime.
          </p>

          <Link
            to="/shop"
            className="btn dark"
          >
            Explore the collection
            <ShoppingBag size={17} />
          </Link>

        </div>

      ) : (

        <div className="wishlist-grid">

          {wishlistProducts.map((product) => (

            <article
              className="wishlist-card"
              key={product.id}
            >

              <div className="wishlist-image">

                <Link to={`/product/${product.id}`}>

                  <img
                    src={product.image}
                    alt={product.name}
                  />

                </Link>

                <button
                  className="wishlist-remove"
                  onClick={() => onWishlist(product.id)}
                  aria-label="Remove from wishlist"
                >
                  <Trash2 size={17} />
                </button>

              </div>

              <div className="wishlist-info">

                <p className="product-category">
                  {product.category}
                </p>

                <Link
                  to={`/product/${product.id}`}
                >
                  <h3>
                    {product.name}
                  </h3>
                </Link>

                <div className="wishlist-bottom">

                  <strong>
                    ₹{product.price.toLocaleString("en-IN")}
                  </strong>

                  <button
                    className="add-btn"
                    onClick={() => onAdd(product)}
                  >
                    <ShoppingBag size={16} />
                    Add
                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

      )}

    </main>
  );
}