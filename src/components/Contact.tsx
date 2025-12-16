import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Phone, Mail, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  // 👇 COLOQUE SEU NÚMERO AQUI (formato: 5511999999999)
  const whatsappNumber = '5521994078286'; // Exemplo: 55 (código BR) + 11 (DDD) + 999999999
  const whatsappMessage = 'Olá! Vim através do site e gostaria de conversar sobre um projeto.';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-blue opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-purple opacity-10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Vamos <span className="text-gradient">Conversar</span>?
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto">
            Transforme sua ideia em realidade. Entre em contato agora mesmo pelo WhatsApp!
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main WhatsApp CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-3xl p-12 mb-12 text-center"
          >
            <div className="mb-8">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
                className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 mb-6"
              >
                <MessageCircle className="w-12 h-12 text-white" />
              </motion.div>
              
              <h3 className="text-3xl font-bold text-gray-light mb-4">
                Fale Comigo no WhatsApp
              </h3>
              <p className="text-gray-medium text-lg mb-8">
                Resposta rápida, orçamento sem compromisso e consultoria técnica gratuita.
              </p>
            </div>

            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-500 to-emerald-600 px-12 py-6 rounded-full text-white font-bold text-xl shadow-2xl shadow-green-500/50 hover:shadow-green-500/70 transition-all"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Iniciar Conversa no WhatsApp</span>
              <span>→</span>
            </motion.a>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-medium flex-wrap">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Online agora
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Resposta em 24h
              </span>
              <span className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Sem compromisso
              </span>
            </div>
          </motion.div>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Phone className="w-6 h-6" />,
                title: 'Telefone',
                content: '+55 (21) 99407-8286',
                link: `https://wa.me/${whatsappNumber}`,
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                icon: <Mail className="w-6 h-6" />,
                title: 'Email',
                content: 'contato@techcraft.dev',
                link: 'mailto:fabiano.freitas@gmail.com',
                gradient: 'from-accent-blue to-accent-cyan'
              },
              {
                icon: <MapPin className="w-6 h-6" />,
                title: 'Localização',
                content: 'Rio de Janeiro, Brasil',
                link: null,
                gradient: 'from-accent-purple to-accent-pink'
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-effect rounded-2xl p-6 text-center"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h4 className="text-sm font-semibold text-gray-medium mb-2">
                  {item.title}
                </h4>
                {item.link ? (
                  <a
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-gray-light font-semibold hover:text-gradient transition-colors"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-light font-semibold">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* FAQ Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 glass-effect rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-center text-gray-light mb-6">
              Horário de Atendimento
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-center">
              <div>
                <p className="text-gray-medium text-sm mb-1">Segunda a Sexta</p>
                <p className="text-gray-light font-semibold">9h às 18h</p>
              </div>
              <div>
                <p className="text-gray-medium text-sm mb-1">Sábados</p>
                <p className="text-gray-light font-semibold">9h às 13h</p>
              </div>
            </div>
            <p className="text-center text-sm text-gray-medium mt-6">
              💬 Mensagens fora do horário são respondidas no próximo dia útil
            </p>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <p className="text-gray-medium mb-4">Por que falar comigo?</p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {[
                '✅ 6+ projetos entregues',
                '✅ 100% satisfação',
                '✅ Orçamento transparente',
                '✅ Suporte contínuo',
              ].map((item, index) => (
                <span key={index} className="text-sm text-gray-light">
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
