import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__brand-name">🏗️ Hanuman Construction</span>
            <p className="footer__brand-tagline">Material Suppliers</p>
            <p className="footer__brand-desc">
              Premium construction materials supplied across Sangamner and
              Ahmednagar district, Maharashtra, since 2005.
            </p>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Materials</h4>
            <ul className="footer__list">
              <li>Bricks (Class A & B)</li>
              <li>Cement (OPC/PPC)</li>
              <li>Sand & M-Sand</li>
              <li>Steel / TMT Bars</li>
              <li>Stone & Gravel</li>
              <li>Wood & Timber</li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__list footer__list--links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#materials">Materials</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Get Quote</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__col-title">Contact</h4>
            <ul className="footer__list">
              <li>
                <a href="tel:8530729356" className="footer__phone">📞 8530729356</a>
              </li>
              <li>Soham S Wagh</li>
              <li>Sangamner, Maharashtra</li>
              <li>Ahmednagar District</li>
              <li className="footer__hours">Mon–Sat · 8AM–7PM</li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {year} Hanuman Construction Material Suppliers. All rights reserved.</p>
          <p className="footer__credit">Sangamner, Maharashtra 422605</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
