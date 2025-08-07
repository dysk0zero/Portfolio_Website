'use client'

import { useRef, useState, useEffect } from "react";

interface CarouselProps {
    children: React.ReactNode[]
    visibleCount?: number
}

export default function Carousel({ children, visibleCount = 2}: CarouselProps) {
    const containerRef = useRef<HTMLDivElement>(null)
    const startX = useRef<number | null>(null)
    const [cardWidth, setCardWidth] = useState(0)
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
    const firstSlide = containerRef.current?.children[0]
    if (firstSlide instanceof HTMLElement) {
        setCardWidth(firstSlide.offsetWidth)
    }
    }, [children])

    const maxIndex = Math.max(children.length - visibleCount, 0)

    const goPrev = () => setCurrentIndex((i) => Math.max(i-1, 0))
    const goNext = () => setCurrentIndex((i) => Math.max(i+1, maxIndex))

    const onTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX
        startX.current = x
    }

    const onTouchEnd = (e: React.TouchEvent | React.MouseEvent) => {
        if (startX.current == null) return
        const endX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX
        const delta = endX - startX.current

        if (Math.abs(delta) > 50) {
            if (delta < 0) {
                goNext()
            } else {
                goPrev()
            }
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
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * cardWidth}px)` }}
                >
                    {children}
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