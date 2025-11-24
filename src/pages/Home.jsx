import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {

  // ----------------- CAROUSEL CODE FIXED -----------------
  const slides = [
    { id: 1, img: "/public/croasul p2.jpg" },
    { id: 2, img: "/public/croasul p3.jpg" },
    { id: 3, img: "/public/croasul p1.jpg" },
  ];

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  // -------------------------------------------------------

  const features = [
    {
      icon: '🚚',
      title: 'Fast Delivery',
      description: 'Quick and reliable shipping to your doorstep'
    },
    {
      icon: '🔒',
      title: 'Secure Payment',
      description: 'Safe and encrypted payment options'
    },
    {
      icon: '💬',
      title: 'Customer Support',
      description: '24/7 customer service available'
    },
    {
      icon: '✨',
      title: 'Quality Products',
      description: 'Premium quality personal care items'
    }
  ]

  const categories = [
    { title: 'Soaps', description: 'Natural and medicated soaps', link: '/soaps' },
    { title: 'Shampoos', description: 'Hair care solutions', link: '/products' },
    { title: 'Baby Care', description: 'Gentle products for babies', link: '/products' },
    { title: 'Pet Care', description: 'Safe pet products', link: '/products' }
  ]

  return (
    <div className="home">

      {/* ---------------- CAROUSEL SECTION ---------------- */}
      <div className="carousel-container">
        <div
          className="carousel-slides"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide) => (
            <img key={slide.id} src={slide.img} alt="banner" />
          ))}
        </div>

        <button className="carousel-btn left" onClick={prevSlide}>❮</button>
        <button className="carousel-btn right" onClick={nextSlide}>❯</button>

        <div className="carousel-dots">
          {slides.map((_, index) => (
            <button
              key={index}
              className={current === index ? "active" : ""}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
      {/* -------------------------------------------------- */}

      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to JSM Cosmetics</h1>
          <p>Premium Personal Care Products for Your Daily Needs</p>
          <Link to="/products" className="cta-button">Shop Now</Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="categories">
        <div className="container">
          <h2>Our Product Categories</h2>
          <div className="categories-grid">
            {categories.map((category, index) => (
              <Link to={category.link} key={index} className="category-card">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Available on Leading E-commerce Platforms</h2>
          <p>Find our products on Amazon, Flipkart, Meesho, and Snapdeal</p>
        </div>
      </section>

    </div>
  )
}

export default Home
