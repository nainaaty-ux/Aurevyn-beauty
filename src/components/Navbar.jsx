import { Link, useNavigate } from "react-router-dom";
import {
  Search,
  Heart,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";
import React, { useState } from "react";

export default function Navbar({
  cartCount,
  wishlistCount,
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const submit = (e) => {
    e.preventDefault();

    if (search.trim()) {
      navigate(
        `/shop?search=${encodeURIComponent(search)}`
      );
    }
  };

  return (
    <header className="navbar">

      <Link to="/" className="logo">
        AUREVYN <span>BEAUTY</span>
      </Link>

      <nav
        className={
          open
            ? "nav-links open"
            : "nav-links"
        }
      >
        <Link
          to="/"
          onClick={() => setOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/shop"
          onClick={() => setOpen(false)}
        >
          Shop
        </Link>

        <Link
          to="/shop?category=Skincare"
          onClick={() => setOpen(false)}
        >
          Skincare
        </Link>

        <Link
          to="/shop?category=Makeup"
          onClick={() => setOpen(false)}
        >
          Makeup
        </Link>

        <Link
          to="/about"
          onClick={() => setOpen(false)}
        >
          About Us
        </Link>
      </nav>

      <div className="nav-actions">

        <form
          className="search-box"
          onSubmit={submit}
        >
          <Search size={17} />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search beauty..."
          />
        </form>

        <Link
          to="/wishlist"
          className="icon-link"
        >
          <Heart size={20} />

          {wishlistCount > 0 && (
            <b>{wishlistCount}</b>
          )}
        </Link>

        <Link
          to="/cart"
          className="icon-link"
        >
          <ShoppingBag size={20} />

          {cartCount > 0 && (
            <b>{cartCount}</b>
          )}
        </Link>

        <button
          className="mobile-menu"
          onClick={() =>
            setOpen(!open)
          }
        >
          {open ? <X /> : <Menu />}
        </button>

      </div>

    </header>
  );
}