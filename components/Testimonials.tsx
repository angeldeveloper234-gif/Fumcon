import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonios" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-2 block">Opiniones Reales</span>
            <h2 className="text-4xl font-bold text-brand-dark">Confianza Verificada</h2>
          </div>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
             <div className="flex">
                {[1,2,3,4,5].map(i => <Star key={i} size={20} className="fill-brand-yellow text-brand-yellow" />)}
             </div>
             <span className="font-bold text-brand-dark ml-2">4.9/5 Promedio</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial, idx) => (
            <div 
                key={testimonial.id} 
                className={`bg-white p-8 rounded-3xl shadow-sm hover:shadow-soft transition-all duration-300 flex flex-col ${idx === 1 ? 'md:mt-12' : ''}`}
            >
              <div className="mb-6">
                <Quote className="text-brand-green/20 h-10 w-10 rotate-180" />
              </div>
              
              <p className="text-gray-700 text-lg leading-relaxed mb-8 flex-grow">"{testimonial.text}"</p>

              <div className="border-t border-gray-100 pt-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-green to-brand-darkGreen rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md">
                    {testimonial.name.charAt(0)}
                </div>
                <div>
                    <h4 className="font-bold text-brand-dark text-lg">{testimonial.name}</h4>
                    <div className="flex text-brand-yellow text-xs">
                        {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={12} fill="#FBC02D" className="mr-0.5" />
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;