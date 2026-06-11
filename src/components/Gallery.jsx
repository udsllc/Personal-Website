import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { gallery } from '../data/content'

function Lightbox({ images, startIndex, onClose }) {
  const [index, setIndex] = useState(startIndex)

  const prev = useCallback(() => setIndex((i) => (i - 1 + images.length) % images.length), [images.length])
  const next = useCallback(() => setIndex((i) => (i + 1) % images.length), [images.length])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, prev, next])

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
        onClick={onClose}
        aria-label="Close"
      >
        <X size={24} />
      </button>

      {images.length > 1 && (
        <>
          <button
            className="absolute left-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); prev() }}
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            className="absolute right-4 text-white/70 hover:text-white transition-colors p-2"
            onClick={(e) => { e.stopPropagation(); next() }}
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>
        </>
      )}

      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index].src}
          alt={images[index].alt}
          className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => e.stopPropagation()}
        />
      </AnimatePresence>

      <div className="absolute bottom-4 font-mono text-xs text-white/40">
        {index + 1} / {images.length}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const animation = useScrollAnimation()
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [lightboxIndex])

  return (
    <section id="gallery" className="py-24 md:py-32 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div ref={animation.ref}>
          <motion.div initial={animation.initial} animate={animation.animate} transition={animation.transition}>
            <p className="font-mono text-accent text-sm mb-2">// 04</p>
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-12">Gallery</h2>
          </motion.div>

          <div className="columns-2 md:columns-3 gap-4 space-y-4">
            {gallery.map((photo, i) => (
              <motion.div
                key={photo.src}
                className="break-inside-avoid overflow-hidden rounded-lg border border-border cursor-pointer group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07, ease: 'easeOut' }}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                {photo.alt && photo.alt !== photo.src && (
                  <p className="font-mono text-xs text-muted px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    {photo.alt}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={gallery}
            startIndex={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </section>
  )
}
