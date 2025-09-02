import { Briefcase, Calendar, MapPin, Building2 } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Experience = () => {
  const experienceData = [
    // {
    //   id: 1,
    //   position: "Senior Software Engineer",
    //   company: "Tech Company Inc.",
    //   location: "San Francisco, CA",
    //   period: "2022 - Present",
    //   description: "Leading development of scalable web applications and mentoring junior developers. Implementing microservices architecture and cloud-native solutions.",
    //   technologies: ["React", "Node.js", "Python", "AWS", "Docker", "Kubernetes"],
    //   achievements: [
    //     "Reduced API response time by 40% through optimization",
    //     "Led team of 5 developers in major product launch",
    //     "Implemented CI/CD pipeline reducing deployment time by 60%"
    //   ]
    // },
    {
      id: 1,
      position: "Software Engineer Intern",
      company: "Hayleys Fentons Limited",
      location: "200 Deans Road, Colombo 01000",
      period: "Aug 2025 - Present",
      description: "Full-stack development of web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software.",
      technologies: ["Python", "PostgreSQL"]
    },
    {
      id: 2,
      position: "Software Engineer Intern",
      company: "Airport and Aviation Services (SL) (Pvt) Ltd",
      location: "Katunayake, Sri Lanka",
      period: "Sep 2023 - Aug 2024",
      description: "Designed and developed robust desktop applications using C# with WPF and Windows Forms, focusing on real-time video streaming, system monitoring, and digital content management. Contributed to full-cycle development of admin panels with CRUD operations, ensuring high performance and seamless user experience in enterprise environments.",
      technologies: ["C#", "Python", "WPF (Windows Presentation Foundation) Applications", "Windows Form Applications", "MSSQL"]
    }
  ];

  const freelanceProjects = [
    {
      title: "E-commerce Platform",
      client: "Retail Client",
      period: "2023",
      description: "Built a full-featured e-commerce platform with payment integration and admin dashboard.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind CSS"]
    },
    {
      title: "Mobile App Backend",
      client: "Startup Client",
      period: "2022",
      description: "Developed RESTful API and real-time features for a mobile application.",
      technologies: ["Node.js", "Socket.io", "MongoDB", "Redis"]
    },
    {
      title: "Data Analytics Dashboard",
      client: "Enterprise Client",
      period: "2021",
      description: "Created interactive dashboards for business intelligence and reporting.",
      technologies: ["React", "D3.js", "Python", "FastAPI"]
    }
  ];

  return (
    <div className="page experience-page">
      <div className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Work Experience
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My professional journey and work experience
          </motion.p>
        </div>
      </div>

      <div className="container">
        <AnimatedSection delay={0.3}>
          <section className="experience-section">
            {/* <h2>Work Experience</h2> */}
            <div className="timeline">
              {experienceData.map((experience, index) => (
                <motion.div 
                  key={experience.id} 
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  whileHover={{ y: -4 }}
                >
                  <motion.div 
                    className="timeline-marker"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Briefcase className="marker-icon" />
                  </motion.div>
                  <motion.div 
                    className="timeline-content"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="experience-header">
                      <h3>{experience.position}</h3>
                      <div className="company-info">
                        <Building2 className="company-icon" />
                        <span className="company-name">{experience.company}</span>
                      </div>
                      <div className="experience-meta">
                        <span className="meta-item">
                          <Calendar className="meta-icon" />
                          {experience.period}
                        </span>
                        <span className="meta-item">
                          <MapPin className="meta-icon" />
                          {experience.location}
                        </span>
                      </div>
                    </div>
                    <p className="experience-description">{experience.description}</p>
                    
                    <div className="technologies">
                      <h4>Technologies Used:</h4>
                      <div className="tech-tags">
                        {experience.technologies.map((tech, techIndex) => (
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

                    {/* <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <motion.li 
                            key={achievementIndex}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                          >
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div> */}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* <AnimatedSection delay={0.4}>
          <section className="freelance-section">
            <h2>Freelance & Consulting</h2>
            <div className="freelance-grid">
              {freelanceProjects.map((project, index) => (
                <motion.div 
                  key={index} 
                  className="freelance-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="freelance-header">
                    <h3>{project.title}</h3>
                    <span className="freelance-period">{project.period}</span>
                  </div>
                  <p className="client-name">Client: {project.client}</p>
                  <p className="freelance-description">{project.description}</p>
                  <div className="freelance-tech">
                    <h4>Technologies:</h4>
                    <div className="tech-tags">
                      {project.technologies.map((tech, techIndex) => (
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
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <section className="leadership-section">
            <h2>Leadership & Mentoring</h2>
            <div className="leadership-content">
              <motion.div 
                className="leadership-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3>Team Leadership</h3>
                <p>Led development teams of 3-8 developers, providing technical guidance, code reviews, and mentorship to junior team members.</p>
              </motion.div>
              <motion.div 
                className="leadership-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <h3>Technical Mentoring</h3>
                <p>Conducted technical interviews, created training programs, and mentored new hires to ensure smooth onboarding and skill development.</p>
              </motion.div>
              <motion.div 
                className="leadership-item"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <h3>Project Management</h3>
                <p>Managed multiple concurrent projects, coordinated with stakeholders, and ensured timely delivery while maintaining code quality standards.</p>
              </motion.div>
            </div>
          </section>
        </AnimatedSection> */}
      </div>
    </div>
  );
};

export default Experience;
