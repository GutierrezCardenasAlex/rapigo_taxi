import { MapPin, Navigation2, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function PhoneMockup({ title = 'RAPIGO', label = 'Plataforma activa', items = [], dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.55 }}
      className="mx-auto w-full max-w-[270px]"
    >
      <div className="rounded-[2rem] border-[10px] border-slate-950 bg-slate-950 shadow-2xl shadow-blue-950/25">
        <div className={`overflow-hidden rounded-[1.25rem] ${dark ? 'bg-slate-900 text-white' : 'bg-white text-slate-950'}`}>
          <div className="flex items-center justify-between px-4 py-3 text-xs font-bold">
            <span>9:41</span>
            <span className="h-1.5 w-16 rounded-full bg-current/20" />
            <span>5G</span>
          </div>
          <div className="px-4 pb-5">
            <div className={`rounded-2xl p-4 ${dark ? 'bg-blue-600' : 'bg-blue-700 text-white'}`}>
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-yellow-300">{label}</p>
                  <h3 className="text-2xl font-black tracking-normal">{title}</h3>
                </div>
                <ShieldCheck className="h-7 w-7 text-yellow-300" />
              </div>
              <div className="h-28 rounded-xl bg-white/15 p-3">
                <div className="mb-3 flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-yellow-300 text-slate-950">
                    <MapPin className="h-4 w-4" />
                  </span>
                  <div className="h-2 flex-1 rounded-full bg-white/50" />
                </div>
                <div className="ml-4 h-10 border-l-2 border-dashed border-white/35" />
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-blue-700">
                    <Navigation2 className="h-4 w-4" />
                  </span>
                  <div className="h-2 flex-1 rounded-full bg-white/50" />
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              {items.map((item) => (
                <div key={item} className={`rounded-xl border p-3 ${dark ? 'border-white/10 bg-white/5' : 'border-slate-200 bg-slate-50'}`}>
                  <p className="text-sm font-bold">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
