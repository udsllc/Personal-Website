import SectionHeader from './SectionHeader'
import { personal } from '../data/content'

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <SectionHeader number="// 01" title="About Me" />
        <div className="max-w-2xl">
          <div className="bg-surface border border-border rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
              <span className="w-3 h-3 rounded-full bg-red-500/80" />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
              <span className="ml-2 font-mono text-muted text-xs">about.txt</span>
            </div>
            <div className="p-5 font-mono text-sm leading-relaxed">
              <p className="text-accent mb-3">$ cat about.txt</p>
              <p className="text-text whitespace-pre-wrap">{personal.bio}</p>
              <p className="text-muted mt-4">$ <span className="animate-pulse">▊</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
