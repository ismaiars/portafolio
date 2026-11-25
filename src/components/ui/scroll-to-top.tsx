'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronUp } from 'lucide-react'
import { useScrollToTop } from '@/hooks/use-scroll-to'

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const scrollToTop = useScrollToTop()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300)
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  if (!isMounted) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.85 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          aria-label="Scroll to top"
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-[#151a26]/90 backdrop-blur-md border border-[#262e40] hover:border-[#00ff9c] text-[#00ff9c] shadow-lg flex items-center justify-center transition-colors"
        >
          <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}
