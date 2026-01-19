import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/inicio.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vaW5pY2lvLmpwZWciLCJpYXQiOjE3Njg4NDc3MzMsImV4cCI6MTgwMDM4MzczM30.3qTbN3FgjjvPmn9MS-k89TnBUfdFRNPS2kkMOURe3zY"
          alt="Professional disinfection"
          className="w-full h-full object-cover opacity-60"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Column */}
          <div className="w-full lg:w-1/2 text-white space-y-8">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse shadow-glow"></span>
              <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest">Disponibilidad 24/7</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight">
              Control de Plagas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-yellow">
                Sin Riesgos
              </span>
            </h1>
            
            <p className="text-lg text-gray-300 max-w-xl leading-relaxed font-light border-l-2 border-brand-green pl-6">
              Servicio de fumigación certificado y seguro para tu familia y negocio. 
              Tecnología avanzada para un ambiente libre de plagas.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contacto"
                className="bg-brand-green text-white px-8 py-4 rounded-full font-bold hover:bg-brand-darkGreen transition-all transform hover:-translate-y-1 hover:shadow-glow flex items-center gap-2"
              >
                Cotizar ahora
              </a>
              <a
                href="https://wa.me/529991234567"
                target="_blank"
                rel="noreferrer"
                className="group px-8 py-4 rounded-full font-bold text-white border border-white/30 hover:bg-white hover:text-brand-dark transition-all flex items-center gap-2"
              >
                WhatsApp inmediato 
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="pt-8 flex gap-8 border-t border-white/10">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-yellow h-8 w-8" />
                <div className="text-sm">
                    <p className="font-bold text-white">Licencia Sanitaria</p>
                    <p className="text-gray-400">Vigente y Certificada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-brand-yellow h-8 w-8" />
                <div className="text-sm">
                    <p className="font-bold text-white">Productos EPA</p>
                    <p className="text-gray-400">Eco-Friendly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Column / Card Overlay */}
          <div className="hidden lg:block w-full lg:w-1/2 relative">
             <div className="relative z-10 bg-white/5 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-all duration-700">
                <img 
                    src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800" 
                    alt="Fumigation Expert" 
                    className="rounded-2xl w-full h-80 object-cover shadow-lg mb-6"
                />
                <div className="flex justify-between items-end">
                    <div>
                        <p className="text-brand-yellow text-sm font-bold uppercase mb-1">Resultado Garantizado</p>
                        <h3 className="text-2xl font-bold text-white">Protección Total</h3>
                    </div>
                    <div className="bg-brand-green px-4 py-2 rounded-lg text-white font-bold text-center">
                        <span className="block text-xs uppercase opacity-80">Desde</span>
                        $500
                    </div>
                </div>
             </div>
             {/* Decorative blob */}
             <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand-green/30 rounded-full blur-3xl -z-10"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;