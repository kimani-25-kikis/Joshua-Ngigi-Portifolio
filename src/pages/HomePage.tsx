// HomePage.tsx with typing animation, photo gallery, and background image
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaDownload, FaArrowRight, FaChevronLeft, FaChevronRight, FaHeart } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';

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
    skills: ['MongoDB', 'MySQL', 'SQL', 'PostgreSQL', 'MssQL']
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

// Gallery images data
const galleryImages = [
  { id: 1, name: 'Me', alt: 'Professional Portrait' },
  { id: 2, name: 'UsAll', alt: 'Team Collaboration' },
  { id: 3, name: 'Me&Gatimu', alt: 'With Gatimu' },
  { id: 4, name: 'Me&CEO', alt: 'With CEO' },
  { id: 5, name: 'Me&Denno', alt: 'With Denis' },
];

const HomePage = () => {
  const title = 'Full-Stack Developer | AI & Cloud Enthusiast'.split('');
  
  // State for typing animation
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  
  // State for gallery
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  const name = "Joshua Ngigi";

  // Typing animation effect
  useEffect(() => {
    if (isPaused) return;

    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (displayedText.length < name.length) {
          setDisplayedText(name.slice(0, displayedText.length + 1));
        } else {
          // Finished typing, pause then start deleting
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(true);
          }, pauseDuration);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(name.slice(0, displayedText.length - 1));
        } else {
          // Finished deleting, wait then start typing again
          setIsPaused(true);
          setTimeout(() => {
            setIsPaused(false);
            setIsDeleting(false);
          }, 1000);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, isPaused]);

  // Gallery functions
  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const scrollAmount = 400; // Increased for larger images
      galleryRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-24 md:pt-20">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-orange-50 to-navy-50"></div>
        
        {/* Background decorative elements */}
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

            {/* Responsive name container with typing animation */}
            <div className="mb-6">
              {/* Animated typing name */}
              <motion.div
                className="text-4xl sm:text-5xl lg:text-7xl font-black leading-tight flex justify-center md:justify-start px-2 sm:px-0"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <span className="text-navy-900">
                    {displayedText}
                    <span className={`inline-block w-[2px] h-[1em] bg-orange-500 ml-1 ${!isPaused && !isDeleting ? 'animate-pulse' : ''}`}>
                      {/* Cursor */}
                    </span>
                  </span>
                  
                  {/* Growing underline animation */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ 
                      width: isDeleting ? 
                        `${(displayedText.length / name.length) * 100}%` : 
                        `${(displayedText.length / name.length) * 100}%`
                    }}
                    transition={{ duration: 0.3 }}
                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                  />
                </div>
              </motion.div>
            </div>

            {/* Animated Title */}
<div className="text-xl sm:text-2xl md:text-3xl text-navy-700 mb-6 md:mb-8 px-2 sm:px-0">
  {/* Desktop/Tablet View - Single Line */}
  <div className="hidden sm:flex flex-wrap justify-center md:justify-start gap-1 sm:gap-2">
    {title.map((char, index) => (
      <motion.span
        key={`title-desktop-${index}`}
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
  
                {/* Mobile View - Two Lines */}
                <div className="sm:hidden flex flex-col items-center">
                  {/* First Line: Full-Stack Developer | */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-wrap justify-center gap-1 mb-1"
                  >
                    {'Full-Stack Developer |'.split('').map((char, index) => (
                      <span
                        key={`mobile-line1-${index}`}
                        className={`inline-block ${
                          char === '|' ? 'mx-1' : ''
                        }`}
                      >
                        {char}
                      </span>
                    ))}
                  </motion.div>
                  
                  {/* Second Line: AI & Cloud Enthusiast */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 }}
                    className="flex flex-wrap justify-center gap-1"
                  >
                    {'AI & Cloud Enthusiast'.split('').map((char, index) => (
                      <span
                        key={`mobile-line2-${index}`}
                        className={`inline-block ${
                          char === 'A' && 'AI & Cloud Enthusiast'.split('')[index + 1] === 'I' 
                            ? 'text-orange-500 font-bold' 
                            : 'text-navy-700'
                        }`}
                      >
                        {char}
                      </span>
                    ))}
                  </motion.div>
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
                href="/Joshua-Ngigi-Resume.pdf"
                download
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-navy-700 border-2 border-navy-200 font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 hover:border-orange-300 flex items-center justify-center gap-3"
              >
                <FaDownload />
                <span className="text-sm sm:text-base">Download Resume</span>
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

          {/* Right Column - Profile Image */}
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
              
              {/* Profile Image Container */}
              <div className="absolute inset-10 sm:inset-12 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10 bg-white">
                <img
                  src="portifolio.jpeg"
                  alt="Joshua Kimani - Professional Portrait"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Floating effect */}
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

      
      <section className="relative py-20 overflow-hidden">
        
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ 
            backgroundImage: 'url(/Scroll.avif)',
            filter: 'brightness(0.9) contrast(1.0)'
          }}
        >
          
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70"></div>
          
          
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.1)_1px,_transparent_0)] bg-[length:40px_40px]"></div>
        </div>

        
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
              initial={{
                x: Math.random() * 100 + 'vw',
                y: Math.random() * 100 + 'vh',
              }}
              animate={{
                y: [null, `-${Math.random() * 100 + 50}px`],
                opacity: [0.3, 0.7, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <FaHeart className="text-orange-500 animate-pulse" />
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Career <span className="text-orange-500">Moments</span>
              </h2>
              <FaHeart className="text-orange-500 animate-pulse" />
            </div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              A journey through professional collaborations and memorable experiences
            </p>
            
           
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100px' }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mt-6 rounded-full"
            />
          </motion.div>

          
          <div className="hidden lg:block">
            <div className="relative">
              {/* Navigation Buttons */}
              <button
                onClick={() => scrollGallery('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 z-20 bg-white/10 backdrop-blur-md rounded-full p-4 shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/20 hover:border-orange-400 group"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="group-hover:scale-110 transition-transform" />
              </button>
              
              {/* Gallery Container - Centered with 3 visible images */}
              <div className="flex justify-center">
                <div
                  ref={galleryRef}
                  className="flex overflow-x-auto space-x-8 py-8 px-4 max-w-6xl scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800/50 pb-10"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {galleryImages.map((image) => (
                    <motion.div
                      key={image.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className="flex-shrink-0 w-80 h-64 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 hover:border-orange-400 transition-all duration-500 group"
                    >
                      <div className="relative w-full h-full bg-gray-900">
                        
                        <img
                          src={`/${image.name}.jpeg`}
                          alt={image.alt}
                          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                        />
                        
                     
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                     
                        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/90 to-transparent">
                          <div className="flex items-center justify-between">
                            <p className="text-white font-semibold text-lg">{image.alt}</p>
                            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                          </div>
                          <p className="text-gray-300 text-sm mt-2">Professional Moment</p>
                        </div>
                        
                        {/* Corner Accents */}
                        <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <button
                onClick={() => scrollGallery('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 z-20 bg-white/10 backdrop-blur-md rounded-full p-4 shadow-xl hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/20 hover:border-orange-400 group"
                aria-label="Scroll right"
              >
                <FaChevronRight className="group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </div>

          {/* Tablet Gallery - 2 visible images */}
          <div className="hidden md:block lg:hidden">
            <div className="relative">
              <button
                onClick={() => scrollGallery('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-20 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/20"
                aria-label="Scroll left"
              >
                <FaChevronLeft />
              </button>
              
              <div
                ref={galleryRef}
                className="flex overflow-x-auto space-x-6 py-6 px-2 max-w-4xl mx-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-gray-800/50 pb-8"
                style={{ scrollBehavior: 'smooth' }}
              >
                {galleryImages.map((image) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="flex-shrink-0 w-72 h-56 rounded-2xl overflow-hidden shadow-xl border-2 border-white/20 hover:border-orange-400 transition-all duration-300 group bg-gray-900"
                  >
                    <img
                      src={`/${image.name}.jpeg`}
                      alt={image.alt}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                    />
                  </motion.div>
                ))}
              </div>
              
              <button
                onClick={() => scrollGallery('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-20 bg-white/10 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/20"
                aria-label="Scroll right"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Mobile Gallery - Carousel */}
          <div className="md:hidden">
            <div className="relative h-80">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: index === currentImageIndex ? 1 : 0,
                    scale: index === currentImageIndex ? 1 : 0.9
                  }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 rounded-2xl overflow-hidden shadow-lg bg-gray-900 ${
                    index === currentImageIndex ? 'z-10' : 'z-0'
                  }`}
                >
                  <img
                    src={`/${image.name}.jpeg`}
                    alt={image.alt}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <p className="text-white font-semibold">{image.alt}</p>
                  </div>
                </motion.div>
              ))}
              
              {/* Navigation Dots */}
              <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
                {galleryImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentImageIndex ? 'bg-orange-500 w-6' : 'bg-white/50'
                    }`}
                    aria-label={`Go to image ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/30"
                aria-label="Previous image"
              >
                <FaChevronLeft />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-orange-500 hover:text-white transition-all duration-300 border border-white/30"
                aria-label="Next image"
              >
                <FaChevronRight />
              </button>
            </div>
          </div>

          {/* Gallery Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 border border-white/20">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
              <p className="text-gray-300 text-sm">
                Scroll to explore <span className="text-orange-400 font-medium">{galleryImages.length}</span> special moments
              </p>
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            </div>
            
            {/* Decorative Quote */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="mt-8 max-w-2xl mx-auto"
            >
              <div className="relative">
                <div className="absolute -left-4 top-0 text-3xl text-orange-500/30">"</div>
                <p className="text-gray-400 italic text-center px-8">
                  Every picture tells a story of collaboration, growth, and passion for technology
                </p>
                <div className="absolute -right-4 bottom-0 text-3xl text-orange-500/30">"</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;