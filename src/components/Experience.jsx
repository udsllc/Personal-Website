import { motion } from 'framer-motion'
import { Briefcase, GraduationCap, Users } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { workExperience, education, affiliations } from '../data/content'

function TimelineEntry({ entry, index, Icon }) {
  return (
    <motion.div
      className="relative pl-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1, ease: 'easeOut' }}
    >
      <div className="absolute left-3 top-6 bottom-0 w-px bg-border" />
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

function SubSection({ label, entries, Icon, animationDelay = 0 }) {
  return (
    <div className="mb-12">
      <h3 className="font-mono text-muted text-xs tracking-widest uppercase mb-6 flex items-center gap-2">
        <Icon size={13} className="text-accent" />
        {label}
      </h3>
      <div className="relative">
        {entries.map((entry, i) => (
          <TimelineEntry key={i} entry={entry} index={i + animationDelay} Icon={Icon} />
        ))}
      </div>
    </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">Background</h2>
          </motion.div>

          <SubSection label="Experience" entries={workExperience} Icon={Briefcase} animationDelay={0} />
          <SubSection label="Education" entries={education} Icon={GraduationCap} animationDelay={3} />
          <SubSection label="Affiliations" entries={affiliations} Icon={Users} animationDelay={5} />
        </div>
      </div>
    </section>
  )
}
