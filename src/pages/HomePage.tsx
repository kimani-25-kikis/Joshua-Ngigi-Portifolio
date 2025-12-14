// Alternative: HomePage.tsx without variants (simpler)
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight } from 'react-icons/fa';
import { SiReact, SiNodedotjs, SiPython, SiHono } from 'react-icons/si';

const HomePage = () => {
  const name = 'Joshua Kimani Ngigi'.split('');
  const title = 'Full-Stack Developer | AI & Cloud Enthusiast'.split('');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-navy-50"></div>
      
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="text-center md:text-left">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-lg font-semibold text-orange-500 mb-4 tracking-wider"
          >
            👋 HELLO, I'M
          </motion.p>

          {/* Animated Name - Simplified without variants */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-tight">
            <div className="flex flex-wrap justify-center md:justify-start">
              {name.map((letter, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 20, rotateY: -90 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  transition={{
                    delay: index * 0.03,
                    type: 'spring',
                    damping: 12,
                    stiffness: 200,
                  }}
                  className={`inline-block ${
                    letter === ' ' ? 'w-4' : ''
                  } text-navy-900`}
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
          </h1>

          {/* Animated Title */}
          <div className="text-2xl sm:text-3xl text-navy-700 mb-8">
            <div className="flex flex-wrap justify-center md:justify-start gap-2">
              {title.map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + (index * 0.03) }}
                  className={`inline-block ${
                    char === '|' ? 'mx-2' : ''
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
            className="text-lg text-navy-600 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            Crafting scalable digital solutions with modern technologies. 
            Passionate about transforming ideas into impactful, production-ready applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              to="/projects"
              className="group px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-orange-200 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>Explore My Work</span>
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
              className="px-8 py-4 bg-white text-navy-700 border-2 border-navy-200 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-orange-300 flex items-center justify-center gap-3"
            >
              <FaDownload />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-12 flex justify-center md:justify-start space-x-6"
          >
            <a
              href="https://github.com/kimani-25-kikis"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-navy-50 text-navy-700 hover:bg-orange-500 hover:text-white transition-all duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={24} />
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
              <FaLinkedin size={24} />
              <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-navy-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
            </a>
          </motion.div>
        </div>

        {/* Right Column - Profile Image with Tech Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring' }}
          className="relative"
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96 mx-auto">
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
            
            {/* Profile Image */}
            <div className="absolute inset-12 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="portifolio.jpeg"
                alt="Joshua Kimani - Professional Portrait"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* Tech Badges - Four corners */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 left-1/4 bg-white px-4 py-2 rounded-full shadow-xl border border-navy-100 flex items-center gap-2"
            >
              <SiReact className="text-blue-500" size={20} />
              <span className="text-sm font-bold text-navy-900">React.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.25 }}
              className="absolute -top-4 right-1/4 bg-white px-4 py-2 rounded-full shadow-xl border border-navy-100 flex items-center gap-2"
            >
              <SiHono className="text-purple-500" size={20} />
              <span className="text-sm font-bold text-navy-900">Hono.js</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-4 left-1/4 bg-white px-4 py-2 rounded-full shadow-xl border border-navy-100 flex items-center gap-2"
            >
              <SiPython className="text-yellow-500" size={20} />
              <span className="text-sm font-bold text-navy-900">Python</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.75 }}
              className="absolute -bottom-4 right-1/4 bg-white px-4 py-2 rounded-full shadow-xl border border-navy-100 flex items-center gap-2"
            >
              <SiNodedotjs className="text-green-500" size={20} />
              <span className="text-sm font-bold text-navy-900">Node.js</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HomePage;