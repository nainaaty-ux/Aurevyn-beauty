import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Heart, Leaf } from "lucide-react";

export default function About() {
  return (
    <main className="about-page">

      {/* HERO SECTION */}

      <section className="about-hero">

        <div className="about-hero-content">
          <p className="eyebrow">
            THE AUREVYN STORY
          </p>

          <h1>
            Beauty that feels
            <br />
            <em>like you.</em>
          </h1>

          <p>
            AUREVYN is a modern beauty brand created
            for everyday rituals, effortless confidence,
            and the little moments that make you feel
            beautifully yourself.
          </p>
        </div>

        <div className="about-hero-image">
          <img
            src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1400&q=90"
            alt="AUREVYN beauty ritual"
          />
        </div>

      </section>


      {/* OUR STORY */}

      <section className="about-story">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=1200&q=90"
            alt="Beauty products"
          />
        </div>

        <div className="story-content">

          <p className="eyebrow">
            OUR STORY
          </p>

          <h2>
            Beauty is not about
            <br />
            <em>changing who you are.</em>
          </h2>

          <p>
            We believe beauty should feel personal,
            simple, and inspiring. AUREVYN was created
            to bring thoughtfully selected beauty
            essentials into your everyday routine.
          </p>

          <p>
            From skincare to makeup, haircare, and
            fragrance, every product is chosen to make
            your rituals feel a little more special.
          </p>

        </div>

      </section>


      {/* PHILOSOPHY */}

      <section className="philosophy">

        <div className="philosophy-heading">

          <p className="eyebrow">
            WHAT WE BELIEVE
          </p>

          <h2>
            Your ritual.
            <br />
            <em>Your rules.</em>
          </h2>

        </div>

        <div className="values-grid">

          <div className="value-card">

            <div className="value-icon">
              <Sparkles size={25} />
            </div>

            <h3>
              Thoughtfully Chosen
            </h3>

            <p>
              Products selected with intention
              for your everyday beauty rituals.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              <Heart size={25} />
            </div>

            <h3>
              Beauty With Feeling
            </h3>

            <p>
              Because the best beauty moments
              are the ones that make you feel good.
            </p>

          </div>


          <div className="value-card">

            <div className="value-icon">
              <Leaf size={25} />
            </div>

            <h3>
              Made For Your Ritual
            </h3>

            <p>
              Everyday essentials designed to
              fit beautifully into your lifestyle.
            </p>

          </div>

        </div>

      </section>


      {/* QUOTE */}

      <section className="about-quote">

        <p className="eyebrow">
          A LITTLE REMINDER
        </p>

        <h2>
          “You don't need to become
          <br />
          someone else to feel beautiful.”
        </h2>

        <p>
          — The AUREVYN philosophy
        </p>

      </section>


      {/* CTA */}

      <section className="about-cta">

        <div>

          <p className="eyebrow">
            FIND YOUR RITUAL
          </p>

          <h2>
            Discover something
            <br />
            <em>beautiful.</em>
          </h2>

          <Link
            to="/shop"
            className="btn dark"
          >
            Explore the collection
            <ArrowRight size={17} />
          </Link>

        </div>

      </section>

    </main>
  );
}