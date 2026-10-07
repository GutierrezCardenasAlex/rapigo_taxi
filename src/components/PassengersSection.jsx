import { passengerBenefits } from '../config/data'

export default function PassengersSection() {
  return (
    <section id="pasajeros-info" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-blue-700">Pasajeros</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">Muévete con más claridad desde tu teléfono</h2>
            <p className="mt-5 leading-8 text-slate-600">
              RAPIGO está pensado para que el pasajero solicite transporte de manera sencilla, vea información útil del servicio y tenga una experiencia moderna desde el primer toque.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {passengerBenefits.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-lg border border-slate-200 bg-slate-50 p-6">
                <Icon className="h-8 w-8 text-blue-700" />
                <h3 className="mt-5 text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
