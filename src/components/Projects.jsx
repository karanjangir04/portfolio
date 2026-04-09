import React from 'react';
import { motion } from 'framer-motion';

const projectsData = [
  {
    title: "CyberGuard",
    desc: "A full-stack cybersecurity awareness web application covering 10+ threat categories. Features an NLP-based scam analyzer using the Claude API and an interactive Leaflet.js map.",
    tech: ["React.js", "Node.js", "Claude API", "Leaflet.js"],
    link: "https://github.com/karanjangir04"
  },
  {
    title: "Blockchain Smart Contracts",
    desc: "Wrote and deployed Solidity smart contracts on the Ethereum testnet for decentralized transaction handling. Integrated with a Web3.js frontend for wallet-based interactions.",
    tech: ["Solidity", "Ethereum", "Web3.js"],
    link: "https://github.com/karanjangir04"
  },
  {
    title: "Network Security & Auto.",
    desc: "Developed custom Python and Bash scripts to automate system administration tasks, reducing manual monitoring time by ~40% and cutting incident response time by ~30%.",
    tech: ["Python", "Bash", "Linux Autom."],
    link: "https://github.com/karanjangir04"
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        Featured <span className="glow-text">Projects</span>
      </motion.h2>
      
      <div className="projects-section">
        {projectsData.map((project, index) => (
          <motion.div 
            key={index}
            className="glass-panel project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15, duration: 0.6 }}
          >
            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div style={{display: 'flex', gap: '1rem', marginTop: '1.5rem'}}>
              <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-glass" style={{padding: '0.6rem', borderRadius: '12px'}} aria-label="Github">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
