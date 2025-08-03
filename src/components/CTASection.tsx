import React from 'react';
import { ArrowRight, Users, TrendingUp } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            ¿Listo para construir relaciones de confianza y disparar tus ventas?
          </h2>
          
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
            Únete a las agencias que ya están creciendo con una red de parceros motivados.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center justify-center">
              ¡Empieza a ganar la credibilidad que mereces!
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-all">
              Ver Demo en Vivo
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <Users className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Red de Parceros Activa</h3>
              <p className="opacity-90">
                Convierte cada alojamiento en un vendedor motivado de tus servicios
              </p>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-xl backdrop-blur-sm">
              <TrendingUp className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Crecimiento Garantizado</h3>
              <p className="opacity-90">
                Incrementa tus ventas de forma orgánica y sostenible
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-white bg-opacity-10 rounded-xl backdrop-blur-sm max-w-2xl mx-auto">
            <p className="text-lg font-medium mb-2">
              🎯 Oferta Especial por Tiempo Limitado
            </p>
            <p className="opacity-90">
              Los primeros 50 clientes obtienen 3 meses gratis + configuración personalizada sin costo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;