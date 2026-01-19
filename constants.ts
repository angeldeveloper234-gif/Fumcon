import { Bug, SprayCan, ShieldCheck, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { ServiceItem, Testimonial, NavLink, MethodItem } from './types';

export const COLORS = {
  primary: '#2D8C3C',
  secondary: '#FBC02D',
  text: '#212121',
  white: '#FFFFFF'
};

export const CONTACT_INFO = {
  phone: "+52 999 123 4567",
  whatsapp: "+52 999 123 4567",
  email: "contacto@fumigaexpert.com",
  schedule: "24/7"
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Métodos', href: '#metodos' },
  { label: 'Promociones', href: '#promociones' },
  { label: 'Opiniones', href: '#testimonios' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contacto', href: '#contacto' },
];

export const PESTS_LIST: string[] = [
  "Cucarachas", "Hormigas", "Termitas", "Mosquitos", "Arañas", "Alacranes", "Garrapatas", "Ratas", "Ratones"
];

export const METHODS: MethodItem[] = [
  {
    title: "Aspersión",
    description: "Aplicación líquida perimetral para barreras químicas efectivas.",
    icon: SprayCan
  },
  {
    title: "Gel Activo",
    description: "Cebos de alta atracción para control focalizado de cucarachas y hormigas.",
    icon: Bug
  },
  {
    title: "Nebulización",
    description: "Microgotas que alcanzan áreas difíciles y espacios aéreos.",
    icon: Clock // Representing efficiency/coverage
  },
  {
    title: "Polvos Residuales",
    description: "Tratamiento de grietas y hendiduras para protección duradera.",
    icon: ShieldCheck
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "María Fernández",
    rating: 5,
    text: "Excelente servicio. Tenía un problema grave de hormigas en la cocina y lo resolvieron en la primera visita. Muy amables y puntuales."
  },
  {
    id: 2,
    name: "Carlos Méndez",
    rating: 5,
    text: "Contraté el servicio para mi restaurante. Me entregaron certificado COFEPRIS y todo en regla. La inspección fue muy detallada."
  },
  {
    id: 3,
    name: "Ana Solís",
    rating: 5,
    text: "Rápidos y profesionales. Llegaron en la noche por una urgencia de alacranes. Totalmente recomendados para familias con mascotas."
  }
];

export const COVERAGE_AREAS = [
  "Mérida", "Cancún", "Playa del Carmen", "Tulum", "Zonas Aledañas"
];