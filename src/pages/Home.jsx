import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
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
    {
      title: 'Soaps',
      description: 'Natural and medicated soaps for all skin types',
      link: '/soaps'
    },
    {
      title: 'Shampoos',
      description: 'Hair care solutions for healthy and shiny hair',
      link: '/products'
    },
    {
      title: 'Baby Care',
      description: 'Gentle products for your little ones',
      link: '/products'
    },
    {
      title: 'Pet Care',
      description: 'Safe and effective products for your pets',
      link: '/products'
    }
  ]

  return (
    <div className="home">
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