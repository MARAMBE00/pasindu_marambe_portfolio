import { Download, Mail, Linkedin, Github, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
// import ProfilePicture from '../assets/profile.png';

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'pasindurmarambe00@gmail.com',
    link: 'mailto:pasindurmarambe00@gmail.com'
  },
  {
    icon: Linkedin,
    title: 'LinkedIn',
    value: 'linkedin.com/in/pasindumarambe',
    link: 'https://www.linkedin.com/in/pasindumarambe/'
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'github.com/MARAMBE00',
    link: 'https://github.com/MARAMBE00'
  }
];

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
                Hi, I'm <span className="highlight">Pasindu Marambe</span>
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
                <a 
                  href="https://drive.google.com/file/d/1Xa4sRttvVw3qpz3XcE4SQEDivRGTOkEr/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <Download className="btn-icon" />
                  Download CV
                </a>
                <a 
                  href="mailto:pasindurmarambe00@gmail.com"   
                  className="btn btn-secondary"
                >
                  <Mail className="btn-icon" />
                  Get In Touch
                </a>
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
                {/* <img 
                  src={ProfilePicture} 
                  alt="Pasindu Marambe" 
                  className="profile-image"
                /> */}
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
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="contact-item"
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  >
                    <info.icon className="contact-icon" />
                    <div className="contact-details">
                      <h3>{info.title}</h3>
                      <a 
                        href={info.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="contact-link"
                      >
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default About;
