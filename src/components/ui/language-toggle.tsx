'use client'

import { useState, useEffect } from 'react'
import { Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface LanguageToggleProps {
  className?: string
  size?: 'xs' | 'sm' | 'default'
}

export function LanguageToggle({ className = '', size = 'sm' }: LanguageToggleProps) {
  const [currentLanguage, setCurrentLanguage] = useState('es')
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    // Get saved language preference or default to Spanish
    const savedLanguage = localStorage.getItem('language') || 'es'
    setCurrentLanguage(savedLanguage)
    document.documentElement.setAttribute('lang', savedLanguage)
    // Use setTimeout to ensure DOM is ready and state is updated
    setTimeout(() => updateLanguage(savedLanguage), 0)
  }, [])

  // Update language when currentLanguage changes (except on initial mount)
  useEffect(() => {
    if (isClient && currentLanguage) {
      updateLanguage(currentLanguage)
    }
  }, [currentLanguage, isClient])

  const toggleLanguage = () => {
    const newLang = currentLanguage === 'es' ? 'en' : 'es'
    setCurrentLanguage(newLang)
    localStorage.setItem('language', newLang)
    document.documentElement.setAttribute('lang', newLang)
    // updateLanguage will be called automatically by useEffect when currentLanguage changes
  }

  const updateLanguage = (lang: string) => {
    // Set data-lang attribute for other components to detect language changes
    document.documentElement.setAttribute('data-lang', lang)
    
    const elements = document.querySelectorAll('[data-es], [data-en], [data-es-placeholder], [data-en-placeholder]')
    elements.forEach(element => {
      const text = element.getAttribute(`data-${lang}`)
      const placeholderText = element.getAttribute(`data-${lang}-placeholder`)
      
      if (placeholderText && (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA')) {
        ;(element as HTMLInputElement | HTMLTextAreaElement).placeholder = placeholderText
      } else if (text) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          ;(element as HTMLInputElement | HTMLTextAreaElement).placeholder = text
        } else {
          // Check if element has child elements (like icons)
          const hasChildElements = element.children.length > 0
          if (hasChildElements) {
            // For elements with children, try to find text nodes or spans with data attributes
            const childSpans = element.querySelectorAll('span[data-es], span[data-en]')
            if (childSpans.length > 0) {
              childSpans.forEach(span => {
                const spanText = span.getAttribute(`data-${lang}`)
                if (spanText) span.textContent = spanText
              })
            } else {
              // If no child spans with data attributes, update innerHTML carefully
              const textNodes = element.childNodes
              let hasTextNode = false
              textNodes.forEach(node => {
                if (node.nodeType === Node.TEXT_NODE && node.textContent?.trim()) {
                  node.textContent = text
                  hasTextNode = true
                }
              })
              if (!hasTextNode) {
                element.innerHTML = text
              }
            }
          } else {
            element.textContent = text
          }
        }
      }
    })

    // Update page title
    const title = document.querySelector('title')
    if (title) {
      const titleText = title.getAttribute(`data-${lang}`)
      if (titleText) title.textContent = titleText
    }
  }

  if (!isClient) {
    return null // Avoid hydration mismatch
  }

  return (
    <Button
      variant="outline"
      size={size}
      onClick={toggleLanguage}
      className={`
        flex items-center gap-2 
        
        bg-terminal-surface border-accent-blue 
        text-text-primary hover:bg-accent-blue 
        hover:text-terminal-bg transition-all duration-300 
        font-mono font-semibold
        ${className}
      `}
      aria-label={currentLanguage === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
    >
      <Globe className="w-4 h-4" />
      <span>{currentLanguage.toUpperCase()}</span>
    </Button>
  )
}