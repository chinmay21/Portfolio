import React, { useEffect, useState } from 'react';
import { Mail, ExternalLink, Code2, Server, Database, Terminal, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin, FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaDocker, FaDesktop, FaServer, FaPython } from 'react-icons/fa';
import { SiNextdotjs, SiExpress, SiMongodb, SiTypescript, SiPostman, SiJavascript, SiJsonwebtokens, SiPrisma, SiPostgresql } from 'react-icons/si';
import { motion } from 'framer-motion';
import Background3D from './components/Background3D';

function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' || 
        e.target.tagName === 'BUTTON' || 
        e.target.closest('a') || 
        e.target.closest('button') ||
        e.target.classList.contains('project-card') ||
        e.target.classList.contains('skill-category')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", mouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
      opacity: 1,
      transition: { type: "tween", ease: "backOut", duration: 0.15 }
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      scale: 1.5,
      backgroundColor: "rgba(99, 102, 241, 0.3)",
      borderColor: "transparent",
      opacity: 0.8,
      mixBlendMode: "screen",
      transition: { type: "tween", ease: "backOut", duration: 0.15 }
    }
  };

  return (
    <motion.div
      className="custom-cursor"
      variants={variants}
      animate={isHovering ? "hover" : "default"}
    />
  );
}

function App() {
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <>
      <Background3D />
      <CustomCursor />
      
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
            <motion.div 
              className="hero-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
            >
              <span className="hero-greeting">Hello I'm</span>
              <h1 className="hero-title">Chinmay Dhaundiyal</h1>
              <h2 className="hero-subtitle">Fullstack Web Developer</h2>
              <p className="hero-desc">
                I build exceptional and accessible digital experiences for the web. 
                Passionate about creating modern, responsive, and dynamic web applications from front to back.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <a onClick={() => scrollTo('projects')} className="btn btn-primary">
                  View My Work <ArrowRight size={20} />
                </a>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <a onClick={() => scrollTo('contact')} className="btn btn-outline">
                  Contact Me
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUpVariant}
            >
              My Tech Stack
            </motion.h2>
            <motion.div 
              className="skills-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              
              <motion.div className="skill-category" variants={fadeUpVariant} whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.5)", transition: { duration: 0.3 } }}>
                <div className="category-header">
                  <Code2 size={24} />
                  <h3>Frontend</h3>
                </div>
                <div className="skill-list">
                  <div className="skill-item"><FaReact className="skill-icon" /><span className="skill-name">React.js</span></div>
                  <div className="skill-item"><SiNextdotjs className="skill-icon" /><span className="skill-name">Next.js</span></div>
                  <div className="skill-item"><FaHtml5 className="skill-icon" /><span className="skill-name">HTML5</span></div>
                  <div className="skill-item"><FaCss3Alt className="skill-icon" /><span className="skill-name">CSS3</span></div>
                  <div className="skill-item"><FaDesktop className="skill-icon" /><span className="skill-name">Responsive</span></div>
                </div>
              </motion.div>

              <motion.div className="skill-category" variants={fadeUpVariant} whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.5)", transition: { duration: 0.3 } }}>
                <div className="category-header">
                  <Server size={24} />
                  <h3>Backend</h3>
                </div>
                <div className="skill-list">
                  <div className="skill-item"><FaNodeJs className="skill-icon" /><span className="skill-name">Node.js</span></div>
                  <div className="skill-item"><SiExpress className="skill-icon" /><span className="skill-name">Express.js</span></div>
                  <div className="skill-item"><FaServer className="skill-icon" /><span className="skill-name">REST APIs</span></div>
                  <div className="skill-item"><SiJsonwebtokens className="skill-icon" /><span className="skill-name">JWT Auth</span></div>
                </div>
              </motion.div>

              <motion.div className="skill-category" variants={fadeUpVariant} whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.5)", transition: { duration: 0.3 } }}>
                <div className="category-header">
                  <Database size={24} />
                  <h3>Database & Languages</h3>
                </div>
                <div className="skill-list">
                  <div className="skill-item"><SiMongodb className="skill-icon" /><span className="skill-name">MongoDB</span></div>
                  <div className="skill-item"><SiPostgresql className="skill-icon" /><span className="skill-name">PostgreSQL</span></div>
                  <div className="skill-item"><SiPrisma className="skill-icon" /><span className="skill-name">Prisma</span></div>
                  <div className="skill-item"><SiJavascript className="skill-icon" /><span className="skill-name">JavaScript</span></div>
                  <div className="skill-item"><SiTypescript className="skill-icon" /><span className="skill-name">TypeScript</span></div>
                  <div className="skill-item"><FaPython className="skill-icon" /><span className="skill-name">Python</span></div>
                </div>
              </motion.div>

              <motion.div className="skill-category" variants={fadeUpVariant} whileHover={{ y: -10, borderColor: "rgba(99, 102, 241, 0.5)", transition: { duration: 0.3 } }}>
                <div className="category-header">
                  <Terminal size={24} />
                  <h3>Tools & Workflow</h3>
                </div>
                <div className="skill-list">
                  <div className="skill-item"><FaGitAlt className="skill-icon" /><span className="skill-name">Git</span></div>
                  <div className="skill-item"><FaGithub className="skill-icon" /><span className="skill-name">GitHub</span></div>
                  <div className="skill-item"><FaDocker className="skill-icon" /><span className="skill-name">Docker</span></div>
                  <div className="skill-item"><SiPostman className="skill-icon" /><span className="skill-name">Postman</span></div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="container">
            <motion.h2 
              className="section-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              variants={fadeUpVariant}
            >
              Featured Projects
            </motion.h2>
            <motion.div 
              className="projects-grid"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              
              {/* Project 1 */}
              <motion.div className="project-card" variants={fadeUpVariant} whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.4 } }}>
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
              </motion.div>

              {/* Project 2 */}
              <motion.div className="project-card" variants={fadeUpVariant} whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.4 } }}>
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
              </motion.div>

              {/* Project 3 */}
              <motion.div className="project-card" variants={fadeUpVariant} whileHover={{ y: -15, scale: 1.02, transition: { duration: 0.4 } }}>
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
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <div className="container">
            <motion.div 
              className="contact-box"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUpVariant}
            >
              <h2 className="section-title" style={{marginBottom: '1rem'}}>Get In Touch</h2>
              <p className="contact-desc">
                I'm currently open for new opportunities. Whether you have a question, 
                a project idea, or just want to say hi, my inbox is always open!
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={{ display: 'inline-block' }}>
                <a href="mailto:dhaundiyalchinmay@gmail.com" className="btn btn-primary" style={{padding: '1.2rem 3rem', fontSize: '1.2rem'}}>
                  Say Hello <Mail size={20} />
                </a>
              </motion.div>
              
              <div className="social-links">
                <motion.a whileHover={{ y: -8, scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }} href="https://github.com/chinmay21" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={24} />
                </motion.a>
                <motion.a whileHover={{ y: -8, scale: 1.1, backgroundColor: "rgba(99, 102, 241, 0.2)" }} href="https://www.linkedin.com/in/chinmaydhaundiyal/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </motion.a>
              </div>
            </motion.div>
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
