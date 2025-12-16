import React from 'react';
import { motion } from 'framer-motion';
import { Code, Brain, Zap, Link2, BarChart3, Cpu } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <Code className="w-10 h-10" />,
      title: 'Landing Pages & Sites',
      description: 'Design estratégico que converte visitantes em clientes',
      features: ['Design responsivo', 'SEO otimizado', 'Analytics integrado'],
      color: 'from-accent-blue to-accent-cyan',
    },
    {
      icon: <Cpu className="w-10 h-10" />,
      title: 'Aplicações Web',
      description: 'Sistemas personalizados escaláveis e seguros',
      features: ['Dashboard intuitivo', 'APIs robustas', 'Cloud-ready'],
      color: 'from-accent-purple to-accent-blue',
    },
    {
      icon: <Brain className="w-10 h-10" />,
      title: 'Inteligência Artificial',
      description: 'IA aplicada para decisões mais inteligentes',
      features: ['Chatbots IA', 'Automação', 'Análise preditiva'],
      color: 'from-accent-cyan to-accent-purple',
    },
    {
      icon: <Link2 className="w-10 h-10" />,
      title: 'Integração & API',
      description: 'Conecte todos os seus sistemas perfeitamente',
      features: ['APIs customizadas', 'Webhooks', 'Sincronização'],
      color: 'from-accent-orange to-accent-blue',
    },
    {
      icon: <BarChart3 className="w-10 h-10" />,
      title: 'Painéis & Analytics',
      description: 'Visualize dados em tempo real com clareza',
      features: ['Dashboards', 'Relatórios', 'KPIs visuais'],
      color: 'from-accent-blue to-accent-purple',
    },
    {
      icon: <Zap className="w-10 h-10" />,
      title: 'Machine Learning',
      description: 'Modelos preditivos personalizados',
      features: ['ML customizado', 'Análise comportamental', 'Forecasting'],
      color: 'from-accent-purple to-accent-cyan',
    },
  ];

  return (
    <section id="servicos" className="py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Soluções <span className="text-gradient">Completas</span>
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Da ideia ao deploy. Tecnologia de ponta para impulsionar seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-effect p-8 rounded-2xl group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-light mb-3">
                {service.title}
              </h3>

              <p className="text-gray-medium mb-6">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center text-accent-blue group-hover:text-accent-cyan transition-colors">
                <span className="text-sm font-semibold">Saiba mais</span>
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  className="ml-2"
                >
                  →
                </motion.span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
