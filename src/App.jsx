import React from 'react';
import { Mail, ExternalLink, Code2, Server, Database, Terminal, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function App() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav>
        <div className="container nav-content">
          <a href="#" className="logo">Chinmay<span>.</span></a>
          <ul className="nav-links">
            <li><a onClick={() => scrollTo('about')}>About</a></li>
            <li><a onClick={() => scrollTo('skills')}>Skills</a></li>
            <li><a onClick={() => scrollTo('projects')}>Projects</a></li>
            <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero" id="about">
          <div className="container">
            <div className="hero-content fade-in-up">
              <span className="hero-greeting">Hello World, I'm</span>
              <h1 className="hero-title">Chinmay Dhaundiyal</h1>
              <h2 className="hero-subtitle">Fullstack Web Developer</h2>
              <p className="hero-desc">
                I build exceptional and accessible digital experiences for the web. 
                Passionate about creating modern, responsive, and dynamic web applications from front to back.
              </p>
              <div>
                <a onClick={() => scrollTo('projects')} className="btn btn-primary">
                  View My Work <ArrowRight size={20} />
                </a>
                <a onClick={() => scrollTo('contact')} className="btn btn-outline">
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="container">
            <h2 className="section-title fade-in-up">My Tech Stack</h2>
            <div className="skills-grid">
              
              <div className="skill-category fade-in-up delay-1">
                <div className="category-header">
                  <Code2 size={24} />
                  <h3>Frontend</h3>
                </div>
                <div className="skill-list">
                  <span className="skill-tag">React.js</span>
                  <span className="skill-tag">Next.js</span>
                  <span className="skill-tag">HTML5</span>
                  <span className="skill-tag">CSS3</span>
                  <span className="skill-tag">Responsive Design</span>
                </div>
              </div>

              <div className="skill-category fade-in-up delay-2">
                <div className="category-header">
                  <Server size={24} />
                  <h3>Backend</h3>
                </div>
                <div className="skill-list">
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">Express.js</span>
                  <span className="skill-tag">REST APIs</span>
                  <span className="skill-tag">JWT Auth</span>
                </div>
              </div>

              <div className="skill-category fade-in-up delay-3">
                <div className="category-header">
                  <Database size={24} />
                  <h3>Database & Languages</h3>
                </div>
                <div className="skill-list">
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">JavaScript</span>
                  <span className="skill-tag">TypeScript</span>
                </div>
              </div>

              <div className="skill-category fade-in-up delay-3">
                <div className="category-header">
                  <Terminal size={24} />
                  <h3>Tools & Workflow</h3>
                </div>
                <div className="skill-list">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">GitHub</span>
                  <span className="skill-tag">Docker</span>
                  <span className="skill-tag">Postman</span>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="container">
            <h2 className="section-title fade-in-up">Featured Projects</h2>
            <div className="projects-grid">
              
              {/* Project 1 */}
              <div className="project-card fade-in-up delay-1">
                <div className="project-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80")'}}>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Ed Tech Platform</h3>
                  <p className="project-desc">A comprehensive ed-tech platform featuring interactive courses, student dashboards, and a dynamic learning management system.</p>
                  <div className="project-tech">
                    <span>React</span>
                    <span>Node.js</span>
                    <span>MongoDB</span>
                    <span>Express</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/chinmay21" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /> Code</a>
                    <a href="https://study-notion-eight-gules.vercel.app/" target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /> Live Demo</a>
                  </div>
                </div>
              </div>

              {/* Project 2 */}
              <div className="project-card fade-in-up delay-2">
                <div className="project-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80")'}}>
                </div>
                <div className="project-content">
                  <h3 className="project-title">Budget Trip Planner</h3>
                  <p className="project-desc">A Next.js application that helps users plan budget-friendly trips globally, featuring real-time cost estimations and dynamic routing.</p>
                  <div className="project-tech">
                    <span>Next.js</span>
                    <span>TypeScript</span>
                    <span>REST API</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/chinmay21" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /> Code</a>
                    <a href="https://triplix.vercel.app/" target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /> Live Demo</a>
                  </div>
                </div>
              </div>

              {/* Project 3 */}
              <div className="project-card fade-in-up delay-3">
                <div className="project-image" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80")'}}>
                </div>
                <div className="project-content">
                  <h3 className="project-title">E-Library System</h3>
                  <p className="project-desc">A full-stack Next.js book management system featuring an intuitive digital catalog, user borrowing, and inventory management.</p>
                  <div className="project-tech">
                    <span>Next.js</span>
                    <span>React</span>
                    <span>MongoDB</span>
                    <span>Tailwind</span>
                  </div>
                  <div className="project-links">
                    <a href="https://github.com/chinmay21" target="_blank" rel="noopener noreferrer"><FaGithub size={18} /> Code</a>
                    <a href="https://librixweb.vercel.app/" target="_blank" rel="noopener noreferrer"><ExternalLink size={18} /> Live Demo</a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="container">
            <div className="contact-box fade-in-up">
              <h2 className="section-title" style={{marginBottom: '1rem'}}>Get In Touch</h2>
              <p className="contact-desc">
                I'm currently open for new opportunities. Whether you have a question, 
                a project idea, or just want to say hi, my inbox is always open!
              </p>
              <a href="mailto:hello@example.com" className="btn btn-primary" style={{padding: '1.2rem 3rem', fontSize: '1.2rem'}}>
                Say Hello <Mail size={20} />
              </a>
              
              <div className="social-links">
                <a href="https://github.com/chinmay21" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub size={24} /></a>
                <a href="https://www.linkedin.com/in/chinmaydhaundiyal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin size={24} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container">
          <p>Designed & Built by Chinmay Dhaundiyal</p>
        </div>
      </footer>
    </>
  );
}

export default App;
