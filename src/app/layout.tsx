import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import Analytics from '@/components/analytics'
import PerformanceOptimizer from '@/components/performance-optimizer'
import { LanguageProvider } from '@/lib/language-context'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: {
    default: 'FlowHR - Revolutionary HR Management System | Employee Management Software',
    template: '%s | FlowHR - HR Management System'
  },
  description: 'Transform your HR operations with FlowHR - the most advanced HR management system. Features include employee management, leave tracking, attendance monitoring, payroll, performance reviews, and analytics. Trusted by 1000+ companies worldwide.',
  keywords: [
    'HR management system',
    'Human resources software',
    'Employee management',
    'Leave management',
    'Attendance tracking',
    'Payroll management',
    'Performance management',
    'HR analytics',
    'Workforce management',
    'HRIS',
    'HRM software',
    'Employee portal',
    'HR dashboard',
    'Time tracking',
    'Employee onboarding',
    'HR automation'
  ],
  authors: [{ name: 'FlowHR Team' }],
  creator: 'FlowHR',
  publisher: 'FlowHR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://flowhr-homepage.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FlowHR - Revolutionary HR Management System',
    description: 'Transform your HR operations with FlowHR - the most advanced HR management system. Features include employee management, leave tracking, attendance monitoring, and more.',
    url: 'https://flowhr-homepage.vercel.app',
    siteName: 'FlowHR',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FlowHR - HR Management System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowHR - Revolutionary HR Management System',
    description: 'Transform your HR operations with FlowHR - the most advanced HR management system.',
    images: ['/twitter-image.png'],
    creator: '@flowhr',
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
    google: 'fF5CjwQYDtD0WNpW9hCM-vaJGraaIk4GbtUXqxfHZwQ',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Use favicon.png as the main favicon, 32x32 resolution */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
        {/* Optionally keep .ico for legacy support, but png will be primary */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <Analytics />
        <PerformanceOptimizer />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
