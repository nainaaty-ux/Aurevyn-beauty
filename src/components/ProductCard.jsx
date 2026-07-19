import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, ShoppingBag, ArrowUpRight } from "lucide-react";

export default function ProductCard({
  product,
  onAdd,
  onWishlist,
  isWishlisted,
}) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAdd(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <article className="product-card">

      {/* PRODUCT IMAGE */}
      <div className="product-image">

        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
          />
        </Link>

        {/* WISHLIST */}
        <button
          className={`wishlist-btn ${
            isWishlisted ? "active" : ""
          }`}
          onClick={() => onWishlist(product.id)}
          aria-label="Add to wishlist"
        >
          <Heart
            size={18}
            fill={isWishlisted ? "currentColor" : "none"}
          />
        </button>

        {/* QUICK VIEW */}
        <Link
          to={`/product/${product.id}`}
          className="quick-view"
        >
          Quick View
          <ArrowUpRight size={15} />
        </Link>

      </div>

      {/* PRODUCT DETAILS */}
      <div className="product-info">

        <p className="product-category">
          {product.category}
        </p>

        <Link to={`/product/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>

        <p className="product-description">
          {product.description}
        </p>

        <div className="product-bottom">

          <span className="product-price">
            ₹{product.price}
          </span>

          <button
            className={`add-btn ${
              added ? "added" : ""
            }`}
            onClick={handleAdd}
          >
            <ShoppingBag size={16} />

            {added ? "Added ✓" : "Add to Bag"}
          </button>

        </div>

      </div>

    </article>
  );
}