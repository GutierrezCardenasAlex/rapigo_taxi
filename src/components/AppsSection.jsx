import { Check } from 'lucide-react'
import { downloads } from '../config/downloads'
import { appCards } from '../config/data'
import DownloadButton from './DownloadButton'
import PhoneMockup from './PhoneMockup'

export default function AppsSection() {
  const downloadById = {
    pasajeros: downloads.rapigo,
    conductores: downloads.rapigoPro,
  }

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-black uppercase tracking-wider text-blue-700">Ecosistema RAPIGO</p>
          <h2 className="mt-3 text-3xl font-black tracking-normal text-slate-950 sm:text-4xl">
            Dos aplicaciones. Un mismo ecosistema.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {appCards.map((app) => {
            const dark = app.tone === 'dark'
            return (
              <article
                id={app.id}
                key={app.title}
                className={`grid gap-8 rounded-lg p-6 shadow-sm sm:p-8 ${dark ? 'bg-slate-950 text-white' : 'bg-white text-slate-950'} lg:grid-cols-[1fr_0.78fr]`}
              >
                <div>
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-black tracking-wider ${dark ? 'bg-yellow-400 text-slate-950' : 'bg-blue-100 text-blue-800'}`}>
                    {app.tag}
                  </span>
                  <h3 className="mt-5 text-3xl font-black tracking-normal">{app.title}</h3>
                  <p className={`mt-4 leading-7 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{app.text}</p>

                  <ul className="mt-6 grid gap-3">
                    {app.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm font-semibold">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-yellow-400 text-slate-950">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <DownloadButton app={downloadById[app.id]} variant={dark ? 'primary' : 'secondary'} className="mt-8" />
                </div>

                <div className="self-center">
                  <PhoneMockup title={app.title} label={app.tag} items={app.mockupItems} dark={dark} />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
