import React from 'react';
import { AlertTriangle, TrendingDown, Users } from 'lucide-react';

const ProblemSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            ¿Te cuesta conseguir nuevos parceros de alojamiento?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            ¿Tus alianzas actuales no están generando las ventas que esperabas?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Falta de Motivación</h3>
                <p className="text-gray-600">
                  Sin un sistema de comisiones claro y transparente, los parceros no se sienten 
                  incentivados a vender tus servicios activamente.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <TrendingDown className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Oportunidades Perdidas</h3>
                <p className="text-gray-600">
                  Pierdes una fuente inagotable de clientes potenciales y la oportunidad 
                  de expandir tu negocio sin costos de publicidad.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Users className="h-8 w-8 text-red-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Desconfianza</h3>
                <p className="text-gray-600">
                  La falta de transparencia en las comisiones genera desconfianza 
                  y debilita las relaciones comerciales.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="text-center">
              <div className="bg-red-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                <TrendingDown className="h-10 w-10 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">El Resultado:</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                Pierdes una fuente inagotable de clientes potenciales y la oportunidad 
                de expandir tu negocio sin costos de publicidad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;