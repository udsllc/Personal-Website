import { motion } from 'framer-motion'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { personal, skills } from '../data/content'

export default function About() {
  const animation = useScrollAnimation()

  return (
    <section id="about" className="py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <motion.div ref={animation.ref} initial={animation.initial} animate={animation.animate} transition={animation.transition}>
          <p className="font-mono text-accent text-sm mb-2">// 01</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">About Me</h2>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            {/* Terminal window */}
            <div className="bg-surface border border-border rounded-lg overflow-hidden">
              {/* Terminal chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-muted text-xs">about.txt</span>
              </div>
              {/* Terminal body */}
              <div className="p-5 font-mono text-sm leading-relaxed">
                <p className="text-accent mb-3">$ cat about.txt</p>
                <p className="text-text whitespace-pre-wrap">{personal.bio}</p>
                <p className="text-muted mt-4">$ <span className="animate-pulse">▊</span></p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <p className="font-mono text-muted text-xs mb-4 tracking-widest uppercase">// Technologies</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-xs text-accent border border-accent/30 bg-accent/5 px-3 py-1.5 rounded hover:border-accent/70 hover:bg-accent/10 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
