import React from "react";
import { Link } from "react-router-dom";
import {
  Instagram,
  Facebook,
  Mail,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">

      <div className="footer-inner">

        {/* BRAND */}
        <div className="footer-brand">

          <h2>
            AUREVYN
          </h2>

          <p>
            Thoughtfully crafted beauty
            essentials designed to enhance
            your natural radiance and make
            every ritual feel beautiful.
          </p>

        </div>

        {/* SHOP */}
        <div>

          <h3>
            Shop
          </h3>

          <div className="footer-links">

            <Link to="/shop">
              All Products
            </Link>

            <Link to="/shop?category=Skincare">
              Skincare
            </Link>

            <Link to="/shop?category=Makeup">
              Makeup
            </Link>

            <Link to="/shop?category=Haircare">
              Haircare
            </Link>

            <Link to="/shop?category=Fragrance">
              Fragrance
            </Link>

          </div>

        </div>

        {/* EXPLORE */}
        <div>

          <h3>
            Explore
          </h3>

          <div className="footer-links">

            <Link to="/about">
              Our Story
            </Link>

            <Link to="/wishlist">
              Wishlist
            </Link>

            <Link to="/cart">
              Shopping Bag
            </Link>

            <Link to="/shop">
              Collections
            </Link>

          </div>

        </div>

        {/* CONNECT */}
        <div>

          <h3>
            Connect
          </h3>

          <div className="footer-links">

            <a href="mailto:hello@aurevynbeauty.com">
              Contact Us
            </a>

            <a href="#">
              Shipping & Returns
            </a>

            <a href="#">
              Privacy Policy
            </a>

          </div>

          <div className="footer-social">

            <a
              href="#"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>

            <a
              href="#"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>

            <a
              href="mailto:hello@aurevynbeauty.com"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>

          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} AUREVYN BEAUTY.
          All rights reserved.
        </p>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={16} />
        </button>

      </div>

    </footer>
  );
}