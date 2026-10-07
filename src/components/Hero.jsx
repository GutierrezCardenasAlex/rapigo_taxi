import { ArrowRight, BadgeCheck, Car, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'
import PhoneMockup from './PhoneMockup'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 pt-28 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,rgba(250,204,21,0.16),transparent_30%),linear-gradient(120deg,rgba(29,78,216,0.7),transparent_48%)]" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-white [clip-path:polygon(0_72%,100%_30%,100%_100%,0_100%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-28 pt-10 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-yellow-300/35 bg-yellow-300/12 px-4 py-2 text-xs font-black uppercase tracking-wider text-yellow-200">
            <BadgeCheck className="h-4 w-4" />
            Plataforma en producción
          </span>

          <h1 className="mt-7 max-w-3xl text-5xl font-black leading-[0.98] tracking-normal sm:text-6xl lg:text-7xl">
            RAPIGO
          </h1>
          <p className="mt-4 max-w-2xl text-2xl font-extrabold text-yellow-300 sm:text-3xl">
            Tu viaje. Más rápido. Más seguro. Más RAPIGO.
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">
            Una nueva forma de moverte por la ciudad. RAPIGO conecta pasajeros y conductores a través de una plataforma moderna, segura y pensada para el transporte de nuestra ciudad.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#descargar" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-yellow-400/20 transition hover:bg-yellow-300">
              Descargar RAPIGO
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#conductores" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg border border-white/18 bg-white/10 px-6 py-3 text-sm font-extrabold text-white transition hover:bg-white/15">
              Soy conductor
              <Car className="h-5 w-5" />
            </a>
          </div>

          <div className="mt-8 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-yellow-300" />
              Disponible para instalación directa
            </div>
            <div className="flex items-center gap-2">
              <BadgeCheck className="h-5 w-5 text-yellow-300" />
              Google Play próximamente
            </div>
          </div>
        </motion.div>

        <div className="relative">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/30 blur-3xl" />
          <PhoneMockup title="RAPIGO" label="Viaje en curso" items={['Taxi seguro en implementación', 'Conductor registrado', 'Seguimiento activo']} />
        </div>
      </div>
    </section>
  )
}
