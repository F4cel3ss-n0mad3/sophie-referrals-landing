import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana G.",
      position: "Gerente de 'Viajes sin Fronteras'",
      content: "Desde que usamos International Pathfinders, nuestra red de parceros creció un 50%. La confianza que generamos al mostrar las comisiones en tiempo real fue clave para cerrar acuerdos con hoteles de gran prestigio.",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Carlos L.",
      position: "Fundador de 'Aventuras Turísticas'",
      content: "Finalmente, una solución que elimina la fricción con los parceros. Ahora, los hoteles nos recomiendan con total confianza porque saben que sus comisiones están garantizadas y a la vista.",
      rating: 5,
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  return (
    <section id="testimonios" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Prueba Social
          </h2>
          <p className="text-xl text-gray-600">
            Lo que dicen nuestros clientes sobre International Pathfinders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg">
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Únete a más de 100+ agencias que ya confían en nosotros
            </h3>
            <p className="text-gray-600 mb-6">
              Empresas de todos los tamaños están creciendo con International Pathfinders
            </p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Ver más testimonios
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;