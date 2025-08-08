'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface TypewriterEffectProps {
  words: string[]
  className?: string
  cursorClassName?: string
  typeSpeed?: number
  deleteSpeed?: number
  delayBetweenWords?: number
  loop?: boolean
}

export function TypewriterEffect({
  words,
  className,
  cursorClassName,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true
}: TypewriterEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [isWaiting, setIsWaiting] = useState(false)

  useEffect(() => {
    if (words.length === 0) return

    const currentWord = words[currentWordIndex]
    
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false)
        if (loop || currentWordIndex < words.length - 1) {
          setIsDeleting(true)
        }
      }, delayBetweenWords)
      
      return () => clearTimeout(waitTimer)
    }

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting characters
        setCurrentText(currentWord.substring(0, currentText.length - 1))
        
        if (currentText.length === 1) {
          setIsDeleting(false)
          setCurrentWordIndex((prev) => {
            if (loop) {
              return (prev + 1) % words.length
            } else {
              return Math.min(prev + 1, words.length - 1)
            }
          })
        }
      } else {
        // Typing characters
        setCurrentText(currentWord.substring(0, currentText.length + 1))
        
        if (currentText.length === currentWord.length - 1) {
          setIsWaiting(true)
        }
      }
    }, isDeleting ? deleteSpeed : typeSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, isWaiting, currentWordIndex, words, typeSpeed, deleteSpeed, delayBetweenWords, loop])

  return (
    <div className={cn('font-mono', className)}>
      <span>{currentText}</span>
      <motion.span
        className={cn(
          'inline-block w-0.5 h-[1em] ml-1 bg-current',
          cursorClassName
        )}
        animate={{ opacity: [1, 0] }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
    </div>
  )
}

// Alternative simpler typewriter without deleting
export function SimpleTypewriter({
  text,
  className,
  speed = 100,
  delay = 0
}: {
  text: string
  className?: string
  speed?: number
  delay?: number
}) {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, currentIndex === 0 ? delay : speed)

      return () => clearTimeout(timer)
    }
    return
  }, [currentIndex, text, speed, delay])

  return (
    <span className={cn('font-mono', className)}>
      {displayText}
      {currentIndex < text.length && (
        <motion.span
          className="inline-block w-0.5 h-[1em] ml-1 bg-accent-green"
          animate={{ opacity: [1, 0] }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />
      )}
    </span>
  )
}