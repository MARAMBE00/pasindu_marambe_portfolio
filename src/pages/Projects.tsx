import { useState } from 'react';
import { Github, Eye, Code, Globe } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration using Stripe.",
      image: "/project1.jpg",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "Express"],
      category: "web",
      liveUrl: "https://project1.com",
      githubUrl: "https://github.com/username/project1",
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, team collaboration, and progress tracking features.",
      image: "/project2.jpg",
      technologies: ["React", "Firebase", "Material-UI", "Redux"],
      category: "web",
      liveUrl: "https://project2.com",
      githubUrl: "https://github.com/username/project2",
      featured: true,
      year: "2023"
    },
    {
      id: 3,
      title: "Machine Learning Dashboard",
      description: "Interactive dashboard for visualizing machine learning model performance and data analysis with real-time updates.",
      image: "/project3.jpg",
      technologies: ["Python", "Flask", "TensorFlow", "D3.js", "PostgreSQL"],
      category: "ai",
      liveUrl: "https://project3.com",
      githubUrl: "https://github.com/username/project3",
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "Mobile Fitness App",
      description: "Cross-platform mobile application for tracking workouts, nutrition, and fitness goals with personalized recommendations.",
      image: "/project4.jpg",
      technologies: ["React Native", "Node.js", "MongoDB", "Expo"],
      category: "mobile",
      liveUrl: "https://project4.com",
      githubUrl: "https://github.com/username/project4",
      featured: false,
      year: "2022"
    },
    {
      id: 5,
      title: "Weather Forecast App",
      description: "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
      image: "/project5.jpg",
      technologies: ["React", "OpenWeather API", "Leaflet", "CSS3"],
      category: "web",
      liveUrl: "https://project5.com",
      githubUrl: "https://github.com/username/project5",
      featured: false,
      year: "2022"
    },
    {
      id: 6,
      title: "Data Visualization Tool",
      description: "Advanced data visualization tool for creating interactive charts, graphs, and dashboards from various data sources.",
      image: "/project6.jpg",
      technologies: ["Vue.js", "D3.js", "Python", "FastAPI", "SQLite"],
      category: "data",
      liveUrl: "https://project6.com",
      githubUrl: "https://github.com/username/project6",
      featured: false,
      year: "2021"
    }
  ];

  const filters = [
    { key: 'all', label: 'All Projects' },
    { key: 'web', label: 'Web Development' },
    { key: 'mobile', label: 'Mobile Apps' },
    { key: 'ai', label: 'AI/ML' },
    { key: 'data', label: 'Data Science' }
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

        {/* <AnimatedSection delay={0.4}>
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
                      <span>{project.title}</span>
                    </div>
                    <div className="project-overlay">
                      <div className="project-links">
                        <motion.a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Eye className="link-icon" />
                          <span>Live Demo</span>
                        </motion.a>
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
        </AnimatedSection> */}

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
                      <span>{project.title}</span>
                    </div>
                    <div className="project-overlay">
                      <div className="project-links">
                        <motion.a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="project-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Globe className="link-icon" />
                          <span>Live</span>
                        </motion.a>
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
                View GitHub Profile
              </motion.a>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Projects;
