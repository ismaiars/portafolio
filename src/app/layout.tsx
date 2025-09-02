import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { Analytics } from '@/components/analytics'
import { SkipNav } from '@/components/skip-nav'
import PWAManager from '@/components/pwa'
import { cn } from '@/lib/utils'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Ismael Salazar - Desarrollador Web',
    template: '%s | Ismael Salazar'
  },
  description: 'Convierto café en código y problemas en soluciones digitales ☕️→💻 | Especialista en crear experiencias web que realmente funcionan 🚀',
  keywords: [
    'Ismael Salazar',
    'Desarrollador Web',
    'Web Developer',
    'Node.js',
    'Python',
    'Next.js',
    'React',
    'TypeScript',
    'JavaScript',
    'Web Development',
    'Frontend',
    'Backend',
    'Programador'
  ],
  authors: [{ name: 'Ismael Salazar', url: 'https://ismael-salazar-iars.vercel.app' }],
  creator: 'Ismael Salazar',
  publisher: 'Ismael Salazar',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ismael-salazar-iars.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'es-MX': '/es',
      'en-US': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://ismael-salazar-iars.vercel.app',
    siteName: 'Ismael Salazar Portfolio',
    title: 'Ismael Salazar - Desarrollador Web',
    description: 'Convierto café en código y problemas en soluciones digitales ☕️→💻 | Especialista en crear experiencias web que realmente funcionan 🚀',
    images: [
      {
        url: 'https://ismael-salazar-iars.vercel.app/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Ismael Salazar - Desarrollador Web',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ismael Salazar - Desarrollador Web',
    description: 'Convierto café en código y problemas en soluciones digitales ☕️→💻 | Especialista en crear experiencias web que realmente funcionan 🚀',
    images: ['https://ismael-salazar-iars.vercel.app/og-image.png'],
    creator: '@ismaiars',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  category: 'technology',
  classification: 'Portfolio Website',
  other: {
    'application-name': 'Ismael Salazar Portfolio',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-title': 'Ismael Salazar',
    'msapplication-tooltip': 'Ismael Salazar - Desarrollador Web Portfolio',
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#0a0e14" />
        <meta name="msapplication-TileColor" content="#0a0e14" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="ga-tracking-id" content={process.env.NEXT_PUBLIC_GA_ID || ''} />
        
        {/* WhatsApp and Social Media specific meta tags */}
        <meta property="og:image:secure_url" content="https://ismael-salazar-iars.vercel.app/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content="https://ismael-salazar-iars.vercel.app/og-image.png" />
        <meta property="og:image:alt" content="Ismael Salazar - Desarrollador Web" />
        
        {/* PWA Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icons/icon-192x192.svg" />
        
        {/* Cache busting meta tags */}
        <meta httpEquiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
        <meta httpEquiv="Pragma" content="no-cache" />
        <meta httpEquiv="Expires" content="0" />
        <meta name="cache-control" content="no-cache" />
        <meta name="expires" content="0" />
        <meta name="pragma" content="no-cache" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof document !== 'undefined') {
                const title = document.querySelector('title');
                if (title) {
                  title.setAttribute('data-es', 'Ismael Salazar - Desarrollador Web');
                  title.setAttribute('data-en', 'Ismael Salazar - Web Developer');
                }
              }
            `,
          }}
        />
      </head>
      <body
        className={cn(
          'min-h-screen bg-terminal-bg font-sans antialiased',
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SkipNav />
          <div className="relative flex min-h-screen flex-col">
            <div id="main-content" className="flex-1">{children}</div>
          </div>
          <Analytics />
          <PWAManager />
        </ThemeProvider>
      </body>
    </html>
  )
}