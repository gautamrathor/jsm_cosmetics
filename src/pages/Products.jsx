import React, { useState } from 'react'
import './Products.css'

function Products() {
  const [filter, setFilter] = useState('all')

  const products = [
    {
      id: 1,
      name: 'Anti-Dandruff Shampoo',
      category: 'Hair Care',
      description: 'Effective solution for dandruff-free hair',
      price: '₹149'
    },
    {
      id: 2,
      name: 'Neem Soap',
      category: 'Skin Care',
      description: 'Natural neem extracts for healthy skin',
      price: '₹49'
    },
    {
      id: 3,
      name: 'Baby Care Soap',
      category: 'Baby Care',
      description: 'Gentle and mild for baby\'s delicate skin',
      price: '₹55'
    },
    {
      id: 4,
      name: 'Charcoal Soap',
      category: 'Skin Care',
      description: 'Deep cleansing activated charcoal soap',
      price: '₹59'
    },
    {
      id: 5,
      name: 'Rose Soap',
      category: 'Skin Care',
      description: 'Refreshing rose fragrance soap',
      price: '₹45'
    },
    {
      id: 6,
      name: 'Ketoconazole Shampoo',
      category: 'Hair Care',
      description: 'Medicated shampoo for scalp health',
      price: '₹189'
    },
    {
      id: 7,
      name: 'Permethrin Soap',
      category: 'Skin Care',
      description: 'Effective protection soap',
      price: '₹79'
    },
    {
      id: 8,
      name: 'Pet Care Soap',
      category: 'Pet Care',
      description: 'Safe and gentle for your pets',
      price: '₹65'
    }
  ]

  const categories = ['all', 'Hair Care', 'Skin Care', 'Baby Care', 'Pet Care']

  const filteredProducts = filter === 'all' 
    ? products 
    : products.filter(product => product.category === filter)

  return (
    <div className="products">
      <section className="products-hero">
        <div className="container">
          <h1>Our Products</h1>
          <p>Explore our wide range of premium personal care products</p>
        </div>
      </section>

      <section className="products-content">
        <div className="container">
          <div className="filter-section">
            <h3>Filter by Category:</h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`filter-btn ${filter === category ? 'active' : ''}`}
                  onClick={() => setFilter(category)}
                >
                  {category === 'all' ? 'All Products' : category}
                </button>
              ))}
            </div>
          </div>

          <div className="products-grid">
            {filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <div className="product-image-placeholder">
                  <span>{product.category}</span>
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p className="product-category">{product.category}</p>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price}</span>
                    <button className="buy-button">View Details</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="marketplace-section">
        <div className="container">
          <h2>Available On</h2>
          <div className="marketplace-list">
            <div className="marketplace-item">Amazon</div>
            <div className="marketplace-item">Flipkart</div>
            <div className="marketplace-item">Meesho</div>
            <div className="marketplace-item">Snapdeal</div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products