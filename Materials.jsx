import React from 'react';
import './Materials.css';

const materials = [
  {
    icon: '🧱',
    name: 'Bricks',
    grade: 'Class A & Class B',
    desc: 'Machine-made and hand-made bricks in standard, modular, and jumbo sizes. High compressive strength for load-bearing walls.',
    specs: ['Size: 9×4.5×3 inches', 'Strength: 75–100 kg/cm²', 'Water absorption < 15%'],
    color: '#8b3a2a',
  },
  {
    icon: '🏗️',
    name: 'Cement',
    grade: 'OPC 43 & 53 Grade',
    desc: 'Branded cement from ACC, Ultratech, and Ambuja. Ideal for RCC work, plastering, masonry, and flooring.',
    specs: ['OPC 43 Grade', 'OPC 53 Grade', 'PPC available'],
    color: '#6b6b5e',
  },
  {
    icon: '⛏️',
    name: 'Sand & Aggregates',
    grade: 'Washed River Sand',
    desc: 'Fine and coarse aggregates, river sand, M-sand, and stone chips supplied in bulk for all types of construction.',
    specs: ['Fine Sand (Zone II)', 'Coarse Sand', 'M-Sand (Manufactured)'],
    color: '#c8973e',
  },
  {
    icon: '🔩',
    name: 'Steel & TMT Bars',
    grade: 'Fe 415 & Fe 500',
    desc: 'TMT bars from leading brands like SAIL, JSW, and TATA. Available in 8mm to 32mm for slabs, columns, and beams.',
    specs: ['Fe 415 & Fe 500D', '8mm – 32mm dia', 'ISI marked'],
    color: '#3a3a4a',
  },
  {
    icon: '🪨',
    name: 'Stone & Gravel',
    grade: 'Crushed Stone',
    desc: 'Crushed basalt stone, gravel, and quarry dust for concrete mix, road base, and drainage work.',
    specs: ['20mm & 40mm chips', 'Quarry dust', 'Stone ballast'],
    color: '#5a4a3a',
  },
  {
    icon: '🪵',
    name: 'Wood & Timber',
    grade: 'Teak & Hardwood',
    desc: 'Teak, sagwan, and local hardwood for door/window frames, shuttering work, and roofing supports.',
    specs: ['Teak / Sagwan', 'Shuttering planks', 'Roof purlins'],
    color: '#7a5030',
  },
];

const Materials = () => {
  return (
    <section className="materials" id="materials">
      <div className="container">
        <div className="materials__header">
          <span className="section-label">What We Supply</span>
          <h2 className="section-title">Construction Materials,<br />Every Kind You Need</h2>
          <p className="section-desc">
            From foundation to finish — we stock all primary building materials
            with guaranteed quality and on-time delivery across Sangamner.
          </p>
        </div>

        <div className="materials__grid">
          {materials.map((mat) => (
            <div className="mat-card" key={mat.name}>
              <div className="mat-card__top" style={{ '--accent': mat.color }}>
                <span className="mat-card__icon">{mat.icon}</span>
                <div>
                  <h3 className="mat-card__name">{mat.name}</h3>
                  <span className="mat-card__grade">{mat.grade}</span>
                </div>
              </div>
              <p className="mat-card__desc">{mat.desc}</p>
              <ul className="mat-card__specs">
                {mat.specs.map((s) => (
                  <li key={s}>
                    <span className="mat-card__bullet">—</span> {s}
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mat-card__cta">Request Quote →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Materials;
