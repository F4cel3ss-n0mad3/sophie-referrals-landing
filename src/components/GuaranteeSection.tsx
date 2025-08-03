import React from 'react';
import { Shield, CheckCircle, Clock } from 'lucide-react';

const GuaranteeSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prueba International Pathfinders sin riesgos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tienes dudas? Ofrecemos una demo gratuita y un periodo de prueba para que veas 
            por ti mismo cómo nuestra plataforma puede transformar tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Demo Gratuita</h3>
            <p className="text-gray-600">
              Agenda una demostración personalizada sin compromiso
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Periodo de Prueba</h3>
            <p className="text-gray-600">
              Prueba todas las funcionalidades durante 30 días
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md text-center">
            <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sin Contratos</h3>
            <p className="text-gray-600">
              Sin contratos a largo plazo, sin sorpresas
            </p>
          </div>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Garantía de Satisfacción 100%
          </h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Si en los primeros 30 días no ves resultados tangibles en tu red de parceros, 
            te devolvemos el 100% de tu inversión. Sin preguntas, sin complicaciones.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Solicitar Demo Gratuita
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Iniciar Prueba Gratuita
            </button>
          </div>

          <p className="text-sm text-gray-500 mt-4">
            * No se requiere tarjeta de crédito para la demo
          </p>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;