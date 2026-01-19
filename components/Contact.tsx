import React, { useState } from 'react';
import { Phone, Mail, Clock, Send, MapPin, ArrowRight } from 'lucide-react';
import { CONTACT_INFO } from '../constants';

const Contact: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitting');
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Info Column */}
            <div className="lg:col-span-5 space-y-12">
                <div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-brand-dark mb-6 tracking-tight">Hablemos</h2>
                    <p className="text-xl text-gray-500 font-light leading-relaxed">
                        ¿Problemas de plagas? La solución empieza con un mensaje. Atención prioritaria las 24 horas.
                    </p>
                </div>

                <div className="space-y-8">
                    <ContactItem 
                        icon={Phone} 
                        title="Llamada Directa" 
                        content={CONTACT_INFO.phone} 
                        href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} 
                    />
                    <ContactItem 
                        icon={Mail} 
                        title="Correo Electrónico" 
                        content={CONTACT_INFO.email} 
                        href={`mailto:${CONTACT_INFO.email}`} 
                    />
                    <ContactItem 
                        icon={Clock} 
                        title="Disponibilidad" 
                        content={`${CONTACT_INFO.schedule} - Respuesta < 30 min`} 
                    />
                    <ContactItem 
                        icon={MapPin} 
                        title="Base Operativa" 
                        content="Mérida, Yucatán y Riviera Maya" 
                    />
                </div>
            </div>

            {/* Form Column */}
            <div className="lg:col-span-7">
                <div className="bg-brand-gray rounded-[2.5rem] p-8 md:p-12 shadow-sm">
                    <h3 className="text-2xl font-bold text-brand-dark mb-8">Solicitar Diagnóstico</h3>
                    
                    {formStatus === 'success' ? (
                        <div className="bg-white p-8 rounded-3xl text-center shadow-sm py-16">
                            <div className="w-16 h-16 bg-green-100 text-brand-green rounded-full flex items-center justify-center mx-auto mb-4">
                                <Send size={32} />
                            </div>
                            <p className="font-bold text-2xl text-brand-dark mb-2">¡Mensaje Recibido!</p>
                            <p className="text-gray-500 mb-6">Un especialista revisará tu caso en breve.</p>
                            <button 
                                onClick={() => setFormStatus('idle')}
                                className="text-brand-green font-bold hover:underline"
                            >
                                Enviar nueva solicitud
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <InputGroup label="Nombre" id="name" placeholder="Tu nombre completo" type="text" />
                                <InputGroup label="Teléfono" id="phone" placeholder="10 dígitos" type="tel" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-bold text-brand-dark mb-2 ml-2">Servicio Requerido</label>
                                <div className="relative">
                                    <select 
                                        id="service" 
                                        className="w-full px-6 py-4 bg-white border-0 rounded-2xl focus:ring-2 focus:ring-brand-green shadow-sm outline-none transition-all text-gray-700 appearance-none"
                                    >
                                        <option>Selecciona el tipo de plaga...</option>
                                        <option>Cucarachas</option>
                                        <option>Termitas</option>
                                        <option>Roedores</option>
                                        <option>Preventivo General</option>
                                        <option>Negocio / Comercial</option>
                                        <option>Otro</option>
                                    </select>
                                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-brand-dark mb-2 ml-2">Detalles</label>
                                <textarea 
                                    id="message" 
                                    rows={4} 
                                    className="w-full px-6 py-4 bg-white border-0 rounded-2xl focus:ring-2 focus:ring-brand-green shadow-sm outline-none transition-all text-gray-700 resize-none"
                                    placeholder="¿Dónde viste la plaga? ¿Hace cuánto tiempo?"
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                disabled={formStatus === 'submitting'}
                                className="w-full bg-brand-dark text-white font-bold py-5 rounded-2xl hover:bg-brand-green transition-all duration-300 flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-green-900/20 disabled:opacity-70 disabled:cursor-not-allowed transform hover:-translate-y-1"
                            >
                                {formStatus === 'submitting' ? (
                                    'Procesando...'
                                ) : (
                                    <>Hablar con un especialista <ArrowRight size={20} /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>

        </div>
      </div>
    </section>
  );
};

const ContactItem: React.FC<{icon: React.ElementType, title: string, content: string, href?: string}> = ({ icon: Icon, title, content, href }) => (
    <div className="flex items-center gap-4 group">
        <div className="w-14 h-14 bg-white border border-gray-100 rounded-2xl flex items-center justify-center text-brand-dark group-hover:bg-brand-yellow group-hover:border-transparent transition-colors duration-300 shadow-sm">
            <Icon size={24} />
        </div>
        <div>
            <h4 className="font-bold text-brand-dark text-lg">{title}</h4>
            {href ? (
                <a href={href} className="text-gray-500 hover:text-brand-green transition-colors font-medium">{content}</a>
            ) : (
                <p className="text-gray-500 font-medium" dangerouslySetInnerHTML={{ __html: content }}></p>
            )}
        </div>
    </div>
);

const InputGroup: React.FC<{label: string, id: string, placeholder: string, type: string}> = ({ label, id, placeholder, type }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-bold text-brand-dark mb-2 ml-2">{label}</label>
        <input 
            type={type} 
            id={id} 
            required 
            className="w-full px-6 py-4 bg-white border-0 rounded-2xl focus:ring-2 focus:ring-brand-green shadow-sm outline-none transition-all text-gray-700 placeholder-gray-300"
            placeholder={placeholder}
        />
    </div>
);

export default Contact;