import { useState } from 'react';
import { Github, Eye, Code, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';
import keratoScanAI from '../assets/keratoScanAI.jpeg';
import nephroAI from '../assets/nephroAI.png';
import phpBasedECommerce from '../assets/PHP-basedE-CommerceSystem.png';
import todoListWebApp from '../assets/To-DoListWebApplication.png';
import weatherWebApp from '../assets/weatherWebApplication.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "KeratoScan AI",
      description: "KeratoScan AI is an AI-driven diagnostic tool designed to detect early-stage keratoconus a progressive eye disease using corneal topography images. Leveraging the NASNet deep learning architecture, this system offers accurate classification alongside a user-friendly, multi-role web interface suitable for medical professionals.",
      image: keratoScanAI,
      technologies: ["React JS", "TypeScript", "Python", "Flask", "TensorFlow", "Keras", "Scikit-learn", "Firebase Firestore"],
      category: "web",
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/MARAMBE00/Early-Stage_Keratoconus_Detection.git",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Nephro AI",
      description: "Nephro AI is a website that uses CT scan images to identify kidney tumors, stones, and cysts among other diseases. Anyone can use the website because of how user-friendly it is. An open-source JavaScript library for building user interfaces, the React JS framework was used to create the Nephro AI website.",
      image:  nephroAI,
      technologies: ["React JS", "Node.js", "JavaScript"],
      category: "web",
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/MARAMBE00/Multiple-Kidney-Disease-Detection.git",
      featured: true,
      year: "2023"
    },
    {
      id: 3,
      title: "Weather Web Application",
      description: "A clean and responsive browser-based app built with HTML, CSS, and JavaScript. It enables users to search for any city worldwide and view real-time weather data fetched from the OpenWeatherMap API.",
      image: weatherWebApp,
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "OpenWeatherMap API"],
      category: "web",
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/MARAMBE00/Weather_Web_Application.git",
      featured: false,
      year: "2022"
    },
    {
      id: 4,
      title: "PHP-based E-Commerce System",
      description: "A simple PHP-based e-commerce web application that allows users to browse products, manage shopping carts, and complete purchases with user authentication and MySQL backend.",
      image: phpBasedECommerce,
      technologies: ["PHP", "HTML5", "Bootstrap", "MySQL"],
      category: "web",
      liveUrl: "https://project5.com",
      githubUrl: "https://github.com/MARAMBE00/PHP-based_E-Commerce_System.git",
      featured: false,
      year: "2022"
    },
    {
      id: 5,
      title: "To-Do List Web Application",
      description: "A lightweight and interactive web app built with PHP and MongoDB that enables users to create, view, update, and delete tasks, implementing full CRUD functionality in a user-friendly interface.",
      image: todoListWebApp,
      technologies: ["PHP", "MongoDB", "HTML5", "CSS3", "JavaScript"],
      category: "web",
      liveUrl: "https://project5.com",
      githubUrl: "https://github.com/MARAMBE00/ToDo_List_WebApplication.git",
      featured: false,
      year: "2022"
    },
    {
      id: 6,
      title: "Online Payment Fraud Detection",
      description: "Explores online payment fraud detection using Deep Neural Networks (DNN), Random Forest, and Decision Trees.",
      image: "/project5.jpg",
      technologies: ["Python", "Jupyter Notebook"],
      category: "ai",
      liveUrl: "https://project5.com",
      githubUrl: "https://github.com/MARAMBE00/Online_Payment_Fraud_Detection.git",
      featured: false,
      year: "2025"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    // { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ai', label: 'AI/ML' },
    // { key: 'data', label: 'Data Science' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="page projects-page">
      <div className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Showcase of my work and technical projects
          </motion.p>
        </div>
      </div>

      <div className="container">
        <AnimatedSection delay={0.3}>
          <section className="filters-section">
            <div className="filters">
              {filters.map((filter, index) => (
                <motion.button
                  key={filter.key}
                  className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter.key)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {filter.label}
                </motion.button>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <section className="featured-projects">
            <h2>Featured Projects</h2>
            <div className="featured-grid">
              {projects.filter(project => project.featured).map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="project-card featured"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="project-image">
                    <div className="image-placeholder">
                      {/* <span>{project.title}</span> */}
                       <img 
                        src={project.image} 
                        alt={project.title} 
                        className="project-img" 
                      />
                    </div>
                    <div className="project-overlay">
                      <div className="project-links">
                        {/* <motion.a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="link-icon" />
                          <span>Live Demo</span>
                        </motion.a> */}
                        <motion.a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="link-icon" />
                          <span>Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="tech-tag"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <section className="all-projects">
            <h2>All Projects</h2>
            <div className="projects-grid">
              {filteredProjects.map((project, index) => (
                <motion.div 
                  key={project.id} 
                  className="project-card"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="project-image">
                    <div className="image-placeholder">
                      {/* <span>{project.title}</span> */}
                       <img 
                        src={project.image} 
                        alt={project.title} 
                        className="project-img" 
                      />
                    </div>
                    <div className="project-overlay">
                      <div className="project-links">
                        {/* <motion.a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Globe className="link-icon" />
                          <span>Live</span>
                        </motion.a> */}
                        <motion.a 
                          href={project.githubUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Code className="link-icon" />
                          <span>Code</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                  <div className="project-content">
                    <div className="project-header">
                      <h3>{project.title}</h3>
                      <span className="project-year">{project.year}</span>
                    </div>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <motion.span 
                          key={techIndex} 
                          className="tech-tag small"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-tag small">+{project.technologies.length - 4}</span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.6}>
          <section className="github-section">
            {/* <h2>Open Source Contributions</h2> */}
            <div className="github-content">
              {/* <p>
                I actively contribute to open source projects and maintain several repositories. 
                Check out my GitHub profile for more projects and contributions.
              </p> */}
              <motion.a 
                href="https://github.com/MARAMBE00" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  transition: { duration: 0.3 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <Github className="btn-icon" />
                View More Projects
              </motion.a>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;
