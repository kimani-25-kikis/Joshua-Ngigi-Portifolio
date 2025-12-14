// src/components/ProjectCard.tsx
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  icon?: React.ReactNode;
  category?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubLink,
  icon,
  category
}) => {
  const handleLiveDemo = (e: React.MouseEvent) => {
    e.preventDefault();
    alert("Live demo coming soon! Check the GitHub repository for updates.");
  };

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-lg border border-navy-100 hover:shadow-2xl transition-all duration-300"
    >
      {/* Category Badge */}
      {category && (
        <div className="absolute top-4 right-4 z-10">
          <span className="px-3 py-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full">
            {category}
          </span>
        </div>
      )}

      <div className="p-6">
        {/* Icon & Title */}
        <div className="flex items-start gap-4 mb-4">
          {icon && (
            <div className="p-3 bg-navy-50 rounded-xl">
              {icon}
            </div>
          )}
          <div>
            <h3 className="text-xl font-bold text-navy-900 group-hover:text-orange-500 transition-colors duration-300">
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className="text-navy-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gradient-to-r from-navy-50 to-navy-100 text-navy-700 text-sm font-medium rounded-full border border-navy-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-navy-900 text-white font-medium rounded-lg hover:bg-orange-500 transition-all duration-300 group"
          >
            <FaGithub />
            <span>View Code</span>
          </a>
          <button
            onClick={handleLiveDemo}
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-white text-navy-700 border border-navy-200 font-medium rounded-lg hover:bg-orange-50 hover:border-orange-300 hover:text-orange-600 transition-all duration-300"
          >
            <FaExternalLinkAlt />
            <span>Live Demo</span>
          </button>
        </div>
      </div>

      {/* Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/5 group-hover:via-orange-500/10 group-hover:to-orange-500/5 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default ProjectCard;