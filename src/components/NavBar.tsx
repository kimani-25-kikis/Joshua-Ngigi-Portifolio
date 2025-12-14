// src/components/NavBar.tsx
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaBars, 
  FaTimes, 
  FaHome, 
  FaUser, 
  FaCode, 
  FaEnvelope,
} from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeHover, setActiveHover] = useState<string | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  
  const navItems = [
    { 
      name: 'Home', 
      path: '/', 
      icon: <FaHome />,
      color: 'from-orange-400 to-orange-500'
    },
    { 
      name: 'About', 
      path: '/about', 
      icon: <FaUser />,
      color: 'from-blue-400 to-blue-500'
    },
    { 
      name: 'Projects', 
      path: '/projects', 
      icon: <FaCode />,
      color: 'from-purple-400 to-purple-500'
    },
    { 
      name: 'Contact', 
      path: '/contact', 
      icon: <FaEnvelope />,
      color: 'from-green-400 to-green-500'
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    navigate('/');
    setIsOpen(false);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <>
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl shadow-navy-200/30' 
            : 'bg-gradient-to-b from-white/95 to-white/80 backdrop-blur-lg'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Animated Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogoClick}
              className="flex items-center space-x-3 cursor-pointer group"
            >
              <div className="relative">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-full blur-sm opacity-70 group-hover:opacity-100"
                />
                <div className="relative w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-orange-300 transition-all duration-300">
                  <span className="text-white font-bold text-lg">J</span>
                </div>
              </div>
              
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-navy-900"> {/* Changed from gradient to solid navy */}
                  Dev Joshua
                </span>
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: scrolled ? '60px' : '80px' }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 bg-gradient-to-r from-orange-500 to-orange-300 rounded-full mt-1"
                />
              </div>
            </motion.div>

            {/* Desktop Navigation with Animated Background */}
            <div className="hidden lg:flex items-center space-x-1 relative">
              {/* Animated Background for Active Item */}
              <motion.div
                layoutId="nav-bg"
                className="absolute inset-0 bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl -z-10"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
              
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <motion.div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => setActiveHover(item.name)}
                    onMouseLeave={() => setActiveHover(null)}
                  >
                    <button
                      onClick={() => handleNavClick(item.path)}
                      className={`relative px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2 group ${
                        isActive 
                          ? 'text-navy-900' 
                          : 'text-navy-700 hover:text-navy-900'
                      }`}
                    >
                      <motion.div
                        animate={{ 
                          scale: isActive ? 1.2 : 1,
                          rotate: isActive ? [0, 10, -10, 0] : 0 
                        }}
                        transition={{ duration: 0.3 }}
                        className={`text-lg ${isActive ? 'text-orange-500' : 'text-navy-600 group-hover:text-orange-500'}`}
                      >
                        {item.icon}
                      </motion.div>
                      <span className="font-semibold">{item.name}</span>
                      
                      {/* Active Indicator */}
                      {isActive && (
                        <motion.div
                          layoutId="active-indicator"
                          className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full shadow-lg"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 200 }}
                        />
                      )}
                    </button>
                    
                    {/* Hover Effect */}
                    {activeHover === item.name && !isActive && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="absolute inset-0 bg-gradient-to-r from-orange-100/50 to-orange-50/50 rounded-xl -z-10"
                      />
                    )}
                  </motion.div>
                );
              })}

              {/* Separator */}
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-navy-200 to-transparent mx-2" />

              {/* Social Icons - Desktop */}
              <div className="flex items-center space-x-3">
                <motion.a
                  href="https://github.com/kimani-25-kikis"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-3 rounded-xl bg-gradient-to-br from-navy-50 to-white shadow-md hover:shadow-lg transition-all duration-300 group"
                  aria-label="GitHub"
                >
                  <FaGithub className="text-navy-700 group-hover:text-orange-500 transition-colors duration-300" size={20} />
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-navy-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  >
                    GitHub
                  </motion.div>
                </motion.a>
                
                <motion.a
                  href="https://linkedin.com/in/joshua-ngigi-1a651138b"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative p-3 rounded-xl bg-gradient-to-br from-navy-50 to-white shadow-md hover:shadow-lg transition-all duration-300 group"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-blue-600 group-hover:text-orange-500 transition-colors duration-300" size={20} />
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-navy-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap"
                  >
                    LinkedIn
                  </motion.div>
                </motion.a>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.9 }}
              className="lg:hidden p-3 rounded-xl bg-gradient-to-br from-navy-50 to-white shadow-md hover:shadow-lg transition-all duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-navy-700" size={24} />
              ) : (
                <motion.div
                  animate={{ rotate: [0, 180] }}
                  transition={{ duration: 0.3 }}
                >
                  <FaBars className="text-navy-700" size={24} />
                </motion.div>
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy-900/50 backdrop-blur-sm z-40 lg:hidden"
            />
            
            {/* Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-gradient-to-b from-white to-navy-50 shadow-2xl z-50 lg:hidden overflow-y-auto"
            >
              {/* Header */}
              <div className="p-6 border-b border-navy-100">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-2xl">J</span>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-navy-900">Dev Joshua</div> {/* Fixed color here too */}
                      <div className="text-sm text-navy-600">Full-Stack Developer</div>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-navy-50"
                  >
                    <FaTimes className="text-navy-700" size={24} />
                  </button>
                </div>
              </div>

              {/* Menu Items */}
              <div className="p-6 space-y-2">
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path;
                  return (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => handleNavClick(item.path)}
                        className={`w-full flex items-center justify-between p-4 rounded-xl transition-all duration-300 group ${
                          isActive
                            ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-l-4 border-orange-500'
                            : 'hover:bg-navy-50'
                        }`}
                      >
                        <div className="flex items-center gap-4">
                          <motion.div
                            animate={{ 
                              scale: isActive ? 1.2 : 1,
                              rotate: isActive ? [0, 10, -10, 0] : 0 
                            }}
                            className={`text-xl ${
                              isActive 
                                ? 'text-orange-500' 
                                : 'text-navy-600 group-hover:text-orange-500'
                            }`}
                          >
                            {item.icon}
                          </motion.div>
                          <span className={`font-semibold ${
                            isActive ? 'text-navy-900' : 'text-navy-700'
                          }`}>
                            {item.name}
                          </span>
                        </div>
                        {isActive && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                          />
                        )}
                      </button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Social Links - Mobile */}
              <div className="p-6 border-t border-navy-100">
                <div className="text-navy-700 font-medium mb-4 text-center">Connect with me</div>
                <div className="flex justify-center space-x-6">
                  <motion.a
                    href="https://github.com/kimani-25-kikis"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-navy-50 to-white shadow-md hover:shadow-lg transition-all duration-300"
                    aria-label="GitHub"
                  >
                    <FaGithub className="text-navy-700" size={24} />
                  </motion.a>
                  <motion.a
                    href="https://linkedin.com/in/joshua-ngigi-1a651138b"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    className="p-3 rounded-xl bg-gradient-to-br from-navy-50 to-white shadow-md hover:shadow-lg transition-all duration-300"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin className="text-blue-600" size={24} />
                  </motion.a>
                </div>
              </div>

              {/* CTA Button */}
              <div className="p-6">
                <motion.a
                  href="/Joshua-Kimani-CV.pdf"
                  download
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg text-center hover:shadow-orange-200 transition-all duration-300"
                >
                  Download CV
                </motion.a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;