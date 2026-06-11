import { motion } from 'framer-motion'
import { Briefcase, GraduationCap } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { experience } from '../data/content'

function TimelineEntry({ entry, index }) {
  const Icon = entry.type === 'education' ? GraduationCap : Briefcase
  return (
    <motion.div
      className="relative pl-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      {/* Vertical line */}
      <div className="absolute left-3 top-6 bottom-0 w-px bg-border" />
      {/* Icon dot */}
      <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-surface border-2 border-accent flex items-center justify-center">
        <Icon size={12} className="text-accent" />
      </div>

      <div className="bg-surface border border-border rounded-lg p-5 mb-6 hover:border-accent/40 transition-colors duration-200">
        <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
          <div>
            <h3 className="font-semibold text-text">{entry.title}</h3>
            <p className="text-accent text-sm font-mono">{entry.org}</p>
          </div>
          <span className="font-mono text-muted text-xs bg-bg border border-border px-2 py-1 rounded shrink-0">
            {entry.date}
          </span>
        </div>
        {entry.bullets?.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {entry.bullets.map((b, i) => (
              <li key={i} className="text-muted text-sm flex gap-2">
                <span className="text-accent font-mono shrink-0">—</span>
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Experience() {
  const animation = useScrollAnimation()

  return (
    <section id="experience" className="py-24 md:py-32 px-6 scroll-mt-20 bg-surface/30">
      <div className="max-w-3xl mx-auto">
        <div ref={animation.ref}>
          <motion.div initial={animation.initial} animate={animation.animate} transition={animation.transition}>
            <p className="font-mono text-accent text-sm mb-2">// 02</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">Experience & Education</h2>
          </motion.div>

          {experience.length === 0 ? (
            <div className="border border-border border-dashed rounded-lg p-8 text-center">
              <p className="font-mono text-muted text-sm">
                // LinkedIn content coming soon — paste your URL to populate this section
              </p>
            </div>
          ) : (
            <div className="relative">
              {experience.map((entry, i) => (
                <TimelineEntry key={i} entry={entry} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
