import './globals.css'
import { Metadata } from 'next'
import { ThemeProvider } from 'next-themes'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Mobile App Developer Portfolio',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/fav-icons.svg" />
      </head>

      <body className="bg-background text-foreground  transition-all  duration-500">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
