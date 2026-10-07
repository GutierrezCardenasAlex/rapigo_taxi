import { Eye, FileCheck2, ShieldCheck, UsersRound } from 'lucide-react'

const items = [
  { title: 'Identificación', text: 'Datos visibles y ordenados para reducir incertidumbre en cada servicio.', icon: Eye },
  { title: 'Registro', text: 'Base preparada para validar conductores y vehículos dentro del proceso.', icon: FileCheck2 },
  { title: 'Confianza', text: 'Una experiencia que prioriza información clara para pasajeros y conductores.', icon: UsersRound },
]

export default function SecuritySection() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-lg bg-blue-700 p-6 text-white sm:p-8 lg:p-10">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <ShieldCheck className="h-11 w-11 text-yellow-300" />
              <h2 className="mt-5 text-3xl font-black tracking-normal sm:text-4xl">Seguridad, registro y tecnología trabajando juntos</h2>
              <p className="mt-5 leading-8 text-blue-50">
                RAPIGO busca ofrecer un transporte más seguro, moderno y organizado a través de herramientas digitales y procesos de control progresivos.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {items.map(({ title, text, icon: Icon }) => (
                <article key={title} className="rounded-lg bg-white/10 p-5">
                  <Icon className="h-7 w-7 text-yellow-300" />
                  <h3 className="mt-4 font-black">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-blue-50">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
