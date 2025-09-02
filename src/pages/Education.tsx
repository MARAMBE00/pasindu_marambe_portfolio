import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSc (Hons) Computer Science",
      institution: "Informatics Institute of Technology affiliated with the University of Westminster",
      location: "UK",
      period: "Sep 2021 - Nov 2025",
      description: "I have completed my BSc (Hons) in Computer Science from the Informatics Institute of Technology, affiliated with the University of Westminster, UK. Throughout the program, I built a strong foundation in programming, software engineering, web development, databases, and AI. I worked on several individual and group projects, which helped me apply theory to real-world problems and enhance my technical and collaborative skills.",
      gpa: "First Class Honours"
    },
    {
      id: 2,
      degree: "G.C.E Advanced Level Examination",
      institution: "Thurstan College",
      location: "Colombo 07",
      period: "Aug 2020",
      description: "I completed my G.C.E. Advanced Level Examination in the Mathematics stream at Thurstan College, Colombo 07, with passes in Combined Mathematics, Chemistry, and Physics (all C grades).",
      gpa: "-"
    },
    {
      id: 3,
      degree: "G.C.E Ordinary Level Examination",
      institution: "Thurstan College",
      location: "Colombo 07",
      period: "Dec 2016",
      description: "I completed my G.C.E. Ordinary Level Examination at Thurstan College, Colombo 07, achieving excellent results with 8 A’s and 1 B.",
      gpa: "-"
    }
  ];

  // const certifications = [
  //   {
  //     name: "AWS Certified Solutions Architect",
  //     issuer: "Amazon Web Services",
  //     date: "2023",
  //     credentialId: "AWS-123456"
  //   },
  //   {
  //     name: "Microsoft Certified: Azure Developer Associate",
  //     issuer: "Microsoft",
  //     date: "2022",
  //     credentialId: "MS-789012"
  //   },
  //   {
  //     name: "Google Cloud Professional Developer",
  //     issuer: "Google",
  //     date: "2021",
  //     credentialId: "GC-345678"
  //   }
  // ];

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
            My academic journey
            {/* My academic journey and professional certifications */}
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
                    {/* <div className="achievements">
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
                    </div> */}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* <AnimatedSection delay={0.4}>
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
        </AnimatedSection> */}

      </div>
    </div>
  );
};

export default Education;
