import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, Code, TrendingUp } from 'lucide-react';

const GitHubStats: React.FC = () => {
  const stats = [
    { 
      icon: <Star className="w-6 h-6" />, 
      value: '116+', 
      label: 'Repositórios Públicos',
      gradient: 'from-yellow-500 to-orange-500'
    },
    { 
      icon: <Code className="w-6 h-6" />, 
      value: '5+', 
      label: 'Anos de Código',
      gradient: 'from-accent-blue to-accent-cyan'
    },
    { 
      icon: <GitFork className="w-6 h-6" />, 
      value: '1000+', 
      label: 'Commits Anuais',
      gradient: 'from-accent-purple to-accent-pink'
    },
    { 
      icon: <TrendingUp className="w-6 h-6" />, 
      value: '100%', 
      label: 'Projetos Completos',
      gradient: 'from-green-500 to-emerald-500'
    },
  ];

  const mainTech = ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'Machine Learning'];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Open Source <span className="text-gradient">Contributor</span>
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto mb-6">
            Construindo soluções reais com código limpo e práticas modernas
          </p>
          
          {/* Main Tech Tags */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {mainTech.map((tech, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect px-4 py-2 rounded-full text-sm font-semibold text-gray-light"
              >
                💻 {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-effect rounded-2xl p-8 text-center"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-4`}>
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.a
            href="https://github.com/fabianosf"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-accent-purple to-accent-blue px-8 py-4 rounded-full text-white font-bold text-lg shadow-2xl shadow-accent-purple/50"
          >
            <Github className="w-6 h-6" />
            <span>Ver Código no GitHub</span>
            <span>→</span>
          </motion.a>
          
          <p className="text-sm text-gray-medium mt-4">
            ⭐ 116+ repositórios públicos • 🔥 5+ anos de experiência
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
