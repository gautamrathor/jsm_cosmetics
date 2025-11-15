import React from 'react'
import './About.css'

function About() {
  const values = [
    {
      title: 'Quality First',
      description: 'We never compromise on the quality of our products'
    },
    {
      title: 'Customer Focused',
      description: 'Our customers are at the heart of everything we do'
    },
    {
      title: 'Innovation',
      description: 'Constantly improving and introducing new products'
    },
    {
      title: 'Sustainability',
      description: 'Committed to eco-friendly practices'
    }
  ]

  return (
    <div className="about">
      <section className="about-hero">
        <div className="container">
          <h1>About JSM Cosmetics</h1>
          <p>Your trusted partner in personal care since inception</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <div className="about-section">
            <h2>Our Story</h2>
            <p>
              JSM Cosmetics was founded with a vision to provide high-quality, 
              affordable personal care products to everyone. We believe that 
              everyone deserves access to premium skincare and haircare solutions.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Mission</h2>
            <p>
              To deliver exceptional personal care products that enhance the 
              daily lives of our customers while maintaining the highest standards 
              of quality, safety, and sustainability.
            </p>
          </div>

          <div className="about-section">
            <h2>Our Values</h2>
            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-card">
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="about-section">
            <h2>Our Journey</h2>
            <p>
              From humble beginnings to becoming a trusted name in personal care, 
              our journey has been driven by passion, dedication, and the trust 
              of our valued customers. We continue to grow and expand our product 
              range to meet diverse needs.
            </p>
          </div>

          <div className="about-section">
            <h2>Manufacturing Excellence</h2>
            <p>
              Our state-of-the-art manufacturing facility ensures that every 
              product meets stringent quality standards. We use the finest 
              ingredients and follow best practices in production to deliver 
              products you can trust.
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="container">
          <h2>Our Commitment to You</h2>
          <p>
            We are committed to providing you with products that are safe, 
            effective, and made with care. Your satisfaction is our success.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About