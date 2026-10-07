import { Play, Smartphone } from 'lucide-react'
import { downloads } from '../config/downloads'
import DownloadButton from './DownloadButton'

export default function DownloadSection() {
  return (
    <section id="descargar" className="bg-blue-700 py-20 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-wider text-yellow-300">Disponible para instalación directa</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal sm:text-4xl">Descarga RAPIGO</h2>
            <p className="mt-5 text-lg leading-8 text-blue-50">
              Las aplicaciones ya se encuentran disponibles para instalación y utilización. Actualmente puedes instalarlas directamente mediante APK mientras completamos su publicación oficial en Google Play.
            </p>
          </div>

          <div className="rounded-lg bg-white p-5 text-slate-950 shadow-xl shadow-blue-950/20 sm:p-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <DownloadButton app={downloads.rapigo} />
              <DownloadButton app={downloads.rapigoPro} />
            </div>

            <div className="mt-6 rounded-lg border border-dashed border-slate-300 bg-slate-50 p-5">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-lg bg-slate-950 text-white">
                    <Play className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-black">Google Play</h3>
                    <p className="text-sm text-slate-600">Próximamente disponible en Google Play.</p>
                  </div>
                </div>
                <span className="inline-flex w-fit items-center gap-2 rounded-full bg-yellow-300 px-3 py-1 text-xs font-black text-slate-950">
                  <Smartphone className="h-4 w-4" />
                  Próximamente
                </span>
              </div>
            </div>
            <p className="mt-4 text-sm text-slate-500">
              Los enlaces reales se editan en <strong>src/config/downloads.js</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
