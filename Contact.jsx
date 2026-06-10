import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: '', phone: '', project: '', material: '', message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In production, connect to your backend API here
    setSubmitted(true);
  };

  return (
    <section className="contact" id="contact">
      <div className="container">
        <div className="contact__layout">

          {/* LEFT — Info */}
          <div className="contact__info">
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title contact__title">
              Let's Build Something<br />Together
            </h2>
            <p className="contact__desc">
              Tell us your project details and we'll give you a free quote
              with the best materials at competitive rates — delivered on time.
            </p>

            <div className="contact__details">
              <div className="contact__detail-item">
                <span className="contact__detail-icon">📞</span>
                <div>
                  <span className="contact__detail-label">Call / WhatsApp</span>
                  <a href="tel:8530729356" className="contact__detail-value">8530729356</a>
                </div>
              </div>

              <div className="contact__detail-item">
                <span className="contact__detail-icon">👤</span>
                <div>
                  <span className="contact__detail-label">Contact Person</span>
                  <span className="contact__detail-value">Soham S Wagh</span>
                </div>
              </div>

              <div className="contact__detail-item">
                <span className="contact__detail-icon">📍</span>
                <div>
                  <span className="contact__detail-label">Location</span>
                  <span className="contact__detail-value">Sangamner, Ahmednagar District, Maharashtra</span>
                </div>
              </div>

              <div className="contact__detail-item">
                <span className="contact__detail-icon">⏰</span>
                <div>
                  <span className="contact__detail-label">Business Hours</span>
                  <span className="contact__detail-value">Mon – Sat: 8:00 AM – 7:00 PM</span>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/918530729356?text=Hello%2C%20I%20need%20construction%20materials."
              className="contact__whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>💬</span> WhatsApp Us Now
            </a>
          </div>

          {/* RIGHT — Form */}
          <div className="contact__form-wrap">
            {submitted ? (
              <div className="contact__success">
                <span className="contact__success-icon">✅</span>
                <h3>Request Received!</h3>
                <p>We'll call you back within 2 hours to discuss your material requirements.</p>
                <button className="contact__success-back" onClick={() => setSubmitted(false)}>
                  Submit Another Request
                </button>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit}>
                <h3 className="contact__form-title">Request a Free Quote</h3>

                <div className="contact__row">
                  <div className="contact__field">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Rajesh Patil"
                      required
                    />
                  </div>
                  <div className="contact__field">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="9876543210"
                      required
                    />
                  </div>
                </div>

                <div className="contact__row">
                  <div className="contact__field">
                    <label>Project Type</label>
                    <select name="project" value={form.project} onChange={handleChange}>
                      <option value="">Select type...</option>
                      <option>Residential Building</option>
                      <option>Commercial Construction</option>
                      <option>Road / Infrastructure</option>
                      <option>Industrial Project</option>
                      <option>Home Renovation</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="contact__field">
                    <label>Material Needed</label>
                    <select name="material" value={form.material} onChange={handleChange}>
                      <option value="">Select material...</option>
                      <option>Bricks</option>
                      <option>Cement</option>
                      <option>Sand & Aggregates</option>
                      <option>Steel / TMT Bars</option>
                      <option>Stone & Gravel</option>
                      <option>All / Multiple Materials</option>
                    </select>
                  </div>
                </div>

                <div className="contact__field">
                  <label>Project Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project — location, quantity, timeline..."
                    rows={4}
                  />
                </div>

                <button type="submit" className="contact__submit">
                  Send Quote Request →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
