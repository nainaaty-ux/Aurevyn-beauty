import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";

export default function App() {

  const [cart, setCart] = useState(() =>
    JSON.parse(
      localStorage.getItem("aurevyn-cart") || "[]"
    )
  );

  const [wishlist, setWishlist] = useState(() =>
    JSON.parse(
      localStorage.getItem("aurevyn-wishlist") || "[]"
    )
  );

  const [toast, setToast] = useState("");

  useEffect(() => {
    localStorage.setItem(
      "aurevyn-cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(
      "aurevyn-wishlist",
      JSON.stringify(wishlist)
    );
  }, [wishlist]);


  // TOAST FUNCTION

  const showToast = (message) => {
    setToast(message);

    setTimeout(() => {
      setToast("");
    }, 2500);
  };


  // ADD TO CART

  const add = (product, qty = 1) => {

    setCart((currentCart) => {

      const found = currentCart.find(
        (item) => item.id === product.id
      );

      if (found) {

        return currentCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                qty: item.qty + qty,
              }
            : item
        );

      }

      return [
        ...currentCart,
        {
          ...product,
          qty,
        },
      ];

    });

    showToast("✨ Added to your bag");
  };


  // UPDATE CART

  const update = (id, qty) => {

    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id
          ? {
              ...item,
              qty,
            }
          : item
      )
    );

  };


  // REMOVE FROM CART

  const remove = (id) => {

    setCart((currentCart) =>
      currentCart.filter(
        (item) => item.id !== id
      )
    );

    showToast("🛍️ Removed from your bag");

  };


  // WISHLIST

  const toggle = (id) => {

    setWishlist((currentWishlist) => {

      const alreadyAdded =
        currentWishlist.includes(id);

      if (alreadyAdded) {

        showToast(
          "♡ Removed from wishlist"
        );

        return currentWishlist.filter(
          (itemId) => itemId !== id
        );

      }

      showToast(
        "♡ Added to wishlist"
      );

      return [
        ...currentWishlist,
        id,
      ];

    });

  };


  // CLEAR CART

  const clear = () => {

    setCart([]);

    showToast(
      "✨ Order placed successfully"
    );

  };


  return (

    <>

      <Navbar
        cartCount={cart.reduce(
          (sum, item) =>
            sum + item.qty,
          0
        )}

        wishlistCount={
          wishlist.length
        }
      />


      <Routes>

        <Route
          path="/"
          element={
            <Home
              onAdd={add}
              onWishlist={toggle}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/shop"
          element={
            <Shop
              onAdd={add}
              onWishlist={toggle}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/product/:id"
          element={
            <ProductDetails
              onAdd={add}
              onWishlist={toggle}
              wishlist={wishlist}
            />
          }
        />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              onUpdate={update}
              onRemove={remove}
            />
          }
        />

        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              onClear={clear}
            />
          }
        />

        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              onAdd={add}
              onWishlist={toggle}
            />
          }
        />

        <Route
          path="/about"
          element={
            <About />
          }
        />

      </Routes>


      <Footer />


      {/* TOAST */}

      {toast && (

        <div className="toast">

          <span>
            {toast}
          </span>

          <button
            onClick={() =>
              setToast("")
            }
          >
            ×
          </button>

        </div>

      )}

    </>

  );

}