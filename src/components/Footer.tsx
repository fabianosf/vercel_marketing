import React from 'react';
import { Code2, Github, Linkedin, Star, GitFork, Code } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const techStack = [
    'Python', 'Django', 'React', 'TypeScript', 'PostgreSQL',
    'Docker', 'TensorFlow', 'Next.js', 'Tailwind', 'AWS'
  ];

  const githubStats = [
    { icon: <Star className="w-5 h-5" />, value: '116+', label: 'Repositórios' },
    { icon: <Code className="w-5 h-5" />, value: '5+', label: 'Anos de Código' },
    { icon: <GitFork className="w-5 h-5" />, value: '1000+', label: 'Commits' },
  ];

  return (
    <footer className="border-t border-dark-700 py-12">
      <div className="container mx-auto px-4">
        {/* GitHub Stats Section - NOVO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h4 className="text-2xl font-bold text-gray-light mb-2">
            💻 Open Source <span className="text-gradient">Contributor</span>
          </h4>
          <p className="text-sm text-gray-medium mb-6">
            Python • Django • React • TypeScript • Machine Learning
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {githubStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-xl p-6"
              >
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent-blue to-accent-purple flex items-center justify-center">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.a
            href="https://github.com/fabianosf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 mt-6 glass-effect px-6 py-3 rounded-full text-gray-light hover:text-accent-blue transition-colors"
          >
            <Github className="w-5 h-5" />
            <span className="font-semibold">Ver Perfil no GitHub</span>
            <span>→</span>
          </motion.a>
        </motion.div>

        {/* Tech Stack */}
        <div className="text-center mb-8">
          <h4 className="text-sm font-semibold text-gray-medium mb-4">Tecnologias que dominamos</h4>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="text-xs px-3 py-1 bg-dark-800 rounded-full text-gray-light hover:bg-dark-700 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-700">
          <div className="flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-accent-blue" />
            <span className="text-lg font-bold text-gradient">TechCraft</span>
          </div>

          <div className="text-sm text-gray-medium">
            © 2025 TechCraft. Feito com ❤️ e muito código.
          </div>

          <div className="flex items-center space-x-4">
            {/* GitHub */}
            <a
              href="https://github.com/fabianosf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/fabianosfreitas/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
