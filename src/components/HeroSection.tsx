import React from 'react';
import { TrendingUp, Users, Target } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="inicio" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            ¡Multiplica tus ventas con un{' '}
            <span className="text-blue-600">sistema de comisiones</span>{' '}
            imparable!
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            El programa que convierte a hoteles, hostales y Airbnbs en tus mejores vendedores, 
            impulsando tu crecimiento de forma orgánica.
          </p>

          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-lg mb-12">
            ¡Quiero una demo!
          </button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Crecimiento Orgánico</h3>
              <p className="text-gray-600">Expande tu red sin costos de publicidad</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Red de Socios</h3>
              <p className="text-gray-600">Convierte alojamientos en vendedores activos</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultados Garantizados</h3>
              <p className="text-gray-600">Sistema transparente y confiable</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;