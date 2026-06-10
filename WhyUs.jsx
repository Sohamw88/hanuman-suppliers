import React from 'react';
import './WhyUs.css';

const reasons = [
  {
    icon: '🏆',
    title: 'ISI Certified Quality',
    desc: 'Every material we supply meets Bureau of Indian Standards (BIS) quality benchmarks. We never compromise on material grade.',
  },
  {
    icon: '🚛',
    title: 'Same-Day Delivery',
    desc: 'Order before 11 AM and get delivery to your construction site the same day across Sangamner and nearby talukas.',
  },
  {
    icon: '💰',
    title: 'Competitive Bulk Pricing',
    desc: 'Direct from manufacturer pricing with no middlemen. Special rates for large orders, contractors, and repeat buyers.',
  },
  {
    icon: '📦',
    title: 'One-Stop Supplier',
    desc: 'Everything from foundation to finish — bricks, cement, steel, sand, wood. One phone call handles your full material list.',
  },
  {
    icon: '🤝',
    title: '18+ Years of Trust',
    desc: 'Hundreds of homes, commercial buildings, and infrastructure projects built using our materials across the Ahmednagar district.',
  },
  {
    icon: '📋',
    title: 'Project Estimation Help',
    desc: 'Our experienced team helps you estimate quantities and budget before you start — saving you money and surprise costs.',
  },
];

const WhyUs = () => {
  return (
    <section className="whyus" id="why-us">
      <div className="container">
        <div className="whyus__layout">
          <div className="whyus__left">
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title whyus__title">
              The Name Builders<br />
              Trust in Sangamner
            </h2>
            <p className="section-desc">
              For 18 years, Hanuman Construction Material Suppliers has been
              the first call for contractors, engineers, and homeowners when
              they need reliable materials delivered on time.
            </p>
            <div className="whyus__highlight">
              <div className="whyus__highlight-line"></div>
              <blockquote className="whyus__quote">
                "Quality materials are not an expense — they are the investment
                that holds your building together for generations."
              </blockquote>
              <span className="whyus__quote-attr">— Soham S Wagh, Owner</span>
            </div>
            <a href="tel:8530729356" className="whyus__call-btn">
              📞 Call 8530729356
            </a>
          </div>

          <div className="whyus__right">
            <div className="whyus__grid">
              {reasons.map((r) => (
                <div className="reason-card" key={r.title}>
                  <span className="reason-card__icon">{r.icon}</span>
                  <h4 className="reason-card__title">{r.title}</h4>
                  <p className="reason-card__desc">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
