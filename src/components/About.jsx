import { motion } from 'framer-motion'
import { aboutCards } from '../config/data'

export default function About() {
  return (
    <section id="que-es" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-wider text-blue-700">Qué es RAPIGO</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
            Movilidad inteligente para nuestra ciudad
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            RAPIGO es una plataforma tecnológica de transporte creada para conectar pasajeros y conductores de una manera rápida, sencilla y segura.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.06 }}
              className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm"
            >
              <span className="grid h-12 w-12 place-items-center rounded-lg bg-blue-700 text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
