import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Zap, Sparkles, Crown, ArrowRight } from 'lucide-react';

const Pricing: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'projeto' | 'mensal'>('projeto');

  const plans = [
    {
      name: 'Starter',
      icon: <Zap className="w-8 h-8" />,
      tagline: 'Para começar rápido',
      price: billingCycle === 'projeto' ? '2.500' : '800',
      period: billingCycle === 'projeto' ? 'projeto' : 'mês',
      description: 'Ideal para landing pages e sites simples',
      features: [
        'Landing Page profissional',
        'Design responsivo',
        'Formulário de contato',
        'SEO básico',
        'Google Analytics',
        'SSL certificado',
        '2 revisões incluídas',
        'Prazo: 1-2 semanas'
      ],
      cta: 'Começar Agora',
      popular: false,
      gradient: 'from-accent-blue to-accent-cyan',
    },
    {
      name: 'Professional',
      icon: <Sparkles className="w-8 h-8" />,
      tagline: 'Mais completo',
      price: billingCycle === 'projeto' ? '35.000' : '2.500',
      period: billingCycle === 'projeto' ? 'projeto' : 'mês',
      description: 'Aplicações web com inteligência artificial',
      features: [
        'Tudo do Starter, mais:',
        'Sistema web completo',
        'Dashboard com analytics',
        'Integração com IA',
        'API REST customizada',
        'Autenticação segura',
        'Painel administrativo',
        'Deploy profissional',
        'Revisões ilimitadas',
        'Prazo: 2-4 meses'
      ],
      cta: 'Mais Popular',
      popular: true,
      gradient: 'from-accent-purple to-accent-blue',
    },
    {
      name: 'Enterprise',
      icon: <Crown className="w-8 h-8" />,
      tagline: 'Solução completa',
      price: billingCycle === 'projeto' ? '120.000' : '10.000',
      period: billingCycle === 'projeto' ? 'projeto' : 'mês',
      description: 'Plataforma escalável com ML avançado',
      features: [
        'Tudo do Professional, mais:',
        'Machine Learning avançado',
        'Big Data processing',
        'Apps mobile (iOS/Android)',
        'Business Intelligence',
        'Infraestrutura escalável',
        'Equipe dedicada',
        'Suporte 24/7',
        'SLA garantido',
        'Consultoria estratégica',
        'Prazo: 6-12 meses'
      ],
      cta: 'Falar com Especialista',
      popular: false,
      gradient: 'from-accent-orange to-accent-purple',
    },
  ];

  return (
    <section id="precos" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent-purple blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent-blue blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Investimento <span className="text-gradient">Transparente</span>
          </h2>
          <p className="text-xl text-gray-medium max-w-2xl mx-auto mb-8">
            Escolha o plano ideal para seu projeto. Orçamento personalizado sem compromisso.
          </p>

          {/* Toggle Billing Cycle */}
          <div className="inline-flex items-center glass-effect rounded-full p-1">
            <button
              onClick={() => setBillingCycle('projeto')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === 'projeto'
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white'
                  : 'text-gray-medium'
              }`}
            >
              Projeto Único
            </button>
            <button
              onClick={() => setBillingCycle('mensal')}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                billingCycle === 'mensal'
                  ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white'
                  : 'text-gray-medium'
              }`}
            >
              Suporte Mensal
            </button>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12 }}
              className={`glass-effect rounded-2xl p-8 relative ${
                plan.popular ? 'border-2 border-accent-blue shadow-2xl shadow-accent-blue/20' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-accent-blue to-accent-purple px-4 py-1 rounded-full text-xs font-bold text-white">
                    🔥 MAIS ESCOLHIDO
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center mb-6`}>
                {plan.icon}
              </div>

              {/* Plan Name */}
              <h3 className="text-2xl font-bold text-gray-light mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-medium mb-6">{plan.tagline}</p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-sm text-gray-medium">A partir de</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-gradient">R$ {plan.price}</span>
                  <span className="text-gray-medium ml-2">/ {plan.period}</span>
                </div>
                <p className="text-sm text-gray-medium mt-2">{plan.description}</p>
              </div>

              {/* CTA Button */}
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`block w-full text-center py-4 rounded-xl font-semibold mb-8 transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-accent-blue to-accent-purple text-white shadow-lg shadow-accent-blue/50'
                    : 'glass-effect text-gray-light hover:border-accent-blue'
                }`}
              >
                {plan.cta}
              </motion.a>

              {/* Features */}
              <ul className="space-y-3">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-light">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Custom Solutions CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-light mb-4">
              Precisa de algo <span className="text-gradient">customizado</span>?
            </h3>
            <p className="text-gray-medium mb-8 text-lg">
              Cada projeto é único. Vamos conversar sobre suas necessidades específicas e criar uma solução sob medida.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#contato"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-accent-blue to-accent-purple px-8 py-4 rounded-full text-white font-semibold flex items-center space-x-2 shadow-lg shadow-accent-blue/50"
              >
                <span>Solicitar Orçamento Personalizado</span>
                <ArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
            <div className="mt-6 flex items-center justify-center gap-8 text-sm text-gray-medium">
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-cyan" />
                Sem compromisso
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-cyan" />
                Resposta em 24h
              </span>
              <span className="flex items-center gap-2">
                <Check className="w-4 h-4 text-accent-cyan" />
                Consultoria gratuita
              </span>
            </div>
          </div>
        </motion.div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-gray-medium mb-4">Formas de Pagamento</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            {['💳 Cartão de Crédito', '🏦 PIX', '📄 Boleto', '📊 Parcelamento'].map((method, idx) => (
              <span key={idx} className="text-sm text-gray-light glass-effect px-4 py-2 rounded-lg">
                {method}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
