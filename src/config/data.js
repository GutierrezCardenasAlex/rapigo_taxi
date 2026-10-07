import {
  BadgeCheck,
  CarFront,
  Clock3,
  MapPinned,
  Navigation,
  Phone,
  RadioTower,
  ShieldCheck,
  Smartphone,
  UserCheck,
  WalletCards,
} from 'lucide-react'

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Pasajeros', href: '#pasajeros' },
  { label: 'Conductores', href: '#conductores' },
  { label: 'Taxi Seguro', href: '#taxi-seguro' },
  { label: 'Descargar', href: '#descargar' },
]

export const aboutCards = [
  {
    title: 'Solicita tu viaje',
    description: 'Encuentra y solicita un servicio de transporte desde tu teléfono.',
    icon: Phone,
  },
  {
    title: 'Conductores registrados',
    description: 'Conecta con conductores que forman parte del ecosistema RAPIGO.',
    icon: UserCheck,
  },
  {
    title: 'Tecnología',
    description: 'Una plataforma diseñada para modernizar la experiencia del transporte.',
    icon: RadioTower,
  },
  {
    title: 'Seguridad',
    description:
      'Trabajamos en procesos de identificación, registro y control para fortalecer la seguridad del servicio.',
    icon: ShieldCheck,
  },
]

export const appCards = [
  {
    id: 'pasajeros',
    title: 'RAPIGO',
    tag: 'PARA PASAJEROS',
    text: 'Solicita tu transporte desde tu celular de manera rápida y sencilla.',
    button: 'Descargar RAPIGO',
    tone: 'blue',
    features: [
      'Solicitud de viajes',
      'Ubicación en tiempo real',
      'Seguimiento del servicio',
      'Información del conductor',
      'Historial de viajes',
      'Experiencia sencilla y moderna',
    ],
    icon: Smartphone,
    mockupItems: ['Destino confirmado', 'Conductor asignado', 'Llegada estimada 4 min'],
  },
  {
    id: 'conductores',
    title: 'RAPIGO PRO',
    tag: 'PARA CONDUCTORES',
    text: 'La herramienta para conductores que quieren formar parte del ecosistema RAPIGO.',
    button: 'Descargar RAPIGO PRO',
    tone: 'dark',
    features: [
      'Recibir solicitudes',
      'Gestionar servicios',
      'Navegación',
      'Estado disponible/no disponible',
      'Gestión de viajes',
      'Perfil del conductor',
    ],
    icon: CarFront,
    mockupItems: ['Nuevo servicio cerca', 'Ruta optimizada', 'Perfil en validación'],
  },
]

export const passengerBenefits = [
  { title: 'Viajes simples', description: 'Una experiencia pensada para pedir transporte sin pasos innecesarios.', icon: Clock3 },
  { title: 'Información clara', description: 'Datos del servicio, conductor y seguimiento para viajar con más confianza.', icon: BadgeCheck },
  { title: 'Ciudad conectada', description: 'Tecnología urbana preparada para crecer con nuevas zonas y servicios.', icon: MapPinned },
]

export const driverBenefits = [
  { title: 'Más oportunidades', description: 'Recibe solicitudes desde una plataforma moderna para transporte urbano.', icon: Navigation },
  { title: 'Control de estado', description: 'Administra tu disponibilidad y servicios desde RAPIGO PRO.', icon: CarFront },
  { title: 'Proceso de validación', description: 'Forma parte del registro e identificación del ecosistema RAPIGO.', icon: WalletCards },
]
