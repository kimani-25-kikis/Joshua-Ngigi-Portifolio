// HomePage.tsx with animated skills flow effect
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03
    }
  }
};

const letterVariants = {
  hidden: { 
    opacity: 0, 
    y: 20, 
    rotateY: -90 
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateY: 0,
    transition: {
      type: 'spring' as const,
      damping: 12,
      stiffness: 200
    }
  }
};

// Skills data organized by category
const skillCategories = [
  {
    name: 'frontend',
    skills: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'SASS']
  },
  {
    name: 'backend',
    skills: ['Node.js', 'Express.js', 'Python (FastAPI)', 'RESTful APIs', 'Hono.js']
  },
  {
    name: 'cloud',
    skills: ['Google Cloud Platform', 'Docker', 'Kubernetes', 'Git', 'GitHub']
  },
  {
    name: 'databases',
    skills: ['MongoDB', 'MySQL', 'SQL', 'PostgreSQL']
  },
  {
    name: 'ai',
    skills: ['Machine Learning', 'TensorFlow', 'Data Structures', 'Statistics']
  },
  {
    name: 'tools',
    skills: ['Agile Development', 'SOLID Principles', 'Domain-Driven Design', 'Testing (BDD)']
  }
];

const HomePage = () => {
  const title = 'Full-Stack Developer | AI & Cloud Enthusiast'.split('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-navy-50"></div>
      
      {/* Background skill words - animated flow */}
      {skillCategories.map((category, categoryIndex) => (
        <div key={category.name} className="absolute inset-0 overflow-hidden">
          {category.skills.map((skill, skillIndex) => {
            const totalIndex = categoryIndex * 10 + skillIndex;
            const delay = totalIndex * 0.5;
            const duration = 20 + Math.random() * 10;
            const xStart = Math.random() * 100;
            const yStart = Math.random() * 100;
            
            return (
              <motion.div
                key={`${category.name}-${skill}`}
                className="absolute pointer-events-none"
                initial={{
                  x: `${xStart}vw`,
                  y: `${yStart}vh`,
                  opacity: 0,
                  scale: 0.5
                }}
                animate={{
                  x: [`${xStart}vw`, `${xStart - 100}vw`],
                  y: [`${yStart}vh`, `${yStart - 100}vh`],
                  opacity: [0, 0.8, 0.8, 0],
                  scale: [0.5, 1, 1, 0.5]
                }}
                transition={{
                  delay: delay,
                  duration: duration,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <div className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap ${
                  category.name === 'frontend' ? 'bg-blue-50 text-blue-700 border border-blue-100' :
                  category.name === 'backend' ? 'bg-green-50 text-green-700 border border-green-100' :
                  category.name === 'cloud' ? 'bg-purple-50 text-purple-700 border border-purple-100' :
                  category.name === 'databases' ? 'bg-yellow-50 text-yellow-700 border border-yellow-100' :
                  category.name === 'ai' ? 'bg-red-50 text-red-700 border border-red-100' :
                  'bg-indigo-50 text-indigo-700 border border-indigo-100'
                }`}>
                  {skill}
                </div>
              </motion.div>
            );
          })}
        </div>
      ))}

      {/* Additional background animations */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-orange-400/10 to-orange-600/5 rounded-full blur-3xl"
      />
      
      <motion.div
        animate={{
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-navy-400/5 to-navy-600/10 rounded-full blur-3xl"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid md:grid-cols-2 gap-12 md:gap-16 items-center py-8 md:py-0">
        {/* Left Column - Text Content */}
        <div className="text-center md:text-left">
          {/* Fixed HELLO I'M text with better mobile visibility */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-base sm:text-lg font-semibold text-orange-500 mb-3 sm:mb-4 tracking-wider px-2 sm:px-0"
          >
            <span className="inline-block text-lg sm:text-xl mr-2">👋</span>
            HELLO, I'M
          </motion.p>

          {/* Responsive name container */}
          <div className="mb-6">
            {/* First name - always on one line */}
            <motion.div
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight flex justify-center md:justify-start px-2 sm:px-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {'Joshua'.split('').map((letter, index) => (
                <motion.span
                  key={`first-${index}`}
                  variants={letterVariants}
                  className="inline-block text-navy-900 hover:text-orange-500 hover:scale-110 transition-transform duration-200"
                  whileHover={{
                    scale: 1.2,
                    color: '#f97316',
                    transition: { type: 'spring', stiffness: 400 },
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Last names - on same line for desktop, stack for mobile */}
            <motion.div
              className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight flex flex-col sm:flex-row justify-center md:justify-start gap-1 sm:gap-2 px-2 sm:px-0"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {/* Kimani */}
              <div className="flex justify-center md:justify-start">
                {'Kimani'.split('').map((letter, index) => (
                  <motion.span
                    key={`kimani-${index}`}
                    variants={letterVariants}
                    className="inline-block text-navy-900 hover:text-orange-500 hover:scale-110 transition-transform duration-200"
                    whileHover={{
                      scale: 1.2,
                      color: '#f97316',
                      transition: { type: 'spring', stiffness: 400 },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
              
              {/* Ngigi */}
              <div className="flex justify-center md:justify-start">
                {'Ngigi'.split('').map((letter, index) => (
                  <motion.span
                    key={`ngigi-${index}`}
                    variants={letterVariants}
                    className="inline-block text-navy-900 hover:text-orange-500 hover:scale-110 transition-transform duration-200"
                    whileHover={{
                      scale: 1.2,
                      color: '#f97316',
                      transition: { type: 'spring', stiffness: 400 },
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Animated Title */}
          <div className="text-xl sm:text-2xl md:text-3xl text-navy-700 mb-6 md:mb-8 px-2 sm:px-0">
            <div className="flex flex-wrap justify-center md:justify-start gap-1 sm:gap-2">
              {title.map((char, index) => (
                <motion.span
                  key={`title-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.03) }}
                  className={`inline-block ${
                    char === '|' ? 'mx-1 sm:mx-2' : ''
                  } ${
                    char === 'A' && title[index + 1] === 'I' 
                      ? 'text-orange-500 font-bold' 
                      : 'text-navy-700'
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-base sm:text-lg text-navy-600 mb-8 md:mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed px-4 sm:px-0"
          >
            Crafting scalable digital solutions with modern technologies. 
            Passionate about transforming ideas into impactful, production-ready applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start px-4 sm:px-0"
          >
            <Link
              to="/projects"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <span className="text-sm sm:text-base">Explore My Work</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <FaArrowRight />
              </motion.div>
            </Link>
            <a
              href="/Joshua-Kimani-CV.pdf"
              download
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-navy-700 border-2 border-navy-200 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-orange-300 flex items-center justify-center gap-3"
            >
              <FaDownload />
              <span className="text-sm sm:text-base">Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8 md:mt-12 flex justify-center md:justify-start space-x-6 px-4 sm:px-0"
          >
            <a
              href="https://github.com/kimani-25-kikis"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-navy-50 text-navy-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} className="sm:w-6 sm:h-6" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navy-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
            </a>
            <a
              href="https://linkedin.com/in/joshua-ngigi-1a651138b"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-navy-50 text-navy-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} className="sm:w-6 sm:h-6" />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navy-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Profile Image with Skills Flow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="relative px-4 sm:px-0"
        >
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 mx-auto">
            {/* Animated Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-0 border-4 border-orange-400/30 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-8 border-4 border-navy-400/20 rounded-full"
            />
            
            {/* Profile Image Container with Overflow Hidden */}
            <div className="absolute inset-10 sm:inset-12 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 bg-white">
              <img
                src="portifolio.jpeg"
                alt="Joshua Kimani - Professional Portrait"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Skills flowing from behind the image */}
            {skillCategories.map((category, categoryIndex) => (
              <div key={category.name} className="absolute inset-0 overflow-hidden rounded-full">
                {category.skills.map((skill, skillIndex) => {
                  const totalIndex = categoryIndex * category.skills.length + skillIndex;
                  const delay = totalIndex * 0.3;
                  const duration = 8 + Math.random() * 4;
                  const angle = (totalIndex / skillCategories.length) * Math.PI * 2;
                  const radius = 120 + Math.random() * 40;
                  
                  return (
                    <motion.div
                      key={`flow-${category.name}-${skill}`}
                      className="absolute pointer-events-none"
                      initial={{
                        x: `calc(50% + ${radius * Math.cos(angle)}px)`,
                        y: `calc(50% + ${radius * Math.sin(angle)}px)`,
                        opacity: 0,
                        scale: 0.3
                      }}
                      animate={{
                        x: [
                          `calc(50% + ${radius * Math.cos(angle)}px)`,
                          `calc(50% + ${(radius + 200) * Math.cos(angle)}px)`
                        ],
                        y: [
                          `calc(50% + ${radius * Math.sin(angle)}px)`,
                          `calc(50% + ${(radius + 200) * Math.sin(angle)}px)`
                        ],
                        opacity: [0, 0.7, 0.7, 0],
                        scale: [0.3, 0.8, 0.8, 0.3]
                      }}
                      transition={{
                        delay: delay,
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    >
                      <div className={`px-2 py-1 rounded-full text-[10px] sm:text-xs font-medium whitespace-nowrap backdrop-blur-sm ${
                        category.name === 'frontend' ? 'bg-blue-500/10 text-blue-600' :
                        category.name === 'backend' ? 'bg-green-500/10 text-green-600' :
                        category.name === 'cloud' ? 'bg-purple-500/10 text-purple-600' :
                        category.name === 'databases' ? 'bg-yellow-500/10 text-yellow-600' :
                        category.name === 'ai' ? 'bg-red-500/10 text-red-600' :
                        'bg-indigo-500/10 text-indigo-600'
                      }`}>
                        {skill}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ))}

            {/* Center floating effect */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0"
            />
          </div>

          {/* Skills Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            className="mt-6 text-center md:text-left"
          >
            <p className="text-sm text-navy-600 mb-2 font-medium">My Tech Stack</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {skillCategories.map((category) => (
                <div
                  key={category.name}
                  className={`px-3 py-1 rounded-full text-xs font-medium capitalize ${
                    category.name === 'frontend' ? 'bg-blue-100 text-blue-700' :
                    category.name === 'backend' ? 'bg-green-100 text-green-700' :
                    category.name === 'cloud' ? 'bg-purple-100 text-purple-700' :
                    category.name === 'databases' ? 'bg-yellow-100 text-yellow-700' :
                    category.name === 'ai' ? 'bg-red-100 text-red-700' :
                    'bg-indigo-100 text-indigo-700'
                  }`}
                >
                  {category.name}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;