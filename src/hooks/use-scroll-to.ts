'use client'

import { useCallback } from 'react'
import { scrollToElement } from '@/lib/utils'

/**
 * Custom hook for smooth scrolling to elements
 * Provides a reusable function to scroll to any element by ID
 */
export function useScrollTo(offset: number = 80) {
  const scrollTo = useCallback(
    (elementId: string) => {
      scrollToElement(elementId, offset)
    },
    [offset]
  )

  return scrollTo
}

/**
 * Hook for scrolling to top of page
 */
export function useScrollToTop() {
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  return scrollToTop
}