import React from 'react';
import { PESTS_LIST } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-2 block">Nuestros Servicios</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Control Especializado <br /> de Plagas
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-left mb-2">
            Servicio integral adaptado a cada espacio. Recupera la tranquilidad de tu hogar o negocio hoy mismo.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {PESTS_LIST.map((pest, index) => (
            <div 
              key={index}
              className={`
                group relative rounded-2xl p-6 lg:p-8 overflow-hidden cursor-default 
                w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-sm h-80
                flex flex-col justify-end
                ${!pest.image ? 'bg-brand-dark' : ''}
                before:absolute before:inset-0 before:w-full before:h-full
                before:bg-gradient-to-b before:from-black/40 before:to-black/90 before:z-0
                hover:before:from-black/60 hover:before:to-black/95
                before:transition-all before:duration-300
              `}
              style={{
                backgroundImage: pest.image ? `url("${pest.image}")` : undefined,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
              {/* Content Container */}
              <div className="relative z-10 transition-transform duration-500 transform translate-y-2 group-hover:translate-y-0">
                <h3 className="font-bold text-2xl text-white mb-2">{pest.name}</h3>
                <p className="text-sm text-gray-200 opacity-90 leading-relaxed">
                  {pest.description}
                </p>
              </div>
            </div>
          ))}
          
          {/* Custom Card for CTA */}
          <div className="bg-brand-green rounded-2xl p-6 lg:p-8 flex flex-col justify-center items-center text-white w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] max-w-sm h-80 group hover:bg-brand-darkGreen transition-colors cursor-pointer text-center relative overflow-hidden" onClick={() => window.location.href='#contacto'}>
             <div className="relative z-10">
                <h3 className="font-bold text-2xl mb-4">¿Otros Servicios?</h3>
                <p className="text-green-100 text-sm mb-6 max-w-xs mx-auto">Contáctanos para una inspección personalizada de cualquier tipo de plaga.</p>
                
                <div className="inline-flex bg-white/20 p-3 rounded-full group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                    <ArrowRight size={24} />
                </div>
             </div>
             
             {/* Decorative pattern for CTA */}
             <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 10%, transparent 10%)', backgroundSize: '20px 20px' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;