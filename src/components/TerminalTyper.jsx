import { useState, useEffect } from 'react'

const TYPING_SPEED = 80
const DELETING_SPEED = 50
const PAUSE_AFTER_TYPE = 1800
const PAUSE_BEFORE_DELETE = 400

export default function TerminalTyper({ phrases }) {
  const [displayText, setDisplayText] = useState('')
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [phase, setPhase] = useState('typing') // typing | pausing | deleting | waiting

  useEffect(() => {
    const current = phrases[phraseIndex]

    if (phase === 'typing') {
      if (displayText.length < current.length) {
        const t = setTimeout(() => setDisplayText(current.slice(0, displayText.length + 1)), TYPING_SPEED)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setPhase('pausing'), PAUSE_AFTER_TYPE)
        return () => clearTimeout(t)
      }
    }

    if (phase === 'pausing') {
      const t = setTimeout(() => setPhase('deleting'), PAUSE_BEFORE_DELETE)
      return () => clearTimeout(t)
    }

    if (phase === 'deleting') {
      if (displayText.length > 0) {
        const t = setTimeout(() => setDisplayText(displayText.slice(0, -1)), DELETING_SPEED)
        return () => clearTimeout(t)
      } else {
        setPhraseIndex((i) => (i + 1) % phrases.length)
        setPhase('typing')
      }
    }
  }, [displayText, phase, phraseIndex, phrases])

  return (
    <span className="font-mono text-accent">
      {displayText}
      <span className="animate-pulse">_</span>
    </span>
  )
}
