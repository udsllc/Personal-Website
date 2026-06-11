import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function SectionHeader({ number, title, className = 'mb-12' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="font-mono text-accent text-sm mb-2">{number}</p>
        <div className="relative inline-block">
          <h2 className="text-3xl md:text-4xl font-bold text-text">{title}</h2>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent rounded-full w-full"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: isInView ? 1 : 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.35 }}
            style={{ transformOrigin: 'left' }}
          />
        </div>
      </motion.div>
    </div>
  )
}
