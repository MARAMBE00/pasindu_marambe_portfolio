import { Download, Mail, Linkedin, Github, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="page about-page">
      <div className="hero-section">
        <div className="hero-content">
          <AnimatedSection direction="left" delay={0.2}>
            <div className="hero-text">
              <motion.h1 
                className="hero-title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Hi, I'm <span className="highlight">Your Name</span>
              </motion.h1>
              <motion.h2 
                className="hero-subtitle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Software Developer
              </motion.h2>
              <motion.p 
                className="hero-description"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Passionate about creating innovative software solutions and turning ideas into reality. 
                I specialize in full-stack development with a focus on modern technologies and best practices.
              </motion.p>
              <motion.div 
                className="hero-buttons"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <button className="btn btn-primary">
                  <Download className="btn-icon" />
                  Download CV
                </button>
                <button className="btn btn-secondary">
                  <Mail className="btn-icon" />
                  Get In Touch
                </button>
              </motion.div>
            </div>
          </AnimatedSection>
          
          <AnimatedSection direction="right" delay={0.4}>
            <div className="hero-image">
              <motion.div 
                className="profile-placeholder"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ 
                  duration: 1.2, 
                  delay: 0.8,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <span>Your Photo</span>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="about-content">
        <div className="container">
          <AnimatedSection delay={0.2}>
            <section className="about-section">
              <h2>About Me</h2>
              <p>
                I'm a dedicated software developer with a passion for creating elegant, efficient, 
                and user-friendly applications. With expertise in both frontend and backend technologies, 
                I enjoy tackling complex problems and delivering solutions that make a difference.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and staying up-to-date with industry trends.
              </p>
            </section>
          </AnimatedSection>

          <AnimatedSection delay={0.4}>
            <section className="contact-info-section">
              <h2>Get In Touch</h2>
              <div className="contact-grid">
                <motion.div 
                  className="contact-item"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Mail className="contact-icon" />
                  <div>
                    <h3>Email</h3>
                    <p>your.email@example.com</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="contact-item"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Linkedin className="contact-icon" />
                  <div>
                    <h3>LinkedIn</h3>
                    <p>linkedin.com/in/yourprofile</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="contact-item"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Github className="contact-icon" />
                  <div>
                    <h3>GitHub</h3>
                    <p>github.com/yourusername</p>
                  </div>
                </motion.div>
                <motion.div 
                  className="contact-item"
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <Globe className="contact-icon" />
                  <div>
                    <h3>Website</h3>
                    <p>yourwebsite.com</p>
                  </div>
                </motion.div>
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
