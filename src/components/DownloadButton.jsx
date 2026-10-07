import { useState } from 'react'
import { CheckCircle2, Download, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'

export default function DownloadButton({ app, className = '', variant = 'primary' }) {
  const [status, setStatus] = useState('idle')
  const unavailable = app.apkUrl === '#'

  const handleClick = (event) => {
    if (unavailable) {
      event.preventDefault()
      setStatus('soon')
      window.setTimeout(() => setStatus('idle'), 2800)
      return
    }

    setStatus('loading')
    window.setTimeout(() => setStatus('done'), 700)
  }

  const styles =
    variant === 'secondary'
      ? 'bg-slate-950 text-white hover:bg-slate-800'
      : 'bg-yellow-400 text-slate-950 hover:bg-yellow-300'

  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <motion.a
        whileTap={{ scale: 0.98 }}
        href={app.apkUrl}
        onClick={handleClick}
        className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-lg px-5 py-3 text-sm font-extrabold shadow-lg shadow-slate-950/10 transition ${styles}`}
        aria-label={`Descargar ${app.name}`}
      >
        {status === 'loading' ? <Loader2 className="h-5 w-5 animate-spin" /> : <Download className="h-5 w-5" />}
        {status === 'done' ? 'Descarga iniciada' : `Descargar ${app.name}`}
        {status === 'done' && <CheckCircle2 className="h-5 w-5" />}
      </motion.a>
      {status === 'soon' && (
        <p className="text-sm font-semibold text-yellow-700">El enlace de descarga estará disponible próximamente.</p>
      )}
    </div>
  )
}
