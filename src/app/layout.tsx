import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'Random User Directory',
  description: 'Browse and search random user profiles',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50">
        <div className="container mx-auto px-4 py-8 flex-grow">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 font-playfair">
              Random User Directory
            </h1>
          </header>
          {children}
        </div>
        <footer className="bg-white border-t border-gray-200 text-gray-600 text-center py-4">
          <p>© {new Date().getFullYear()} Random User Directory</p>
        </footer>
      </body>
    </html>
  )
}