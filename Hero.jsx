import React, { useEffect, useRef } from 'react';
import './Hero.css';

const Hero = () => {
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgTextRef.current) {
        bgTextRef.current.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero" id="hero">
      {/* Monumental background word — the signature element */}
      <span className="hero__bg-word" ref={bgTextRef}>BUILD</span>

      {/* Geometric accent lines */}
      <div className="hero__lines">
        <div className="hero__line hero__line--1"></div>
        <div className="hero__line hero__line--2"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">Sangamner, Maharashtra · Est. 2005</span>
          <h1 className="hero__heading">
            Strong Materials.<br />
            <em>Stronger Foundations.</em>
          </h1>
          <p className="hero__subtext">
            Hanuman Construction Material Suppliers delivers premium bricks,
            sand, cement, steel, and aggregates — direct to your construction
            site across Sangamner and the Ahmednagar district.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="hero__btn hero__btn--primary">
              Get a Free Quote
            </a>
            <a href="tel:8530729356" className="hero__btn hero__btn--outline">
              📞 8530729356
            </a>
          </div>

          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">500+</span>
              <span className="hero__stat-label">Projects Supplied</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">18+</span>
              <span className="hero__stat-label">Years Experience</span>
            </div>
            <div className="hero__stat-divider"></div>
            <div className="hero__stat">
              <span className="hero__stat-number">100%</span>
              <span className="hero__stat-label">Quality Assured</span>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__brick-grid">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="hero__brick"
                style={{ animationDelay: `${i * 0.08}s` }}
              ></div>
            ))}
          </div>
          <div className="hero__visual-badge">
            <span className="hero__badge-top">Soham S Wagh</span>
            <span className="hero__badge-num">8530729356</span>
            <span className="hero__badge-tag">Owner & Manager</span>
          </div>
        </div>
      </div>

      <a href="#materials" className="hero__scroll-hint" aria-label="Scroll down">
        <span className="hero__scroll-line"></span>
        <span className="hero__scroll-text">Scroll</span>
      </a>
    </section>
  );
};

export default Hero;
