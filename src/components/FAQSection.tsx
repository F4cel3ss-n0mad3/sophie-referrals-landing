import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);

  const faqs = [
    {
      question: "¿Cómo funciona el sistema de comisiones?",
      answer: "Es muy sencillo. Tus parceros reciben un código QR único. Cuando un huésped lo escanea para comprar uno de tus tours, el sistema asigna automáticamente la comisión al parcero que realizó la recomendación. Todo el proceso es transparente y se refleja en tiempo real en el dashboard del parcero."
    },
    {
      question: "¿Es difícil integrar el sistema en mi página web?",
      answer: "Para nada. Nuestro sistema está diseñado para una integración rápida y sencilla. No necesitas conocimientos técnicos avanzados. Además, nuestro equipo de soporte te ayudará en cada paso del proceso, desde la configuración inicial hasta el lanzamiento completo."
    },
    {
      question: "¿Puedo configurar diferentes tipos de comisiones?",
      answer: "Sí. La plataforma te permite establecer distintos porcentajes o montos de comisión según el tipo de tour o paquete, dándote total flexibilidad. Puedes crear estructuras de comisiones por categoría, temporada, volumen de ventas o cualquier criterio que necesites."
    },
    {
      question: "¿Qué pasa si tengo problemas técnicos?",
      answer: "Contamos con un equipo de soporte técnico disponible 24/7 para resolver cualquier inconveniente. Además, ofrecemos capacitación completa para tu equipo y documentación detallada para que puedas aprovechar al máximo todas las funcionalidades."
    },
    {
      question: "¿Cómo se procesan los pagos a los parceros?",
      answer: "El sistema automatiza completamente el proceso de pagos. Puedes configurar pagos automáticos mensuales, quincenales o según tu preferencia. Los parceros reciben notificaciones de sus pagos y pueden ver el historial completo en su dashboard."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-xl text-gray-600">
            Resolvemos las dudas más comunes sobre International Pathfinders
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openFAQ === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-blue-600 text-white p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-xl opacity-90 mb-6">
              Nuestro equipo está listo para ayudarte
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Contactar Soporte
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;