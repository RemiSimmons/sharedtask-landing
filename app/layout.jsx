import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SharedTask - Stop Group Text Chaos | Simple Event Planning',
  description: 'Simple event planning tool that stops group text chaos. Coordinate tasks, potlucks, and volunteers with one link. Free 14-day trial. No signup needed.',
  authors: [{ name: 'Remi Simmons', url: 'https://www.remisimmons.com' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#4A90E2',
  openGraph: {
    title: 'SharedTask - Stop Group Text Chaos',
    description: 'Simple event planning tool that stops group text chaos. Coordinate tasks, potlucks, and volunteers with one link. Free 14-day trial. No signup needed.',
    url: 'https://sharedtask.ai',
    siteName: 'SharedTask',
    images: [
      {
        url: 'https://sharedtask.ai/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SharedTask - Simple Event Planning Tool',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SharedTask - Stop Group Text Chaos',
    description: 'Simple event planning tool that stops group text chaos. Coordinate tasks, potlucks, and volunteers with one link. Free 14-day trial. No signup needed.',
    images: ['https://sharedtask.ai/og-image.png'],
  },
  alternates: {
    canonical: 'https://sharedtask.ai/',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://sharedtask.ai/" />
        
        {/* Schema.org structured data - SoftwareApplication */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "SharedTask",
              "applicationCategory": "ProductivityApplication",
              "operatingSystem": "Web Browser",
              "description": "Simple event planning and task coordination tool that replaces chaotic group chats",
              "url": "https://sharedtask.ai",
              "screenshot": "https://sharedtask.ai/screenshot.png",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "1000",
                "bestRating": "5"
              },
              "offers": [
                {
                  "@type": "Offer",
                  "name": "Free Plan",
                  "price": "0",
                  "priceCurrency": "USD"
                },
                {
                  "@type": "Offer",
                  "name": "Basic Plan",
                  "price": "2.99",
                  "priceCurrency": "USD",
                  "billingDuration": "P1M"
                },
                {
                  "@type": "Offer",
                  "name": "Pro Plan",
                  "price": "9.99",
                  "priceCurrency": "USD",
                  "billingDuration": "P1M"
                }
              ],
              "creator": {
                "@type": "Person",
                "name": "Remi Simmons",
                "url": "https://www.remisimmons.com"
              }
            })
          }}
        />
        
        {/* Schema.org structured data - Organization */}
        <script 
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SharedTask",
              "url": "https://sharedtask.ai",
              "logo": "https://sharedtask.ai/logo.png",
              "description": "SharedTask simplifies group event planning by replacing chaotic group chats with organized, shareable task lists.",
              "foundingDate": "2024",
              "founder": {
                "@type": "Person",
                "name": "Remi Simmons",
                "url": "https://www.remisimmons.com"
              },
              "sameAs": [
                "https://www.remisimmons.com"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "support@sharedtask.ai",
                "contactType": "Customer Support",
                "availableLanguage": "English"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}







