import './Carousel.css'
import { useEffect, useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'

function useCardsPerView() {
  const getValue = () => {
    if (typeof window === 'undefined') return 3
    const w = window.innerWidth
    if (w < 700) return 1
    if (w < 1040) return 2
    return 3
  }
  const [cardsPerView, setCardsPerView] = useState(getValue)

  useEffect(() => {
    const onResize = () => setCardsPerView(getValue())
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return cardsPerView
}

export default function Carousel({ items, renderItem, viewAllLabel, viewAllHref = '#' }) {
  const cardsPerView = useCardsPerView()
  const maxIndex = Math.max(0, items.length - cardsPerView)
  const [index, setIndex] = useState(0)
  const centerSlot = Math.floor(cardsPerView / 2)
  const carouselRef = useRef(null)

  useEffect(() => {
    setIndex((i) => Math.min(i, maxIndex))
  }, [maxIndex])

  const step = 100 / cardsPerView
  const next = () => setIndex((i) => Math.min(i + 1, maxIndex))
  const prev = () => setIndex((i) => Math.max(i - 1, 0))

  const handleDragEnd = (_, info) => {
    // Google velocity-aware gesture threshold
    if (info.offset.x < -40 || info.velocity.x < -300) {
      next()
    } else if (info.offset.x > 40 || info.velocity.x > 300) {
      prev()
    }
  }

  // Keyboard navigation support
  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    }
  }

  // Number of pagination positions
  const totalDots = maxIndex + 1

  return (
    <div
      className="carousel"
      ref={carouselRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      role="region"
      aria-label="Interactive carousel"
    >
      <div className="carousel__viewport">
        <motion.div
          className="carousel__drag-layer"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.16}
          onDragEnd={handleDragEnd}
        >
          <div
            className="carousel__track"
            style={{
              transform: `translateX(-${index * step}%)`,
              // Google Material Design 3 Emphasized Motion Easing
              transition: 'transform 0.65s cubic-bezier(0.2, 0.0, 0, 1.0)',
            }}
          >
            {items.map((it, i) => {
              const isCentered = i - index === centerSlot
              return (
                <div
                  className="carousel__slide"
                  key={it.id}
                  style={{ flex: `0 0 ${step}%` }}
                >
                  <motion.div
                    className={`carousel__slide-google-wrap ${isCentered ? 'carousel__slide--focal' : 'carousel__slide--side'}`}
                    animate={{
                      scale: isCentered ? 1.03 : 0.96,
                      opacity: isCentered ? 1 : 0.88,
                      y: isCentered ? -4 : 0,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.2, 0.0, 0, 1.0],
                    }}
                  >
                    {renderItem(it, i, isCentered)}
                  </motion.div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>

      {/* Google Material Dynamic Pill Pagination Indicators */}
      {totalDots > 1 && (
        <div className="carousel__indicators" aria-label="Slide indicators">
          {Array.from({ length: totalDots }).map((_, dotIdx) => {
            const isActive = dotIdx === index
            return (
              <button
                key={dotIdx}
                type="button"
                className={`carousel__pill ${isActive ? 'carousel__pill--active' : ''}`}
                onClick={() => setIndex(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
                aria-current={isActive ? 'true' : 'false'}
              >
                <motion.span
                  className="carousel__pill-fill"
                  layout
                  transition={{
                    type: 'spring',
                    stiffness: 400,
                    damping: 30,
                  }}
                />
              </button>
            )
          })}
        </div>
      )}

      {/* Google Material Navigation Controls with Ripple & Hover Physics */}
      <div className="carousel__controls">
        <motion.button
          className="carousel__arrow"
          onClick={prev}
          disabled={index === 0}
          aria-label="Previous slide"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 450, damping: 24 }}
        >
          <span className="carousel__arrow-ripple" />
          <ArrowLeft size={18} />
        </motion.button>

        {viewAllLabel && (
          <motion.a
            href={viewAllHref}
            className="carousel__view-all"
            whileHover={{ x: 3 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            {viewAllLabel}
          </motion.a>
        )}

        <motion.button
          className="carousel__arrow"
          onClick={next}
          disabled={index === maxIndex}
          aria-label="Next slide"
          whileHover={{ scale: 1.08, y: -2 }}
          whileTap={{ scale: 0.92 }}
          transition={{ type: 'spring', stiffness: 450, damping: 24 }}
        >
          <span className="carousel__arrow-ripple" />
          <ArrowRight size={18} />
        </motion.button>
      </div>
    </div>
  )
}
