import { ArrowRight } from 'lucide-react'
import { driverBenefits } from '../config/data'

export default function DriversSection() {
  return (
    <section id="conductores-info" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="grid gap-4 md:grid-cols-3">
            {driverBenefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-lg bg-white p-6 shadow-sm">
                <Icon className="h-8 w-8 text-blue-700" />
                <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-wider text-blue-700">Conductores</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
              Forma parte del proceso de validación
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              RAPIGO PRO está orientada a conductores de taxis y otros servicios de transporte que desean recibir solicitudes y participar en un ecosistema más organizado.
            </p>
            <a href="#conductores" className="mt-7 inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-slate-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-slate-800">
              Ver RAPIGO PRO
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
