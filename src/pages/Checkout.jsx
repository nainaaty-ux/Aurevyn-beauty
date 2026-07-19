import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Truck,
} from "lucide-react";

export default function Checkout({ cart, onClear }) {
  const [placed, setPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
  });

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 79;

  const total = subtotal + shipping;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const placeOrder = (e) => {
    e.preventDefault();

    setPlaced(true);

    if (onClear) {
      onClear();
    }
  };

  if (placed) {
    return (
      <main className="order-success">

        <div className="success-icon">
          <CheckCircle size={55} />
        </div>

        <p className="eyebrow">
          ORDER CONFIRMED
        </p>

        <h1>
          Your order is
          <br />
          <em>on its way.</em>
        </h1>

        <p className="success-text">
          Thank you for choosing AUREVYN.
          Your beauty ritual is being prepared
          with care.
        </p>

        <div className="order-number">
          Order #AUV
          {Math.floor(Math.random() * 90000) + 10000}
        </div>

        <Link
          to="/shop"
          className="btn dark"
        >
          Continue shopping
          <ArrowRight size={17} />
        </Link>

      </main>
    );
  }

  if (!cart.length) {
    return (
      <main className="checkout-empty section">

        <h1>
          Your bag is empty.
        </h1>

        <p>
          Add something beautiful before checking out.
        </p>

        <Link
          to="/shop"
          className="btn dark"
        >
          Explore the collection
          <ArrowRight size={17} />
        </Link>

      </main>
    );
  }

  return (
    <main className="checkout-page section">

      <div className="page-title">
        <p className="eyebrow">
          SECURE CHECKOUT
        </p>

        <h1>
          Complete your order.
        </h1>
      </div>

      <div className="checkout-layout">

        <form
          className="checkout-form"
          onSubmit={placeOrder}
        >

          <div className="checkout-section">

            <div className="checkout-heading">
              <Truck size={20} />

              <div>
                <h2>
                  Delivery details
                </h2>

                <p>
                  Where should we send your order?
                </p>
              </div>
            </div>

            <div className="form-grid">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Full name"
                required
              />

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Email address"
                required
              />

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
              />

              <input
                name="pincode"
                value={form.pincode}
                onChange={handleChange}
                placeholder="Pincode"
                required
              />

              <input
                className="full-input"
                name="address"
                value={form.address}
                onChange={handleChange}
                placeholder="Complete address"
                required
              />

              <input
                className="full-input"
                name="city"
                value={form.city}
                onChange={handleChange}
                placeholder="City"
                required
              />

            </div>

          </div>


          <div className="checkout-section">

            <div className="checkout-heading">

              <CreditCard size={20} />

              <div>
                <h2>
                  Payment method
                </h2>

                <p>
                  Choose your preferred payment option.
                </p>
              </div>

            </div>

            <label className="payment-option">

              <input
                type="radio"
                name="payment"
                defaultChecked
              />

              <span>
                Cash on Delivery
              </span>

            </label>

            <label className="payment-option">

              <input
                type="radio"
                name="payment"
              />

              <span>
                UPI / Card
              </span>

            </label>

          </div>


          <button
            className="btn dark checkout-button"
            type="submit"
          >
            Place order
            <ArrowRight size={17} />
          </button>

        </form>


        <aside className="checkout-summary">

          <h2>
            Your order
          </h2>

          <div className="checkout-products">

            {cart.map((item) => (

              <div
                className="checkout-product"
                key={item.id}
              >

                <img
                  src={item.image}
                  alt={item.name}
                />

                <div>
                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    Qty: {item.qty}
                  </p>
                </div>

                <strong>
                  ₹
                  {(item.price * item.qty).toLocaleString(
                    "en-IN"
                  )}
                </strong>

              </div>

            ))}

          </div>

          <div className="summary-row">
            <span>
              Subtotal
            </span>

            <b>
              ₹{subtotal.toLocaleString("en-IN")}
            </b>
          </div>

          <div className="summary-row">
            <span>
              Shipping
            </span>

            <b>
              {shipping ? `₹${shipping}` : "Free"}
            </b>
          </div>

          <hr />

          <div className="summary-total">
            <span>
              Total
            </span>

            <strong>
              ₹{total.toLocaleString("en-IN")}
            </strong>
          </div>

        </aside>

      </div>

    </main>
  );
}