import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Minus,
  Plus,
  Heart,
  ShoppingBag,
  ArrowLeft,
  Star,
  Check,
} from "lucide-react";
import { products } from "../data/products";

export default function ProductDetails({
  onAdd,
  onWishlist,
  wishlist,
}) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <main className="section empty">
        <h2>Product not found</h2>

        <Link
          to="/shop"
          className="btn dark"
        >
          Back to Shop
        </Link>
      </main>
    );
  }

  const isWishlisted = wishlist.includes(product.id);

  const discount = Math.round(
    ((product.oldPrice - product.price) /
      product.oldPrice) *
      100
  );

  const addToBag = () => {
    onAdd(product, qty);
  };

  const buyNow = () => {
    onAdd(product, qty);
    navigate("/cart");
  };

  return (
    <main className="product-details-page">

      {/* BACK BUTTON */}

      <div className="product-back">
        <Link to="/shop">
          <ArrowLeft size={16} />
          Back to collection
        </Link>
      </div>

      <section className="product-details">

        {/* PRODUCT IMAGE */}

        <div className="product-details-image">

          <span className="discount-badge">
            {discount}% OFF
          </span>

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        {/* PRODUCT INFORMATION */}

        <div className="product-details-info">

          <p className="eyebrow">
            {product.category}
          </p>

          <h1>
            {product.name}
          </h1>

          <div className="rating">

            <div className="stars-small">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={16}
                  fill={
                    star <= Math.round(product.rating)
                      ? "currentColor"
                      : "none"
                  }
                />
              ))}
            </div>

            <span>
              {product.rating} · {product.reviews} reviews
            </span>

          </div>

          <div className="detail-price">

            <strong>
              ₹{product.price.toLocaleString("en-IN")}
            </strong>

            <del>
              ₹{product.oldPrice.toLocaleString("en-IN")}
            </del>

          </div>

          <p className="product-long-description">
            {product.description}
          </p>

          {/* BENEFITS */}

          <div className="benefits">

            <h3>
              Why you'll love it
            </h3>

            {product.benefits.map((benefit) => (
              <div
                className="benefit"
                key={benefit}
              >
                <Check size={17} />
                <span>{benefit}</span>
              </div>
            ))}

          </div>

          {/* QUANTITY + WISHLIST */}

          <div className="detail-actions">

            <div className="detail-qty">

              <button
                onClick={() =>
                  setQty(Math.max(1, qty - 1))
                }
              >
                <Minus size={16} />
              </button>

              <b>{qty}</b>

              <button
                onClick={() =>
                  setQty(qty + 1)
                }
              >
                <Plus size={16} />
              </button>

            </div>

            <button
              className={
                isWishlisted
                  ? "detail-wishlist active"
                  : "detail-wishlist"
              }
              onClick={() =>
                onWishlist(product.id)
              }
            >
              <Heart
                size={19}
                fill={
                  isWishlisted
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

          </div>

          {/* BUTTONS */}

          <div className="detail-buttons">

            <button
              className="btn dark"
              onClick={addToBag}
            >
              <ShoppingBag size={18} />
              Add to Bag
            </button>

            <button
              className="btn buy-now"
              onClick={buyNow}
            >
              Buy Now
            </button>

          </div>

          {/* EXTRA INFO */}

          <div className="product-extra-info">

            <div>
              <span>🚚</span>
              <p>
                <b>Free shipping</b>
                <br />
                On orders above ₹999
              </p>
            </div>

            <div>
              <span>↻</span>
              <p>
                <b>Easy returns</b>
                <br />
                Within 7 days of delivery
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}