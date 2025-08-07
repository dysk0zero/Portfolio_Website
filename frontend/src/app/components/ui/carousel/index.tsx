'use client'

import { useRef, useState, useEffect } from "react"

interface CarouselProps {
  children: React.ReactNode[]
  visibleCount?: number
}

export default function Carousel({ children, visibleCount = 2 }: CarouselProps) {
  const baseItems = Array.isArray(children) ? children : []
  const clonesBefore = baseItems.slice(-visibleCount)
  const clonesAfter = baseItems.slice(0, visibleCount)
  const allItems = [...clonesBefore, ...baseItems, ...clonesAfter]

  const containerRef = useRef<HTMLDivElement>(null)
  const [cardWidth, setCardWidth] = useState(0)
  const [currentIndex, setCurrentIndex] = useState(visibleCount)
  const [transitionEnabled, setTransitionEnabled] = useState(true)
  const startX = useRef<number | null>(null)

  // Measure slide width
  useEffect(() => {
    const el = containerRef.current?.children[visibleCount] as HTMLElement
    if (el) {
      setCardWidth(el.offsetWidth)
    }
  }, [baseItems.length, visibleCount])

  // Re-enable transition after jump
  useEffect(() => {
    if (!transitionEnabled) {
      const timeout = setTimeout(() => {
        setTransitionEnabled(true)
      }, 20)
      return () => clearTimeout(timeout)
    }
  }, [transitionEnabled])

  // Smooth jump on clone boundary AFTER transition completes
  const onTransitionEnd = () => {
    if (currentIndex >= baseItems.length + visibleCount) {
      setTransitionEnabled(false)
      setCurrentIndex(visibleCount)
    }

    if (currentIndex < visibleCount) {
      setTransitionEnabled(false)
      setCurrentIndex(baseItems.length + visibleCount - 1)
    }
  }

  const goPrev = () => setCurrentIndex((i) => i - 1)
  const goNext = () => setCurrentIndex((i) => i + 1)

  const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
    startX.current = x
  }

  const onTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
    if (startX.current == null) return
    const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX
    const delta = endX - startX.current

    if (Math.abs(delta) > 50) {
      if (delta < 0) {goNext()}
      else {goPrev()}
    }

    startX.current = null
  }

  return (
    <div className="relative w-full">
      <div
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onTouchStart}
        onMouseUp={onTouchEnd}
        className="overflow-hidden"
      >
        <div
          ref={containerRef}
          onTransitionEnd={onTransitionEnd}
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * cardWidth}px)`,
            transition: transitionEnabled ? 'transform 0.3s ease' : 'none',
          }}
        >
          {allItems.map((child, i) => (
            <div key={i} className="min-w-[50%] px-4">
              {child}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={goPrev}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-accent2/30 text-white rounded-lg"
      >
        ←
      </button>
      <button
        onClick={goNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 hover:bg-accent2/30 text-white rounded-lg"
      >
        →
      </button>
    </div>
  )
}
