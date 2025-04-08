import React from 'react';
import { Metadata } from 'next';
import { Inter, Heebo } from 'next/font/google';
import './globals.css';

// Define fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const heebo = Heebo({ subsets: ['hebrew'], variable: '--font-heebo' });

// Define metadata
export const metadata: Metadata = {
  title: 'מספרה ביתא | שירותי עיצוב שיער מקצועיים',
  description: 'מספרה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
  keywords: 'מספרה, עיצוב שיער, תספורת, צבע שיער, טיפולי שיער, מספרה בישראל',
  openGraph: {
    title: 'מספרה ביתא | שירותי עיצוב שיער מקצועיים',
    description: 'מספרה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!',
    url: 'https://misparabeta.co.il',
    siteName: 'מספרה ביתא',
    locale: 'he_IL',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'מספרה ביתא',
      },
    ],
  },
};

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="he" dir="rtl" className={`${inter.variable} ${heebo.variable}`}>
      <body className="bg-secondary-50 min-h-screen font-heebo">
        <div className="glass-container">
          <header className="neumorphic-header">
            <div className="container mx-auto px-4 py-6">
              <nav className="flex justify-between items-center">
                <div className="logo neumorphic-logo">
                  <h1 className="text-2xl font-bold text-primary-600">מספרה ביתא</h1>
                </div>
                <div className="nav-links hidden md:flex space-x-reverse space-x-6">
                  <a href="/" className="nav-link">דף הבית</a>
                  <a href="/services" className="nav-link">שירותים</a>
                  <a href="/gallery" className="nav-link">גלריה</a>
                  <a href="/about" className="nav-link">אודות</a>
                  <a href="/contact" className="nav-link">צור קשר</a>
                </div>
                <div className="md:hidden">
                  <button className="neumorphic-button p-2" aria-label="תפריט">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
                <div className="hidden md:block">
                  <button className="neumorphic-button-accent">
                    הזמן תור
                  </button>
                </div>
              </nav>
            </div>
          </header>

          <main className="container mx-auto px-4 py-8">
            {children}
          </main>

          <footer className="corporate-footer mt-auto">
            <div className="container mx-auto px-4 py-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4">מספרה ביתא</h3>
                  <p className="text-gray-600">מספרה מוביל המספק שירות מקצועי ואיכותי. הזמינו תור עוד היום!</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">שעות פעילות</h3>
                  <ul className="text-gray-600">
                    <li>ראשון - חמישי: 9:00 - 20:00</li>
                    <li>שישי: 9:00 - 14:00</li>
                    <li>שבת: סגור</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4">צור קשר</h3>
                  <ul className="text-gray-600">
                    <li>טלפון: 03-1234567</li>
                    <li>כתובת: רחוב הראשי 123, תל אביב</li>
                    <li>דוא"ל: info@misparabeta.co.il</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500">
                <p>© {new Date().getFullYear()} מספרה ביתא. כל הזכויות שמורות.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}