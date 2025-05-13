import type { Metadata } from 'next'
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Random User Directory',
  description: 'Browse and search random user profiles',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-page-bg text-gray-900 font-sans">
        {/* Main Content Wrapper */}
        <div className="container mx-auto px-4 py-10 flex-grow">
          {/* Header */}
          <header className="mb-10 text-center">
            <h1 className="text-4xl font-semibold text-secondary ">
              Search For Random Users
            </h1>
            <p className="text-gray-600 mt-2 text-lg">Find and explore random people worldwide</p>
          </header>

          {/* Page Content */}
          {children}
          <SpeedInsights />
        </div>

        {/* Footer */}
        <footer className="bg-light border-t border-gray-300 text-gray-600 text-center py-4">
          <p>© {new Date().getFullYear()} Random User Directory</p>
        </footer>
      </body>
    </html>
  );
}
