// src/pages/AboutPage.tsx
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaCertificate, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const AboutPage = () => {
  const skills = {
    frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "SASS"],
    backend: ["Node.js", "Express.js", "Python (FastAPI)", "PHP", "RESTful APIs", "Hono.js"],
    cloud: ["Google Cloud Platform", "Docker", "Kubernetes", "Git", "GitHub"],
    databases: ["MongoDB", "MySQL", "SQL", "PostgreSQL"],
    ai: ["Machine Learning", "TensorFlow", "Data Structures", "Statistics"],
    tools: ["Agile Development", "SOLID Principles", "Domain-Driven Design", "Testing (BDD)"]
  };

  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Teach2Give",
      period: "04/2025 – 10/2025",
      location: "Embu, Kenya",
      responsibilities: [
        "Designed and built cloud-based full-stack web applications using React.js, Node.js, and Python (FastAPI)",
        "Developed distributed backend systems and RESTful APIs, improving data accessibility",
        "Optimized SQL queries for scalable data management",
        "Implemented testing and debugging best practices for production-ready code"
      ]
    },
    {
      title: "Network Administrator Intern",
      company: "Kiambu Level 5 Hospital",
      period: "04/2024 – 08/2024",
      location: "Kiambu, Kenya",
      responsibilities: [
        "Managed and maintained hospital network infrastructure ensuring consistent uptime",
        "Diagnosed and resolved network issues for both software and hardware systems",
        "Assisted in deploying security updates across connected workstations",
        "Documented network configurations for improved system reliability"
      ]
    },
     {
      title: "System Administrator(Support) Intern",
      company: "Pulse Wave Technologies",
      period: "01/2026 – Present",
      location: "Embu, Kenya",
      responsibilities: [
        "Supported the staffs in Understanding how the new system works",
        "Communicated technical issues to the senior developers",
        "Gave well consolidated advices to the staffs regarding the eservices system",
        
      ]
    }
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Embu",
    period: "09/2021 – 09/2025",
    location: "Embu, Kenya",
    details: "Specialized in software development, data structures, algorithms, and machine learning"
  };

  const certifications = [
    {
      name: "Bachelor of Science in Computer Science",
      issuer: "University of Embu",
      year: "2025"
    },
    {
      name: "Software Engineering Certificate",
      issuer: "Teach2Give",
      year: "2025"
    },
    {
      name: "C# Programming",
      issuer: "FreeCodeCamp  & Microsoft",
      year: "2025"
    },
    {
      name: "Python Programming",
      issuer: "FreeCodeCamp  & Microsoft",
      year: "2026"
    },
    {
      name: "JavaScript",
      issuer: "FreeCodeCamp  & Microsoft",
      year: "2026"
    }
    
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-navy-900 mb-4">
            About <span className="text-orange-500">Me</span>
          </h1>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto">
            Full-Stack Developer passionate about building scalable, data-driven solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Intro & Experience */}
          <div className="space-y-12">
            {/* Personal Statement */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-navy-100"
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-500">👨‍💻</span>
                </div>
                Personal Statement
              </h2>
              <p className="text-navy-700 leading-relaxed mb-4">
                I am an aspiring Software Engineer and tech enthusiast passionate about building real-world solutions through clean, efficient, and scalable code. Currently developing skills in full-stack web development, from frontend interfaces to backend APIs and databases.
              </p>
              <p className="text-navy-700 leading-relaxed">
                I enjoy solving problems, learning new technologies, and turning ideas into functional applications. My goal is to grow into a developer who not only writes code, but creates impactful digital experiences that help people in meaningful ways.
              </p>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FaBriefcase className="text-orange-500" />
                </div>
                Work Experience
              </h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    className="bg-white rounded-xl shadow-md p-6 border-l-4 border-orange-500 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-navy-900">{exp.title}</h3>
                        <p className="text-navy-700 font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex items-center gap-4 mt-2 sm:mt-0">
                        <div className="flex items-center gap-2 text-navy-600">
                          <FaCalendarAlt size={14} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-navy-600">
                          <FaMapMarkerAlt size={14} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.responsibilities.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start text-navy-700">
                          <span className="text-orange-500 mr-2 mt-1">•</span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Skills, Education & Certifications */}
          <div className="space-y-12">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-navy-100"
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FaGraduationCap className="text-orange-500" />
                </div>
                Education
              </h2>
              <div className="bg-gradient-to-r from-orange-50 to-white p-6 rounded-xl border border-orange-100">
                <h3 className="text-xl font-bold text-navy-900 mb-2">{education.degree}</h3>
                <p className="text-navy-700 font-semibold mb-4">{education.institution}</p>
                <div className="flex items-center gap-4 text-navy-600 mb-4">
                  <div className="flex items-center gap-2">
                    <FaCalendarAlt size={14} />
                    <span>{education.period}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaMapMarkerAlt size={14} />
                    <span>{education.location}</span>
                  </div>
                </div>
                <p className="text-navy-700">{education.details}</p>
              </div>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <FaCertificate className="text-orange-500" />
                </div>
                Certifications
              </h2>
              <div className="grid gap-4">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="bg-white p-4 rounded-xl shadow-md border border-navy-100 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="font-bold text-navy-900">{cert.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-navy-700">{cert.issuer}</span>
                      <span className="text-orange-500 font-semibold">{cert.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-navy-900 mb-6">Technical Skills</h2>
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="mb-6">
                  <h3 className="text-lg font-semibold text-navy-800 mb-3 capitalize">
                    {category.replace(/([A-Z])/g, ' $1').trim()}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="px-3 py-1.5 bg-gradient-to-r from-navy-50 to-navy-100 text-navy-700 font-medium rounded-full border border-navy-200 hover:border-orange-300 hover:text-orange-600 transition-all duration-300"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;