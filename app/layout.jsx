import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SharedTask.ai - Stop the Group Text Chaos',
  description: 'Organize group activities (potlucks, book clubs, volunteer events, family gatherings) without the chaos. One link. Two clicks. Done.',
  keywords: 'group planning, event organization, potluck organizer, group activities, task management',
  authors: [{ name: 'SharedTask.ai' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#4A90E2',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}


