import React, { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SlidersHorizontal, X } from "lucide-react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Shop({
  onAdd,
  onWishlist,
  wishlist,
}) {
  const [params] = useSearchParams();

  const initialCategory =
    params.get("category") || "All";

  const searchQuery =
    params.get("search") || "";

  const [category, setCategory] =
    useState(initialCategory);

  const [sort, setSort] =
    useState("featured");

  const categories = [
    "All",
    "Skincare",
    "Makeup",
    "Haircare",
    "Fragrance",
  ];

  const filteredProducts = useMemo(() => {
    let list = products.filter((product) => {

      const matchesCategory =
        category === "All" ||
        product.category === category;

      const matchesSearch =
        !searchQuery ||
        product.name
          .toLowerCase()
          .includes(searchQuery.toLowerCase()) ||
        product.category
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      return (
        matchesCategory &&
        matchesSearch
      );
    });

    if (sort === "low") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      list.sort((a, b) => b.price - a.price);
    }

    if (sort === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }

    return list;
  }, [category, sort, searchQuery]);

  const clearFilters = () => {
    setCategory("All");
    setSort("featured");
  };

  return (
    <main className="shop-page">

      {/* HEADER */}
      <section className="shop-heading section">

        <p className="eyebrow">
          THE COLLECTION
        </p>

        <h1>
          Beauty, <em>refined.</em>
        </h1>

        <p>
          Explore our edit of thoughtfully
          crafted beauty essentials.
        </p>

        {searchQuery && (
          <div className="search-result">
            Searching for:
            <strong> "{searchQuery}"</strong>
          </div>
        )}

      </section>

      {/* TOOLBAR */}
      <section className="shop-toolbar-wrapper">

        <div className="shop-toolbar">

          {/* FILTERS */}
          <div className="filters">

            {categories.map((item) => (
              <button
                key={item}
                className={
                  category === item
                    ? "filter active"
                    : "filter"
                }
                onClick={() =>
                  setCategory(item)
                }
              >
                {item}
              </button>
            ))}

          </div>

          {/* SORT */}
          <div className="sort">

            <SlidersHorizontal
              size={17}
            />

            <select
              value={sort}
              onChange={(e) =>
                setSort(e.target.value)
              }
            >
              <option value="featured">
                Featured
              </option>

              <option value="low">
                Price: Low to High
              </option>

              <option value="high">
                Price: High to Low
              </option>

              <option value="rating">
                Best Rated
              </option>
            </select>

          </div>

        </div>

      </section>

      {/* PRODUCT COUNT */}
      <div className="shop-results">

        <p>
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1
            ? "product"
            : "products"}{" "}
          found
        </p>

        {(category !== "All" ||
          sort !== "featured") && (

          <button
            className="clear-filters"
            onClick={clearFilters}
          >
            Clear filters
            <X size={15} />
          </button>

        )}

      </div>

      {/* PRODUCTS */}
      <section className="section shop-products">

        {filteredProducts.length > 0 ? (

          <div className="product-grid">

            {filteredProducts.map(
              (product) => (

                <ProductCard
                  key={product.id}
                  product={product}
                  onAdd={onAdd}
                  onWishlist={onWishlist}
                  isWishlisted={
                    wishlist.includes(
                      product.id
                    )
                  }
                />

              )
            )}

          </div>

        ) : (

          <div className="empty">

            <h2>
              No products found
            </h2>

            <p>
              Try another search or category.
            </p>

            <button
              className="btn dark"
              onClick={clearFilters}
            >
              View all products
            </button>

          </div>

        )}

      </section>

    </main>
  );
}