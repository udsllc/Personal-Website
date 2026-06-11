import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { films } from '../data/content'

function FilmCard({ film, index }) {
  return (
    <motion.div
      className="bg-surface border border-border rounded-lg overflow-hidden flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      {film.src ? (
        <video className="w-full" controls preload="metadata" playsInline>
          <source src={film.src} type="video/mp4" />
        </video>
      ) : film.bts ? (
        <div className="relative group">
          <img
            src={film.bts}
            alt={`${film.title} — BTS`}
            className="w-full h-56 object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-200" />
          <p className="absolute bottom-2 left-3 font-mono text-xs text-white/50">BTS</p>
        </div>
      ) : null}

      <div className="p-5 flex flex-col gap-3 flex-1">
        <div>
          <div className="flex items-baseline gap-3">
            <h3 className="font-mono font-semibold text-text">{film.title}</h3>
            {film.year && <span className="font-mono text-xs text-muted">{film.year}</span>}
          </div>
          {film.subtitle && <p className="text-muted text-sm mt-1">{film.subtitle}</p>}
        </div>

        {film.url && (
          <a
            href={film.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs text-accent border border-accent/30 hover:border-accent px-3 py-1.5 rounded transition-colors duration-200 self-start"
          >
            Watch <ExternalLink size={12} />
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Films() {
  const animation = useScrollAnimation()

  return (
    <section id="films" className="py-24 md:py-32 px-6 scroll-mt-20 bg-surface/30">
      <div className="max-w-6xl mx-auto">
        <div ref={animation.ref}>
          <motion.div initial={animation.initial} animate={animation.animate} transition={animation.transition}>
            <p className="font-mono text-accent text-sm mb-2">// 05</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">Films</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {films.map((film, i) => (
              <FilmCard key={film.title} film={film} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
