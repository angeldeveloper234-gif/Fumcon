import { Bug, SprayCan, ShieldCheck, MapPin, Phone, Mail, Clock, Rat, Home, Wind, Hexagon, AlertTriangle, Target, CloudFog } from 'lucide-react';
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
  email: "fumcon@outlook.com",
  schedule: "24/7"
};

export const LOGO_LIGHT = "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/logo-afinity.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vbG9nby1hZmluaXR5LnBuZyIsImlhdCI6MTc2OTIwNjMwMCwiZXhwIjoxODAwNzQyMzAwfQ.X39SzxgwHORtyk1eShbaZ5SN8zRv4o6WvJBU6GCWfhA";
export const LOGO_DARK = "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/logo-white.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vbG9nby13aGl0ZS5wbmciLCJpYXQiOjE3NjkyMDYyODAsImV4cCI6MTgwMDc0MjI4MH0.gX7kJVpwC5jfnuytiXoF2vl_cY8CI-XhJL049E6PA-Y";

export const BRANCHES = [
  {
    id: 'merida',
    name: "Mérida",
    phone: "9997379510"
  },
  {
    id: 'cancun',
    name: "Cancún",
    phone: "9985605804"
  },
  {
    id: 'playa',
    name: "Playa del Carmen",
    phone: "9985605804"
  },
  {
    id: 'tulum',
    name: "Tulum",
    phone: "9985605804"
  },
  {
    id: 'chetumal',
    name: "Chetumal",
    phone: "9831003580"
  },
  {
    id: 'bacalar',
    name: "Bacalar",
    phone: "9831003580"
  },
  {
    id: 'morelos',
    name: "José María Morelos",
    phone: "9831003580"
  },
  {
    id: 'carrillo',
    name: "Felipe Carrillo Puerto",
    phone: "9831003580"
  }
];

export const NAV_LINKS: NavLink[] = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Métodos', href: '#metodos' },
  { label: 'Promociones', href: '#promociones' },
  { label: 'Opiniones', href: '#testimonios' },
  { label: 'Cobertura', href: '#cobertura' },
  { label: 'Contacto', href: '#contacto' },
];

export const PESTS_LIST = [
  {
    name: "Cucarachas",
    description: "Eliminación total garantizada.",
    icon: Bug,
    image: "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/cucaracha.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vY3VjYXJhY2hhLmpwZyIsImlhdCI6MTc2OTIwMDY5OCwiZXhwIjoxODAwNzM2Njk4fQ.vrba2_grNgq86ULycxqxYFtCOy44l4oSj8gzEt6nHbE"
  },
  {
    name: "Hormigas",
    description: "Eliminación total garantizada.",
    icon: Bug,
    image: "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/hormigas.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vaG9ybWlnYXMuanBnIiwiaWF0IjoxNzY5MjA0MzM0LCJleHAiOjE4MDA3NDAzMzR9.CKFh6VGr1id9RWg_rXxrKE9MWQSJmFX_PBTnZ69XGh8"
  },
  {
    name: "Termitas",
    description: "Eliminación total garantizada.",
    icon: Home,
    image: "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/termitas.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vdGVybWl0YXMuanBnIiwiaWF0IjoxNzY5MjAwNzU0LCJleHAiOjE4MDA3MzY3NTR9.SvfTGup5HLIPLubYeOCyTdXBQJUZHHpvxfss5ji4PsI"
  },
  {
    name: "Mosquitos",
    description: "Eliminación total garantizada.",
    icon: Wind,
    image: "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/enjambre-mosquitos.avif?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vZW5qYW1icmUtbW9zcXVpdG9zLmF2aWYiLCJpYXQiOjE3NjkyMDA3MDcsImV4cCI6MTgwMDczNjcwN30.BkZIY_o6cW31prGwh_nUfRUMh4nkg75MP7Coqv_rhKM"
  },
  {
    name: "Arañas",
    description: "Eliminación total garantizada.",
    icon: Hexagon,
    image: "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/spider.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vc3BpZGVyLnBuZyIsImlhdCI6MTc2OTIwMDc0NCwiZXhwIjoxODAwNzM2NzQ0fQ.xqmsOdTRLHYopkmFrnlpmkYQyyK7G1A-7xJs6LNzWAI"
  },
  {
    name: "Alacranes",
    description: "Eliminación total garantizada.",
    icon: AlertTriangle,
    image: "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/alacranes.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vYWxhY3JhbmVzLmpwZyIsImlhdCI6MTc2OTIwMDU5NywiZXhwIjoxODAwNzM2NTk3fQ.Wu62ZvypCzAq112Ik8CFfz27j7h1qMyew_bMTkEqjA8"
  },
  {
    name: "Garrapatas",
    description: "Eliminación total garantizada.",
    icon: Target,
    image: "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/garrapata.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vZ2FycmFwYXRhLmpwZyIsImlhdCI6MTc2OTIwMDcxOSwiZXhwIjoxODAwNzM2NzE5fQ.q81Su61d156_Tv0725kMDQhr1RtwzYSnM_2yi0LU1GE"
  },
  {
    name: "Roedores",
    description: "Eliminación total garantizada.",
    icon: Rat,
    image: "https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Fumcon/ratas.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vcmF0YXMuanBnIiwiaWF0IjoxNzY5MjAwNzM0LCJleHAiOjE4MDA3MzY3MzR9.jhRz-KHBKwnrxWBTvywY9yg1_kR1twDGhpGmnHuY3js"
  }
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
  },
  {
    title: "Termonebulización",
    description: "Niebla térmica de alta penetración para control total en áreas de difícil acceso y techos elevados.",
    icon: CloudFog
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
  "Mérida", 
  "Cancún", 
  "Playa del Carmen", 
  "Tulum", 
  "Chetumal", 
  "Bacalar", 
  "José María Morelos", 
  "Felipe Carrillo Puerto"
];