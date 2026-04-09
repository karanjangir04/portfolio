import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" style={{ marginBottom: '6rem' }}>
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        My <span className="glow-text">Background</span>
      </motion.h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        <motion.div 
          className="glass-panel" 
          style={{ padding: '2.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Experience</h3>
          <h4 style={{ color: 'var(--accent-purple)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>Cyber Security Intern</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>CDAC Noida | Apr 2025 - Jun 2025</p>
          <ul style={{ color: 'var(--text-secondary)', marginLeft: '1.2rem', lineHeight: '1.6', fontSize: '0.95rem' }}>
            <li>Conducted network scanning and vulnerability assessments using Nmap.</li>
            <li>Performed deep packet inspection and live traffic analysis with Wireshark.</li>
            <li>Developed 5+ technical audit reports with system hardening recommendations.</li>
          </ul>
        </motion.div>

        <motion.div 
          className="glass-panel" 
          style={{ padding: '2.5rem' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Education</h3>
          <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '0.25rem' }}>B.Tech Computer Science (Cyber Security)</h4>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>Govt Engineering College Ajmer | 2023 - 2027</p>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', fontSize: '0.95rem' }}>
            <strong style={{ color: 'var(--text-primary)' }}>CGPA:</strong> 8.23 / 10<br/><br/>
            <strong style={{ color: 'var(--text-primary)' }}>Core Skills:</strong> Nmap, Wireshark, Metasploit, React.js, Node.js, Solidity, Python.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
