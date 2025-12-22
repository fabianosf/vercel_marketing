import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'web-apps' | 'sites'>('all');

  const projects = [
    {
      title: 'VetSystem',
      description: 'Sistema completo de gestão veterinária com IA',
      category: 'web-apps',
      image: '🏥',
      stats: ['40% ↑ eficiência', '1000+ usuários'],
      tech: ['Django', 'React', 'PostgreSQL', 'ML'],
      gradient: 'from-blue-500 to-cyan-500',
      link: null,
    },
    {
      title: 'FightGym',
      description: 'Plataforma de gestão para academias de luta',
      category: 'web-apps',
      image: '🥊',
      stats: ['300+ alunos', 'Real-time'],
      tech: ['Django', 'TypeScript', 'Docker', 'Redis'],
      gradient: 'from-purple-500 to-pink-500',
      link: null,
    },
    {
      title: 'ASBJJ Academia',
      description: 'Site institucional para academia de Jiu-Jitsu',
      category: 'sites',
      image: '🥋',
      stats: ['Design responsivo', 'SEO otimizado'],
      tech: ['React', 'Tailwind', 'Responsive'],
      gradient: 'from-red-500 to-orange-500',
      link: 'https://asbjj.com.br',
    },
    {
      title: 'Renata Bastos Nutrição',  // 👈 AJUSTADO
      description: 'Site profissional para consultório de nutrição',  // 👈 CORRIGIDO
      category: 'sites',
      image: '🥗',  // 👈 EMOJI MAIS APROPRIADO (salada/nutrição)
      stats: ['Design moderno', 'Mobile-first'],
      tech: ['React', 'Tailwind', 'SEO'],
      gradient: 'from-green-500 to-emerald-500',  // 👈 VERDE (saúde/nutrição)
      link: 'https://clinicarenatabastos.com.br',
    },

    {
      title: 'Walennam Studio',
      description: 'Landing page para designer de sobrancelhas e cílios',
      category: 'sites',
      image: '💄',
      stats: ['Design elegante', 'Alta conversão'],
      tech: ['React', 'Tailwind', 'Responsive'],
      gradient: 'from-pink-500 to-rose-500',
      link: 'https://walennam.com.br',
    },
    {
      title: 'Portfolio Fabiano SF',
      description: 'Portfolio pessoal em formato de currículo interativo',
      category: 'sites',
      image: '💼',
      stats: ['Design moderno', 'Full-stack'],
      tech: ['React', 'TypeScript', 'Vite'],
      gradient: 'from-orange-500 to-amber-500',
      link: 'https://fabianosf.com',
    },

      {
    title: 'FraudGuard AI',
    description: 'Painel em tempo real para monitorar e bloquear transações suspeitas',
    category: 'sistemas',
    image: '🛡️',
    stats: ['Detecção em tempo real', 'Redução de fraudes'],
    tech: ['Django','React', 'Tailwind', 'Dashboards interativos'],
    gradient: 'from-sky-500 to-indigo-600',
    link: 'https://github.com/fabianosf/fraudguard',
  },



  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const categories = [
    { value: 'all', label: 'Todos os Projetos' },
    { value: 'web-apps', label: 'Sistemas Web' },
    { value: 'sites', label: 'Sites & Landing Pages' },
  ];

  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Projetos que <span className="text-gradient">Impactam</span>
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto mb-8">
            Cases reais de clientes que transformaram seus negócios com nossas soluções.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((cat) => (
              <motion.button
                key={cat.value}
                onClick={() => setFilter(cat.value as any)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === cat.value
                    ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white'
                    : 'glass-effect text-gray-light hover:text-accent-blue'
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass-effect rounded-2xl overflow-hidden cursor-pointer"
            >
              {/* Image/Icon Section */}
              <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center text-7xl relative overflow-hidden`}>
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {project.image}
                </motion.div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100">
                  {project.link ? (
                    <motion.a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white rounded-full hover:bg-accent-blue transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5 text-dark-900" />
                    </motion.a>
                  ) : (
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-3 bg-white bg-opacity-50 rounded-full cursor-not-allowed"
                    >
                      <ExternalLink className="w-5 h-5 text-dark-900 opacity-50" />
                    </motion.div>
                  )}
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="p-3 bg-white rounded-full hover:bg-accent-purple transition-colors"
                  >
                    <Github className="w-5 h-5 text-dark-900" />
                  </motion.button>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-light group-hover:text-gradient transition-colors">
                    {project.title}
                  </h3>
                  {project.link && (
                    <span className="text-xs text-accent-cyan font-semibold">● ONLINE</span>
                  )}
                </div>

                <p className="text-gray-medium mb-4 text-sm">
                  {project.description}
                </p>

                {/* Stats */}
                <div className="flex items-center flex-wrap gap-2 mb-4">
                  {project.stats.map((stat, idx) => (
                    <span key={idx} className="text-xs font-semibold text-accent-cyan">
                      {stat}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs px-3 py-1 bg-dark-700 rounded-full text-gray-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Link indicator */}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 flex items-center text-accent-blue group-hover:text-accent-cyan transition-colors"
                  >
                    <span className="text-xs font-semibold">Ver projeto ao vivo</span>
                    <motion.span
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      className="ml-1"
                    >
                      →
                    </motion.span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
        >
          {[
            { value: '6+', label: 'Projetos Entregues' },
            { value: '100%', label: 'Clientes Satisfeitos' },
            { value: '5+', label: 'Anos de Experiência' },
            { value: '24h', label: 'Tempo de Resposta' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-medium mb-6 text-lg">
            Pronto para criar algo incrível juntos?
          </p>
          <motion.a
            href="#contato"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-4 rounded-full text-white font-semibold shadow-lg shadow-accent-blue/50"
          >
            <span>Iniciar Meu Projeto</span>
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
