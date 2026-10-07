import { ArrowUp, MessageCircle } from 'lucide-react'
import { downloads } from '../config/downloads'

export default function CTA() {
  return (
    <>
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-yellow-300">RAPIGO está en producción</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal">Transporte urbano más rápido, seguro y organizado.</h2>
          </div>
          <a href="#descargar" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-yellow-400 px-6 py-3 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300">
            Descargar ahora
          </a>
        </div>
      </section>

      <div className="fixed bottom-5 right-4 z-50 flex flex-col gap-3">
        <a
          href={downloads.whatsapp.url}
          target="_blank"
          rel="noreferrer"
          className="grid h-12 w-12 place-items-center rounded-full bg-green-500 text-white shadow-xl shadow-slate-950/20 transition hover:bg-green-400"
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle className="h-6 w-6" />
        </a>
        <a
          href="#inicio"
          className="grid h-12 w-12 place-items-center rounded-full bg-slate-950 text-white shadow-xl shadow-slate-950/20 transition hover:bg-slate-800"
          aria-label="Volver arriba"
        >
          <ArrowUp className="h-6 w-6" />
        </a>
      </div>
    </>
  )
}
