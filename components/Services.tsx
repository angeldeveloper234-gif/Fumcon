import React from 'react';
import { PESTS_LIST } from '../constants';
import { Bug, AlertTriangle, ShieldAlert, ArrowUpRight, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-green font-bold tracking-widest uppercase text-xs mb-2 block">Nuestros Servicios</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark tracking-tight">
              Control Integral <br /> de Plagas
            </h2>
          </div>
          <p className="text-gray-500 max-w-sm text-right md:text-left mb-2">
            Servicio integral adaptado a cada espacio. Recupera la tranquilidad de tu hogar o negocio hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {PESTS_LIST.map((pest, index) => (
            <div 
              key={index}
              className="group relative bg-brand-gray rounded-2xl p-6 lg:p-8 hover:bg-brand-dark transition-all duration-300 overflow-hidden cursor-default"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-sm font-mono font-bold text-gray-400 group-hover:text-gray-600">
                    {(index + 1).toString().padStart(2, '0')}
                </span>
                <ArrowUpRight className="text-gray-300 group-hover:text-brand-yellow opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>

              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:bg-brand-green/20 transition-colors">
                 {index % 3 === 0 ? (
                    <Bug className="text-brand-dark w-6 h-6 group-hover:text-brand-yellow" />
                ) : index % 3 === 1 ? (
                    <AlertTriangle className="text-brand-dark w-6 h-6 group-hover:text-brand-yellow" />
                ) : (
                    <ShieldAlert className="text-brand-dark w-6 h-6 group-hover:text-brand-yellow" />
                )}
              </div>
              
              <h3 className="font-bold text-xl text-brand-dark group-hover:text-white transition-colors">{pest}</h3>
              <p className="text-sm text-gray-500 mt-2 group-hover:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                Eliminación total garantizada.
              </p>
            </div>
          ))}
          
          {/* Custom Card for CTA */}
          <div className="bg-brand-green rounded-2xl p-6 lg:p-8 flex flex-col justify-between items-start text-white col-span-2 md:col-span-1 lg:col-span-1 group hover:bg-brand-darkGreen transition-colors cursor-pointer" onClick={() => window.location.href='#contacto'}>
             <div>
                <h3 className="font-bold text-xl mb-2">¿Otra Plaga?</h3>
                <p className="text-green-100 text-sm">Contáctanos para una inspección personalizada.</p>
             </div>
             <div className="mt-4 bg-white/20 p-3 rounded-full self-end group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                <ArrowRight size={20} />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;