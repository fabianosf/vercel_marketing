import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const PricingFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Como funciona o pagamento?',
      answer: 'Trabalhamos com pagamento parcelado: 50% no início do projeto e 50% na entrega. Para projetos maiores, podemos dividir em até 3x com marcos de entrega. Aceitamos PIX, boleto, cartão e transferência.'
    },
    {
      question: 'O que está incluso no preço?',
      answer: 'Todo o desenvolvimento (design, código, testes), deploy em produção, treinamento da equipe, documentação técnica e 30 dias de garantia. Domínio e hospedagem podem ser inclusos ou fornecidos por você.'
    },
    {
      question: 'Quanto tempo leva para começar?',
      answer: 'Após aprovação da proposta e pagamento do sinal, iniciamos em até 5 dias úteis. O prazo total depende da complexidade: landing pages em 1-2 semanas, sistemas web em 2-6 meses.'
    },
    {
      question: 'Posso fazer alterações durante o projeto?',
      answer: 'Sim! Trabalhamos de forma ágil com entregas incrementais. Pequenos ajustes são inclusos. Mudanças de escopo maiores podem gerar aditivo, mas sempre conversamos antes.'
    },
    {
      question: 'Vocês fazem manutenção depois?',
      answer: 'Sim! Oferecemos planos de suporte mensal a partir de R$ 800/mês. Inclui correção de bugs, atualizações de segurança, backup e pequenas melhorias. Ou você pode contratar pontualmente.'
    },
    {
      question: 'E se eu não gostar do resultado?',
      answer: 'Trabalhamos com revisões incluídas e validação por etapas. Se houver insatisfação justificada na entrega final, devolvemos parte do investimento ou refazemos até aprovação (conforme contrato).'
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-gray-light mb-4">
            Dúvidas sobre <span className="text-gradient">Investimento</span>?
          </h3>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-effect rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-white hover:bg-opacity-5 transition-all"
              >
                <span className="font-semibold text-gray-light text-left">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent-blue" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-medium">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingFAQ;
