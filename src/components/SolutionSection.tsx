import React from 'react';
import { Shield, TrendingUp, Award } from 'lucide-react';

const SolutionSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Tu Solución
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            Con <span className="font-semibold text-blue-600">International Pathfinders</span>, 
            no solo gestionas comisiones, sino que construyes una fuerza de ventas activa y motivada. 
            Es la herramienta definitiva para que tu agencia de viajes:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center">
            <Shield className="h-16 w-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Cree alianzas sólidas</h3>
            <p className="text-gray-600">
              Nuestra propuesta de transparencia total en las comisiones es irresistible. 
              Hoteles y hostales querrán ser tus socios.
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center">
            <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Genere ventas sin esfuerzo</h3>
            <p className="text-gray-600">
              Con cada parcero vendiendo activamente, tu agencia experimentará un 
              crecimiento constante y orgánico.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center">
            <Award className="h-16 w-16 text-purple-600 mx-auto mb-6" />
            <h3 className="text-xl font-bold text-gray-900 mb-4">Gane credibilidad y confianza</h3>
            <p className="text-gray-600">
              Demuestra a tus socios que valoras su trabajo y obtén la lealtad 
              que se traduce en ventas a largo plazo.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            La herramienta definitiva para hacer crecer tu agencia
          </h3>
          <p className="text-xl opacity-90 mb-6">
            Transforma tu red de contactos en una máquina de ventas imparable
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Descubre cómo funciona
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;