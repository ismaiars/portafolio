'use client'

import { useEffect } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

// Function to get GA tracking ID from meta tag
function getGATrackingId(): string | null {
  if (typeof window !== 'undefined') {
    const metaTag = document.querySelector('meta[name="ga-tracking-id"]')
    return metaTag ? metaTag.getAttribute('content') : null
  }
  return null
}

// Page view tracking
function trackPageView(url: string, trackingId: string) {
  if (typeof window !== 'undefined' && window.gtag && trackingId) {
    window.gtag('config', trackingId, {
      page_path: url,
      send_page_view: true,
    })
  }
}

// Event tracking function
export function trackEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

export function Analytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const trackingId = getGATrackingId()
    if (trackingId && pathname) {
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      trackPageView(url, trackingId)
    }
  }, [pathname, searchParams])

  const trackingId = getGATrackingId()

  if (!trackingId) {
    return null
  }

  return (
    <>
      {/* Google tag (gtag.js) */}
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
              send_page_view: true,
              anonymize_ip: true,
              allow_google_signals: false,
              allow_ad_personalization_signals: false
            });
          `,
        }}
      />
    </>
  )
}