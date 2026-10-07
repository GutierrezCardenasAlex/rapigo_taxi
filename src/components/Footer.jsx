import { Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 text-sm text-slate-600 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div className="flex items-center gap-2 font-black text-slate-950">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-700 text-white">
            <Zap className="h-5 w-5 fill-current" />
          </span>
          RAPIGO
        </div>
        <p>RAPIGO y RAPIGO PRO. Plataforma de movilidad en implementación para Potosí.</p>
      </div>
    </footer>
  )
}
