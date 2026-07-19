import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import { products, categories } from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Home({ onAdd, onWishlist, wishlist }) {
  return (
    <main>

      {/* HERO SECTION */}
      <motion.section
        className="hero"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >

        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="eyebrow">
            NEW SEASON • BEAUTY ESSENTIALS
          </p>

          <h1>
            Your Skin.
            <br />
            <em>Your Glow.</em>
            <br />
            Your Ritual.
          </h1>

          <p>
            Discover thoughtfully crafted beauty essentials designed to
            enhance your natural radiance.
          </p>

          <div className="hero-buttons">
            <Link className="btn dark" to="/shop">
              SHOP THE COLLECTION
              <ArrowRight size={17} />
            </Link>

            <Link className="text-btn" to="/about">
              Discover your glow
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1400&q=90"
            alt="Luxury cosmetics"
          />
        </motion.div>

      </motion.section>


      {/* SHOP BY RITUAL */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <div className="section-head">
          <div>
            <p className="eyebrow">
              SHOP BY RITUAL
            </p>

            <h2>
              Find your beauty edit
            </h2>
          </div>

          <Link className="text-btn" to="/shop">
            View all
            <ArrowRight size={16} />
          </Link>
        </div>


        <div className="category-grid">

          {categories.map((category, index) => (

            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >

              <Link
                className="category-card"
                to={`/shop?category=${category.name}`}
              >

                <img
                  src={category.image}
                  alt={category.name}
                />

                <div>
                  <h3>
                    {category.name}
                  </h3>

                  <p>
                    {category.subtitle}
                  </p>

                  <span>
                    Explore
                    <ArrowRight size={15} />
                  </span>
                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </motion.section>


      {/* CUSTOMER FAVOURITES */}
      <motion.section
        className="section soft-section"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <div className="section-head">

          <div>
            <p className="eyebrow">
              CUSTOMER FAVOURITES
            </p>

            <h2>
              Beauty essentials, loved by many
            </h2>
          </div>

          <Link className="text-btn" to="/shop">
            Shop all
            <ArrowRight size={16} />
          </Link>

        </div>


        <div className="product-grid">

          {products.slice(0, 4).map((product, index) => (

            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
            >

              <ProductCard
                product={product}
                onAdd={onAdd}
                onWishlist={onWishlist}
                isWishlisted={wishlist.includes(product.id)}
              />

            </motion.div>

          ))}

        </div>

      </motion.section>


      {/* RITUAL BANNER */}
      <motion.section
        className="ritual-banner"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          <p className="eyebrow">
            THE LUMÉRA RITUAL
          </p>

          <h2>
            Beauty is not a destination.
            <br />
            <em>
              It is a moment you make yours.
            </em>
          </h2>

          <Link className="btn light" to="/about">
            Our story
            <ArrowRight size={17} />
          </Link>

        </motion.div>

      </motion.section>


      {/* TESTIMONIAL */}
      <motion.section
        className="testimonial"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p className="eyebrow">
          THE GLOW COMMUNITY
        </p>

        <h2>
          “My everyday ritual,
          <br />
          beautifully simplified.”
        </h2>

        <div className="stars">

          {[1, 2, 3, 4, 5].map((star) => (

            <Star
              key={star}
              fill="currentColor"
              size={18}
            />

          ))}

        </div>

        <p>
          — A LUMÉRA customer
        </p>

      </motion.section>

    </main>
  );
}