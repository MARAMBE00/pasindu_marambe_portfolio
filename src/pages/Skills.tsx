import { Code, Database, Cloud, Smartphone, Brain, Wrench } from 'lucide-react';
import AnimatedSection from '../components/AnimatedSection';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      id: 'programming',
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { 
          name: 'JavaScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        { 
          name: 'TypeScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          url: 'https://www.typescriptlang.org/'
        },
        { 
          name: 'Python', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          url: 'https://www.python.org/'
        },
        { 
          name: 'Java', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
          url: 'https://www.java.com/'
        },
        { 
          name: 'C++', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
          url: 'https://isocpp.org/'
        }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { 
          name: 'React', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
          url: 'https://reactjs.org/'
        },
        { 
          name: 'HTML5', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
          url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
        },
        { 
          name: 'CSS3', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
          url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
        },
        { 
          name: 'Next.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
          url: 'https://nextjs.org/'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Code,
      skills: [
        { 
          name: 'Node.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
          url: 'https://nodejs.org/'
        },
        { 
          name: 'Express.js', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
          url: 'https://expressjs.com/'
        },
        { 
          name: 'Python Flask', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
          url: 'https://flask.palletsprojects.com/'
        }
      ]
    },
    {
      id: 'database',
      title: 'Databases & ORMs',
      icon: Database,
      skills: [
        { 
          name: 'MongoDB', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          url: 'https://www.mongodb.com/'
        },
        { 
          name: 'PostgreSQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          url: 'https://www.postgresql.org/'
        },
        { 
          name: 'MySQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          url: 'https://www.mysql.com/'
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: [
        { 
          name: 'Docker', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
          url: 'https://www.docker.com/'
        }
      ]
    },
    // {
    //   id: 'mobile',
    //   title: 'Mobile Development',
    //   icon: Smartphone,
    //   skills: [
    //     { 
    //       name: 'React Native', 
    //       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    //       url: 'https://reactnative.dev/'
    //     },
    //     { 
    //       name: 'Flutter', 
    //       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
    //       url: 'https://flutter.dev/'
    //     },
    //     { 
    //       name: 'Android', 
    //       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg',
    //       url: 'https://developer.android.com/'
    //     },
    //     { 
    //       name: 'iOS', 
    //       logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    //       url: 'https://developer.apple.com/ios/'
    //     }
    //   ]
    // },
    {
      id: 'ai',
      title: 'AI & Machine Learning',
      icon: Brain,
      skills: [
        { 
          name: 'TensorFlow', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
          url: 'https://www.tensorflow.org/'
        },
        { 
          name: 'Python', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
          url: 'https://www.python.org/'
        },
        { 
          name: 'Jupyter', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
          url: 'https://jupyter.org/'
        },
        { 
          name: 'Pandas', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
          url: 'https://pandas.pydata.org/'
        }
      ]
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: Wrench,
      skills: [
        { 
          name: 'VS Code', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
          url: 'https://code.visualstudio.com/'
        },
        { 
          name: 'Postman', 
          logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
          url: 'https://www.postman.com/'
        },
        { 
          name: 'Figma', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
          url: 'https://www.figma.com/'
        }
      ]
    }
  ];

  return (
    <div className="page skills-page">
      <div className="page-header">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Skills & Technologies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My technical expertise and the tools I use to build amazing applications
          </motion.p>
        </div>
      </div>

      <div className="container">
        {skillCategories.map((category, categoryIndex) => (
          <AnimatedSection key={category.id} delay={categoryIndex * 0.1}>
            <section className="skill-category-section">
              <div className="category-header">
                <category.icon className="category-icon" />
                <h2>{category.title}</h2>
              </div>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.a
                    key={skill.name}
                    href={skill.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="skill-logo-card"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: skillIndex * 0.1 }}
                    whileHover={{ 
                      y: -8,
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="skill-logo-container">
                      <img 
                        src={skill.logo} 
                        alt={`${skill.name} logo`}
                        className="skill-logo"
                        loading="lazy"
                      />
                      <div className="skill-tooltip">
                        <span>{skill.name}</span>
                        <small>Click to visit official website</small>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

export default Skills;
