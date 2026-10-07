import { Building2, CarTaxiFront, ClipboardCheck, ShieldCheck } from 'lucide-react'

const steps = [
  { title: 'Registro', text: 'Identificación de conductores y vehículos vinculados al ecosistema.', icon: ClipboardCheck },
  { title: 'Coordinación', text: 'Proceso de implementación con la Alcaldía dentro de iniciativas relacionadas con Taxi Seguro.', icon: Building2 },
  { title: 'Control', text: 'Mayor orden para fortalecer la confianza del servicio urbano.', icon: ShieldCheck },
]

export default function TaxiSeguro() {
  return (
    <section id="taxi-seguro" className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-yellow-400 px-3 py-1 text-xs font-black uppercase tracking-wider text-slate-950">
              <CarTaxiFront className="h-4 w-4" />
              Taxi Seguro
            </span>
            <h2 className="mt-5 text-3xl font-black tracking-normal sm:text-4xl">Implementación responsable para Potosí</h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              RAPIGO se encuentra en proceso de implementación y coordinación con la Alcaldía dentro de iniciativas relacionadas con Taxi Seguro.
            </p>
            <p className="mt-4 leading-7 text-slate-400">
              La comunicación de esta etapa se presenta de forma institucionalmente responsable: RAPIGO no se muestra como aplicación oficial gubernamental, sino como una plataforma en coordinación para fortalecer registro, identificación y control.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {steps.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/[0.06] p-5">
                <span className="grid h-11 w-11 place-items-center rounded-lg bg-blue-600 text-white">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-black">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
