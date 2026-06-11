import { ChevronDown } from 'lucide-react'
import TerminalTyper from './TerminalTyper'
import { personal, typingPhrases } from '../data/content'

export default function Hero() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
    >
      {/* Dot grid background */}
      <div className="dot-grid absolute inset-0 opacity-40 pointer-events-none" />

      {/* Radial fade */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, #0d1117 100%)',
        }}
      />

      {/* Content — two column on desktop, stacked on mobile */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-12 md:gap-16">

        {/* Left: text */}
        <div className="flex-1 text-center md:text-left">
          <p className="font-mono text-muted text-sm mb-4 tracking-widest">
            // hello, world
          </p>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text mb-4 tracking-tight">
            {personal.name}
          </h1>

          <div className="text-xl md:text-2xl mb-6 h-8 flex items-center md:justify-start justify-center">
            <TerminalTyper phrases={typingPhrases} />
          </div>

          <p className="text-muted text-base md:text-lg mb-10 max-w-xl leading-relaxed">
            {personal.tagline}
          </p>

          <div className="flex items-center md:justify-start justify-center gap-4 flex-wrap">
            <button
              onClick={() => scrollTo('#projects')}
              className="bg-accent text-bg font-mono font-medium px-6 py-3 rounded-lg hover:bg-accent-dim transition-colors duration-200 text-sm"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo('#contact')}
              className="border border-accent text-accent font-mono font-medium px-6 py-3 rounded-lg hover:bg-accent/10 transition-colors duration-200 text-sm"
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right: headshot */}
        <div className="shrink-0 flex items-center justify-center">
          <div className="relative">
            {/* Purple glow ring */}
            <div
              className="absolute inset-0 rounded-full blur-2xl opacity-30 scale-110"
              style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)' }}
            />
            {/* Accent border ring */}
            <div className="relative w-48 h-48 md:w-60 md:h-60 rounded-full p-0.5 bg-gradient-to-br from-accent via-accent/50 to-transparent">
              <div className="w-full h-full rounded-full overflow-hidden bg-surface">
                <img
                  src="/headshot.jpg"
                  alt={personal.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce">
        <ChevronDown size={20} />
      </div>
    </section>
  )
}
