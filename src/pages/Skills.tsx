import { Code, Database, Cloud, Brain, Wrench } from 'lucide-react';
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
          name: 'C#', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
          url: 'https://learn.microsoft.com/en-us/dotnet/csharp/'
        },
        { 
          name: 'JavaScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
          url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
        { 
          name: 'TypeScript', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
          url: 'https://www.typescriptlang.org/'
        }
      ]
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code,
      skills: [
        { 
          name: 'React JS', 
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
          name: 'Bootstrap', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg',
          url: 'https://getbootstrap.com/'
        },
        { 
          name: 'Tailwind CSS', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg',
          url: 'https://tailwindcss.com/'
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: Code,
      skills: [
        {
          name: 'PHP',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
          url: 'https://www.php.net/'
        },
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
          name: 'Flask', 
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
          name: 'MySQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
          url: 'https://www.mysql.com/'
        },
        { 
          name: 'MSSQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
          url: 'https://www.microsoft.com/en-us/sql-server/'
        },
        { 
          name: 'MongoDB', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
          url: 'https://www.mongodb.com/'
        },
        { 
          name: 'Firebase', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg',
          url: 'https://firebase.google.com/'
        },
        { 
          name: 'PostgreSQL', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
          url: 'https://www.postgresql.org/'
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
        },
        { 
          name: 'AWS', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg',
          url: 'https://aws.amazon.com/'
        },
        { 
          name: 'Azure', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg',
          url: 'https://azure.microsoft.com/'
        },
        { 
          name: 'Netlify', 
          logo: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg',
          url: 'https://www.netlify.com/'
        }
      ]
    },
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
          name: 'Pandas', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
          url: 'https://pandas.pydata.org/'
        },
        {
          name: "NumPy",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
          url: "https://numpy.org/"
        },
        {
          name: "Scikit-Learn",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg",
          url: "https://scikit-learn.org/"
        },
        {
          name: "Keras",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg",
          url: "https://keras.io/"
        },
        {
          name: "OpenCV",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
          url: "https://opencv.org/"
        }
      ]
    },
    {
      id: "testing",
      title: "Testing & QA Tools",
      icon: Wrench,
      skills: [
        { 
          name: 'Postman', 
          logo: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg',
          url: 'https://www.postman.com/'
        },
        {
          name: "Sellenium WebDriver",
          logo: "https://www.vectorlogo.zone/logos/seleniumio/seleniumio-icon.svg",
          url: "https://www.selenium.dev/projects/webdriver/"
        },
        {
          name: "TestNG",
          logo: "https://testng.org/testng-10/images/logo.png",
          url: "https://testng.org/doc/"
        },
        {
          name: "JUnit",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-plain.svg",
          url: "https://junit.org/junit5/"
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
          name: "IntelliJ IDEA",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
          url: "https://www.jetbrains.com/idea/"
        },
        {
          name: "Visual Studio",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg",
          url: "https://visualstudio.microsoft.com/"
        },
        {
          name: 'Git',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
          url: 'https://git-scm.com/'
        },
        {
          name: 'GitHub',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
          url: 'https://github.com/'
        },
        {
          name: 'Jupyter',
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg',
          url: 'https://jupyter.org/'
        },
        {
          name: 'Google Colab',
          logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0a/Google_Colaboratory_SVG_Logo.svg',
          url: 'https://colab.research.google.com/'
        },
        { 
          name: 'Figma', 
          logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
          url: 'https://www.figma.com/'
        },
        {
          name: 'Trello',
          logo: 'https://cdn.worldvectorlogo.com/logos/trello.svg',
          url: 'https://trello.com/'
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
