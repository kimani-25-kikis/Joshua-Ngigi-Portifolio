
import { motion } from 'framer-motion';

import { FaGithub, FaCode, FaBrain, FaCar, FaUtensils, FaBriefcase, FaExternalLinkAlt } from 'react-icons/fa';
import { SiPython, SiTensorflow, SiFastapi } from 'react-icons/si';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Job Management System",
      description: "Full-stack platform for posting, searching, and applying to job listings with user authentication, real-time updates, and admin dashboard. Features include resume upload, job tracking, and application management.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT Auth", "Tailwind CSS", "REST APIs"],
      githubLink: "https://github.com/kimani-25-kikis/Job_Posting_and_application_Frontend.git",
      liveDemoLink: null,
      icon: <FaBriefcase className="text-blue-600 text-2xl" />,
      category: "Full-Stack",
      color: "blue"
    },
    {
      title: "Restaurant Management System",
      description: "Comprehensive restaurant operations management system handling orders, inventory, customer management, and billing. Includes real-time order tracking and analytics dashboard for business insights.",
      technologies: ["React.js", "Node.js", "Express.js", "MSSQL", "REST API", "Chart.js", "Redux"],
      githubLink: "https://github.com/kimani-25-kikis/FoodieHubFrontend.git",
      liveDemoLink: null,
      icon: <FaUtensils className="text-green-600 text-2xl" />,
      category: "Full-Stack",
      color: "green"
    },
    {
      title: "Vehicle Renting System",
      description: "Modern vehicle rental platform with booking functionality, payment processing (Stripe & Paystack), admin dashboard, and vehicle tracking. Features include calendar-based booking and customer reviews.",
      technologies: ["React.js", "Node.js", "MSSQL", "Express.js", "Stripe API", "Paystack API", "Google Maps"],
      githubLink: "https://github.com/kimani-25-kikis/Vehicle_Renting_Management_System.git",
      liveDemoLink: null,
      icon: <FaCar className="text-purple-600 text-2xl" />,
      category: "Full-Stack",
      color: "purple"
    },
    {
      title: "Plant Disease Detection",
      description: "AI-powered system that detects plant diseases from leaf images with 99% accuracy using convolutional neural networks (CNN). Features real-time image processing and detailed diagnosis reports.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React.js", "OpenCV", "CNN", "Machine Learning"],
      githubLink: "https://github.com/kimani-25-kikis/4th-Project.git",
      liveDemoLink: null,
      icon: <FaBrain className="text-orange-600 text-2xl" />,
      category: "AI/ML",
      color: "orange"
    }
  ];

  // Update ProjectCard props interface first
  interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubLink: string;
    liveDemoLink: string | null;
    icon?: React.ReactNode;
    category?: string;
    color?: string;
  }

  // Updated ProjectCard component
  const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    githubLink,

    icon,
    category,
    color = 'orange'
  }) => {
    const colorClasses = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      purple: 'from-purple-500 to-purple-600',
      orange: 'from-orange-500 to-orange-600',
      red: 'from-red-500 to-red-600',
      indigo: 'from-indigo-500 to-indigo-600'
    };

    const handleLiveDemo = (e: React.MouseEvent) => {
      e.preventDefault();
      alert("Live demo coming soon! Check the GitHub repository for updates.");
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="group relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl border border-navy-100 transition-all duration-300 h-full flex flex-col"
      >
        {/* Category Badge - Positioned higher */}
        {category && (
          <div className="absolute top-3 right-3 z-10">
            <span className={`px-3 py-1 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]} text-white text-xs font-bold rounded-full shadow-md`}>
              {category}
            </span>
          </div>
        )}

        {/* Colored accent bar */}
        <div className={`h-2 bg-gradient-to-r ${colorClasses[color as keyof typeof colorClasses]}`} />

        <div className="p-6 flex-grow flex flex-col">
          {/* Icon & Title - Better spacing */}
          <div className="flex items-start gap-4 mb-5">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} bg-opacity-10`}>
              <div className={`text-${color}-600`}>
                {icon}
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-navy-900 group-hover:text-orange-500 transition-colors duration-300 line-clamp-2">
                {title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-navy-600 mb-6 leading-relaxed flex-grow line-clamp-4">
            {description}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-gradient-to-r from-navy-50 to-white text-navy-700 text-xs font-medium rounded-lg border border-navy-100 hover:border-orange-200 hover:text-orange-600 transition-all duration-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3 mt-auto">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-3 px-4 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-300 group hover:shadow-lg"
            >
              <FaGithub className="group-hover:scale-110 transition-transform" />
              <span>GitHub</span>
            </a>
            
            <button
              onClick={handleLiveDemo}
              className="flex-1 inline-flex items-center justify-center gap-3 px-4 py-3 bg-white text-navy-700 border-2 border-navy-200 font-semibold rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:border-orange-300 hover:text-orange-600 transition-all duration-300 group hover:shadow-lg"
            >
              <FaExternalLinkAlt className="group-hover:scale-110 transition-transform" />
              <span>Live Demo</span>
            </button>
          </div>
        </div>

        {/* Hover Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/10 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none rounded-2xl" />
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50/30 to-navy-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
              <FaCode className="text-white text-3xl" />
            </div>
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl font-black text-navy-900 mb-6 leading-tight">
            My <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">Projects</span>
          </h1>
          
          <p className="text-xl text-navy-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            A showcase of my work in full-stack development, AI/ML applications, 
            and innovative solutions built with modern technologies and best practices.
          </p>
          
          {/* GitHub Stats Card */}
          <motion.a
            href="https://github.com/kimani-25-kikis"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="inline-flex items-center gap-5 bg-gradient-to-r from-white to-navy-50 p-5 rounded-2xl shadow-lg border-2 border-navy-100 hover:border-orange-300 transition-all duration-300 group"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500 rounded-full blur-sm opacity-70 group-hover:opacity-100"
              />
              <div className="relative w-12 h-12 bg-gradient-to-br from-navy-900 to-navy-700 rounded-xl flex items-center justify-center shadow-lg">
                <FaGithub className="text-white text-xl" />
              </div>
            </div>
            
            <div className="text-left">
              <div className="text-sm text-navy-500 font-medium">GitHub Profile</div>
              <div className="text-lg font-bold text-navy-900 group-hover:text-orange-500 transition-colors">
                @kimani-25-kikis
              </div>
            </div>
            
            <div className="text-navy-300 group-hover:text-orange-400 transition-colors">
              →
            </div>
          </motion.a>
        </motion.div>

        {/* Tech Stack Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-navy-900 text-center mb-8">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { icon: <FaCode className="text-blue-600 text-xl" />, label: "Full-Stack" },
              { icon: <SiPython className="text-green-600 text-xl" />, label: "Python" },
              { icon: <SiTensorflow className="text-orange-600 text-xl" />, label: "TensorFlow" },
              { icon: <SiFastapi className="text-purple-600 text-xl" />, label: "FastAPI" },
              { icon: <FaBrain className="text-red-600 text-xl" />, label: "AI/ML" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl shadow-md border border-navy-100 hover:shadow-lg transition-all duration-300"
              >
                {tech.icon}
                <span className="font-medium text-navy-700">{tech.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="relative overflow-hidden rounded-3xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-orange-500/5 to-orange-500/10" />
          
          <div className="relative bg-gradient-to-br from-white to-navy-50 p-8 md:p-12 rounded-3xl border-2 border-orange-100 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-xl">
                  <FaGithub className="text-white text-4xl" />
                </div>
              </div>
              
              <div className="flex-grow text-center md:text-left">
                <h3 className="text-3xl font-bold text-navy-900 mb-4">
                  Explore More Projects
                </h3>
                <p className="text-navy-600 mb-6 text-lg leading-relaxed">
                  Visit my GitHub to see all my repositories, contributions, and ongoing projects. 
                  I'm constantly learning and building new things with modern technologies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://github.com/kimani-25-kikis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-4 px-8 py-4 bg-gradient-to-r from-navy-900 to-navy-800 text-black font-bold rounded-xl hover:from-orange-500 hover:to-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg group"
                  >
                    <FaGithub className="group-hover:scale-110 transition-transform" />
                    <span>View GitHub Profile</span>
                    <span className="group-hover:translate-x-2 transition-transform">→</span>
                  </a>
                  
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-navy-700 border-2 border-navy-200 font-bold rounded-xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 hover:border-orange-300 hover:text-orange-600 transition-all duration-300 hover:scale-105 shadow-lg"
                  >
                    <span>Let's Collaborate</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;