import { Building2, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const partners = [
  {
    name: 'Gobierno Autónomo Municipal de Potosí',
    image: '/partners/gobierno-autonomo-potosi.jpeg',
    description: 'Institución vinculada al proceso de coordinación e implementación local.',
    icon: Building2,
  },
  {
    name: 'Tráfico y Vialidad',
    image: '/partners/trafico-vialidad.jpeg',
    description: 'Área relacionada con ordenamiento, control vial y movilidad urbana.',
    icon: ShieldCheck,
  },
]

export default function PartnersSection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-blue-700">Respaldo institucional</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
              Coordinación para una movilidad más organizada
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              RAPIGO fortalece su etapa de implementación junto a actores locales relacionados con seguridad, control vial y movilidad urbana en Potosí.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {partners.map(({ name, image, description, icon: Icon }, index) => (
              <motion.article
                key={name}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08 }}
                className="overflow-hidden rounded-lg border border-slate-200 bg-slate-50 shadow-sm"
              >
                <div className="grid h-44 place-items-center bg-white p-4">
                  <img src={image} alt={name} className="max-h-full max-w-full object-contain" />
                </div>
                <div className="border-t border-slate-200 bg-white p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-blue-700 text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-lg font-black text-slate-950">{name}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
