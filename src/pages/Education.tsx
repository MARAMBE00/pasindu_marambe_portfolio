import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      institution: "University Name",
      location: "City, Country",
      period: "2020 - 2022",
      description: "Specialized in Software Engineering and Artificial Intelligence. Completed thesis on 'Machine Learning Applications in Software Development'.",
      gpa: "3.8/4.0",
      achievements: ["Dean's List", "Research Assistant", "Graduate Teaching Assistant"]
    },
    {
      id: 2,
      degree: "Bachelor of Science in Computer Science",
      institution: "University Name",
      location: "City, Country",
      period: "2016 - 2020",
      description: "Focused on programming fundamentals, data structures, algorithms, and software development methodologies.",
      gpa: "3.9/4.0",
      achievements: ["Summa Cum Laude", "Computer Science Honor Society", "Programming Competition Winner"]
    },
    {
      id: 3,
      degree: "High School Diploma",
      institution: "High School Name",
      location: "City, Country",
      period: "2012 - 2016",
      description: "Advanced placement courses in Mathematics, Physics, and Computer Science.",
      gpa: "4.0/4.0",
      achievements: ["Valedictorian", "National Honor Society", "Science Olympiad Champion"]
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456"
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
      credentialId: "MS-789012"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google",
      date: "2021",
      credentialId: "GC-345678"
    }
  ];

  return (
    <div className="page education-page">
      <div className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Education
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My academic journey and professional certifications
          </motion.p>
        </div>
      </div>

      <div className="container">
        <AnimatedSection delay={0.3}>
          <section className="education-section">
            <h2>Academic Background</h2>
            <div className="timeline">
              {educationData.map((education, index) => (
                <motion.div 
                  key={education.id} 
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
                    <GraduationCap className="marker-icon" />
                  </motion.div>
                  <motion.div 
                    className="timeline-content"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="education-header">
                      <h3>{education.degree}</h3>
                      <div className="education-meta">
                        <span className="meta-item">
                          <Calendar className="meta-icon" />
                          {education.period}
                        </span>
                        <span className="meta-item">
                          <MapPin className="meta-icon" />
                          {education.institution}, {education.location}
                        </span>
                        <span className="meta-item">
                          <Award className="meta-icon" />
                          GPA: {education.gpa}
                        </span>
                      </div>
                    </div>
                    <p className="education-description">{education.description}</p>
                    <div className="achievements">
                      <h4>Key Achievements:</h4>
                      <ul>
                        {education.achievements.map((achievement, achievementIndex) => (
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
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <section className="certifications-section">
            <h2>Professional Certifications</h2>
            <div className="certifications-grid">
              {certifications.map((cert, index) => (
                <motion.div 
                  key={index} 
                  className="certification-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ 
                    y: -8,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="cert-header">
                    <h3>{cert.name}</h3>
                    <span className="cert-date">{cert.date}</span>
                  </div>
                  <p className="cert-issuer">Issued by {cert.issuer}</p>
                  <p className="cert-id">Credential ID: {cert.credentialId}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection delay={0.5}>
          <section className="skills-section">
            <h2>Academic Skills</h2>
            <div className="skills-grid">
              <motion.div 
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                whileHover={{ y: -4 }}
              >
                <h3>Programming Languages</h3>
                <div className="skill-tags">
                  {["Java", "Python", "JavaScript", "C++", "SQL"].map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                whileHover={{ y: -4 }}
              >
                <h3>Software Development</h3>
                <div className="skill-tags">
                  {["Git", "Docker", "Agile", "Scrum", "CI/CD"].map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                whileHover={{ y: -4 }}
              >
                <h3>Research & Analysis</h3>
                <div className="skill-tags">
                  {["Data Analysis", "Machine Learning", "Statistical Analysis", "Research Methods"].map((skill, index) => (
                    <motion.span 
                      key={index} 
                      className="skill-tag"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </div>
  );
};

export default Education;
