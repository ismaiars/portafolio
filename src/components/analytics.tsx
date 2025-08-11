'use client'

import { useEffect, Suspense } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Google Analytics tracking ID - will be injected by layout
const getGATrackingId = () => {
  if (typeof window === 'undefined') return undefined
  return document.querySelector('meta[name="ga-tracking-id"]')?.getAttribute('content')
}

// Track page views
export function usePageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const trackingId = getGATrackingId()
    if (trackingId) {
      const url = pathname + searchParams.toString()
      
      // Send page view to Google Analytics
      if (typeof window !== 'undefined' && (window as any).gtag) {
        ;(window as any).gtag('config', trackingId, {
          page_path: url,
        })
      }
    }
  }, [pathname, searchParams])
}

// Track custom events
export function trackEvent({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    ;(window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Page tracking component that uses useSearchParams
function PageTracker() {
  usePageView()
  return null
}

// Analytics component
export function Analytics() {
  const trackingId = getGATrackingId()
  
  if (!trackingId) {
    return null
  }

  return (
    <>
      <Suspense fallback={null}>
        <PageTracker />
      </Suspense>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${trackingId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${trackingId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}