// src/pages/ProjectsPage.tsx
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { FaGithub, FaCode, FaBrain, FaCar, FaUtensils, FaBriefcase } from 'react-icons/fa';

const ProjectsPage = () => {
  const projects = [
    {
      title: "Job Management System",
      description: "Full-stack system for posting, searching, and applying to job listings with user authentication and real-time updates.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
      githubLink: "https://github.com/kimani-25-kikis/Job_Posting_and_application_Frontend.git",
      icon: <FaBriefcase className="text-blue-500" />,
      category: "Full-Stack"
    },
    {
      title: "Restaurant Management System",
      description: "Comprehensive system for managing restaurant operations including orders, inventory, and customer management.",
      technologies: ["React", "Node.js", "Express", "Mssql", "REST API"],
      githubLink: "https://github.com/kimani-25-kikis/FoodieHubFrontend.git",
      icon: <FaUtensils className="text-green-500" />,
      category: "Full-Stack"
    },
    {
      title: "Vehicle Renting System",
      description: "Management system for vehicle rentals with booking functionality, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "Mssql", "Express", "Stripe & Paystack API"],
      githubLink: "https://github.com/kimani-25-kikis/Vehicle_Renting_Management_System.git",
      icon: <FaCar className="text-purple-500" />,
      category: "Full-Stack"
    },
    {
      title: "Plant Disease Detection",
      description: "Machine learning system that detects plant diseases from leaf images with 99% accuracy using deep learning models.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React.js", "OpenCV"],
      githubLink: "https://github.com/kimani-25-kikis/4th-Project.git",
      icon: <FaBrain className="text-orange-500" />,
      category: "AI/ML"
    }
  ];

 // const categories = ["All", "Full-Stack", "AI/ML", "Frontend", "Backend"];

  return (
    <div className="py-20 bg-gradient-to-b from-white to-navy-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-navy-900 mb-4">
            My <span className="text-orange-500">Projects</span>
          </h1>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto mb-8">
            A collection of my work showcasing full-stack development, AI/ML applications, 
            and innovative solutions built with modern technologies.
          </p>
          
          {/* GitHub Stats */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-4 bg-white p-4 rounded-xl shadow-lg border border-navy-100"
          >
            <FaGithub className="text-navy-700" size={24} />
            <a
              href="https://github.com/kimani-25-kikis"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy-700 hover:text-orange-500 font-semibold transition-colors"
            >
              @kimani-25-kikis
            </a>
            <span className="text-navy-400">|</span>
            <span className="text-navy-600">Explore all repositories</span>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-2xl border border-orange-100 shadow-lg">
            <FaCode className="text-4xl text-orange-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-navy-900 mb-4">
              Want to See More?
            </h3>
            <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects, contributions, and code samples.
              I'm always working on new ideas and learning new technologies.
            </p>
            <a
              href="https://github.com/kimani-25-kikis"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-3 bg-navy-900 text-white font-semibold rounded-xl hover:bg-orange-500 transition-all duration-300 hover:scale-105"
            >
              <FaGithub />
              Visit My GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;