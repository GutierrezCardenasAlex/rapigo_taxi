import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { navLinks } from '../config/data'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/88 text-white backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2 font-black tracking-normal">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-yellow-400 text-slate-950">
            <Zap className="h-5 w-5 fill-current" />
          </span>
          <span className="text-xl">RAPIGO</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-semibold text-white/78 transition hover:text-yellow-300">
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#descargar"
          className="hidden rounded-lg bg-yellow-400 px-4 py-2 text-sm font-extrabold text-slate-950 transition hover:bg-yellow-300 md:inline-flex"
        >
          Descargar App
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 md:hidden"
          aria-label="Abrir menú"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
