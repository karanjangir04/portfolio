import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="hero-section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 style={{ color: 'var(--accent-cyan)', marginBottom: '1rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', fontSize: '0.9rem' }}>
          Cyber Security & Full-Stack Developer
        </h2>
        <h1 className="hero-title">
          Hi, I'm <span className="glow-text">Karan Jangir</span>.
        </h1>
        <p className="hero-subtitle">
          B.Tech Cyber Security student with a rare blend of offensive security knowledge, full-stack engineering, blockchain development, and AI integration experience.
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', marginTop: '-1.5rem' }}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
          <span>Jaipur, Rajasthan, India</span>
        </div>
        <div className="nav-links">
          <a href="#projects" className="btn btn-primary">Initialize Sequence</a>
          <a href="https://github.com/karanjangir04" target="_blank" rel="noreferrer" className="btn btn-glass" aria-label="GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/karan-jangir-025500291/" target="_blank" rel="noreferrer" className="btn btn-glass" aria-label="LinkedIn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="mailto:karanjangir2006@gmail.com" className="btn btn-glass" aria-label="Email">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
