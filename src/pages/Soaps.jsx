import React, { useState } from 'react'
import './Soaps.css'

function Soaps() {
  const soaps = [
    {
      id: 1,
      name: 'Neem Soap',
      benefits: 'Antibacterial, Anti-fungal, Natural healing',
      ingredients: 'Neem extract, Glycerin, Natural oils',
      price: '₹49',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Charcoal Soap',
      benefits: 'Deep cleansing, Detoxifying, Removes impurities',
      ingredients: 'Activated charcoal, Tea tree oil, Aloe vera',
      price: '₹59',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Rose Soap',
      benefits: 'Moisturizing, Refreshing fragrance, Soft skin',
      ingredients: 'Rose extract, Vitamin E, Shea butter',
      price: '₹45',
      rating: 4.3
    },
    {
      id: 4,
      name: 'Baby Care Soap',
      benefits: 'Gentle, Mild, pH balanced',
      ingredients: 'Milk protein, Honey, Natural moisturizers',
      price: '₹55',
      rating: 4.8
    },
    {
      id: 5,
      name: 'Ketoconazole Soap',
      benefits: 'Anti-dandruff, Medicated, Scalp health',
      ingredients: 'Ketoconazole 2%, Zinc pyrithione, Tea tree oil',
      price: '₹89',
      rating: 4.6
    },
    {
      id: 6,
      name: 'Permethrin Soap',
      benefits: 'Protective, Effective, Safe',
      ingredients: 'Permethrin, Natural oils, Glycerin',
      price: '₹79',
      rating: 4.4
    }
  ]

  const [selectedSoap, setSelectedSoap] = useState(null)

  return (
    <div className="soaps">
      <section className="soaps-hero">
        <div className="container">
          <h1>Our Soap Collection</h1>
          <p>Natural ingredients, exceptional care</p>
        </div>
      </section>

      <section className="soaps-content">
        <div className="container">
          <div className="soaps-grid">
            {soaps.map((soap) => (
              <div key={soap.id} className="soap-card">
                <div className="soap-image-placeholder">
                  <span>SOAP</span>
                </div>
                <div className="soap-info">
                  <h3>{soap.name}</h3>
                  <div className="soap-rating">
                    {'⭐'.repeat(Math.floor(soap.rating))} {soap.rating}
                  </div>
                  <p className="soap-benefits">{soap.benefits}</p>
                  <div className="soap-footer">
                    <span className="soap-price">{soap.price}</span>
                    <button 
                      className="view-details-btn"
                      onClick={() => setSelectedSoap(soap)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="soap-info-section">
        <div className="container">
          <h2>Why Choose Our Soaps?</h2>
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🌿</div>
              <h3>Natural Ingredients</h3>
              <p>Made with carefully selected natural ingredients for the best care</p>
            </div>
            <div className="info-card">
              <div className="info-icon">✅</div>
              <h3>Dermatologically Tested</h3>
              <p>All our soaps are tested and approved by dermatologists</p>
            </div>
            <div className="info-card">
              <div className="info-icon">👨‍👩‍👧‍👦</div>
              <h3>Suitable for All</h3>
              <p>We have soaps for every skin type and need</p>
            </div>
            <div className="info-card">
              <div className="info-icon">♻️</div>
              <h3>Eco-Friendly</h3>
              <p>Biodegradable formulations that care for the environment</p>
            </div>
          </div>
        </div>
      </section>

      {selectedSoap && (
        <div className="modal-overlay" onClick={() => setSelectedSoap(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedSoap(null)}>×</button>
            <h2>{selectedSoap.name}</h2>
            <div className="modal-rating">
              {'⭐'.repeat(Math.floor(selectedSoap.rating))} {selectedSoap.rating}
            </div>
            <p><strong>Benefits:</strong> {selectedSoap.benefits}</p>
            <p><strong>Ingredients:</strong> {selectedSoap.ingredients}</p>
            <p className="modal-price">{selectedSoap.price}</p>
            <button className="add-to-cart">Add to Cart</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Soaps