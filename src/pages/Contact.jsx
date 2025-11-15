import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
    }
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateForm()
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData)
      setIsSubmitted(true)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      })
      setTimeout(() => setIsSubmitted(false), 5000)
    } else {
      setErrors(newErrors)
    }
  }

  return (
    <div className="contact">
      <section className="contact-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-form-section">
              <h2>Send Us a Message</h2>
              
              {isSubmitted && (
                <div className="success-message">
                  ✓ Thank you for contacting us! We will get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={errors.name ? 'error' : ''}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? 'error' : ''}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    className={errors.message ? 'error' : ''}
                  ></textarea>
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button type="submit" className="submit-button">Send Message</button>
              </form>
            </div>

            <div className="contact-info-section">
              <h2>Get In Touch</h2>
              
              <div className="contact-info-card">
                <div className="info-icon">📍</div>
                <h3>Address</h3>
                <p>JSM Cosmetics Manufacturing Unit<br />
                [Your Address Here]<br />
                [City, State, PIN]</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">📧</div>
                <h3>Email</h3>
                <p>info@jsmcosmetics.com<br />
                support@jsmcosmetics.com</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">📞</div>
                <h3>Phone</h3>
                <p>+91 XXXXXXXXXX<br />
                +91 XXXXXXXXXX</p>
              </div>

              <div className="contact-info-card">
                <div className="info-icon">🕐</div>
                <h3>Business Hours</h3>
                <p>Monday - Saturday: 9:00 AM - 6:00 PM<br />
                Sunday: Closed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="map-section">
        <div className="container">
          <h2>Find Us</h2>
          <div className="map-placeholder">
            <p>🗺️ Map will be displayed here</p>
            <p style={{fontSize: '0.9rem', color: '#666', marginTop: '1rem'}}>
              (Integrate Google Maps or other mapping service)
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact