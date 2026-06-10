import React from 'react';
import './Projects.css';

const projects = [
  { type: 'Residential', name: 'Sharma Residence', location: 'Sangamner', materials: 'Bricks · Cement · TMT', size: '2200 sq ft', year: '2024' },
  { type: 'Commercial', name: 'Patil Business Complex', location: 'Rahata', materials: 'Steel · Sand · Aggregate', size: '8500 sq ft', year: '2023' },
  { type: 'Infrastructure', name: 'Highway Road Work', location: 'Pune–Nashik Highway', materials: 'Gravel · Stone · M-Sand', size: '2.4 km stretch', year: '2023' },
  { type: 'Residential', name: 'Wagh Family Bungalow', location: 'Ghargaon', materials: 'Full Supply', size: '3100 sq ft', year: '2022' },
  { type: 'Industrial', name: 'Factory Foundation Work', location: 'Sinnar MIDC', materials: 'Cement · Steel · Stone', size: 'Industrial scale', year: '2022' },
  { type: 'Residential', name: 'Apartment Complex', location: 'Sangamner', materials: 'Complete Material Supply', size: '24 flats', year: '2021' },
];

const typeColors = {
  Residential: '#4a7c59',
  Commercial: '#8b3a2a',
  Infrastructure: '#3a5a8a',
  Industrial: '#6a4a8a',
};

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__header">
          <span className="section-label">Supply Record</span>
          <h2 className="section-title">Materials Behind<br />500+ Projects</h2>
          <p className="section-desc">
            From single-family homes to commercial buildings to highway infrastructure —
            our materials have been trusted across Maharashtra's Ahmednagar district.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((p, i) => (
            <div className="project-row" key={p.name}>
              <span className="project-row__num">0{i + 1}</span>
              <div className="project-row__info">
                <span
                  className="project-row__type"
                  style={{ '--type-color': typeColors[p.type] }}
                >
                  {p.type}
                </span>
                <h3 className="project-row__name">{p.name}</h3>
              </div>
              <div className="project-row__meta">
                <span className="project-row__location">📍 {p.location}</span>
                <span className="project-row__materials">{p.materials}</span>
              </div>
              <div className="project-row__right">
                <span className="project-row__size">{p.size}</span>
                <span className="project-row__year">{p.year}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="projects__footer">
          <p>And 490+ more projects across the Ahmednagar district</p>
          <a href="#contact" className="projects__cta">Supply My Project →</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
