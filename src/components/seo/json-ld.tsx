'use client'

import { PersonalInfo } from '@/types'

interface JsonLdProps {
  data: PersonalInfo
}

export function JsonLd({ data }: JsonLdProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: data.name,
    jobTitle: data.title,
    description: data.description,
    url: data.website,
    email: data.email,
    telephone: data.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: data.location
    },
    sameAs: []
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}

// Website structured data
export function WebsiteJsonLd({ url, name, description }: {
  url: string
  name: string
  description: string
}) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    description,
    url,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${url}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string'
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  )
}