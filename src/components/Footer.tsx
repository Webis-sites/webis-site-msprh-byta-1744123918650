'use client';

import React, { useState } from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  return (
    <footer dir="rtl" className={clsx(
      'bg-gradient-to-b from-gray-800 to-gray-900 text-white',
      'border-t border-primary/20',
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-start"
            >
              <h2 className="text-2xl font-bold text-primary">מספרה ביתא</h2>
              <div className="h-1 w-20 bg-primary mt-2 rounded-full"></div>
            </motion.div>
            <p className="text-gray-300 mt-4">
              המספרה המובילה לעיצוב שיער ברמה הגבוהה ביותר. אנו מתמחים בתספורות, צביעות, ועיצובים מודרניים לכל סוגי השיער.
            </p>
            <div className="flex space-x-4 space-x-reverse mt-6">
              <SocialButton icon={<FaFacebook />} href="https://facebook.com" label="פייסבוק" />
              <SocialButton icon={<FaInstagram />} href="https://instagram.com" label="אינסטגרם" />
              <SocialButton icon={<FaWhatsapp />} href="https://wa.me/972123456789" label="וואטסאפ" />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white relative">
              ניווט מהיר
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </h3>
            <nav className="flex flex-col space-y-2">
              <FooterLink href="/">דף הבית</FooterLink>
              <FooterLink href="/services">שירותים</FooterLink>
              <FooterLink href="/gallery">גלריה</FooterLink>
              <FooterLink href="/booking">הזמנת תור</FooterLink>
              <FooterLink href="/about">אודות</FooterLink>
              <FooterLink href="/contact">צור קשר</FooterLink>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white relative">
              צור קשר
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </h3>
            <div className="space-y-3">
              <ContactItem icon={<FaPhone />} text="054-123-4567" href="tel:+972541234567" />
              <ContactItem icon={<FaEnvelope />} text="info@beta-salon.co.il" href="mailto:info@beta-salon.co.il" />
              <ContactItem icon={<FaMapMarkerAlt />} text="רחוב הרצל 123, תל אביב" href="https://maps.google.com" />
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-medium text-white">שעות פעילות</h4>
              <p className="text-gray-300 mt-2">ראשון - חמישי: 9:00 - 20:00</p>
              <p className="text-gray-300">שישי: 9:00 - 14:00</p>
              <p className="text-gray-300">שבת: סגור</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white relative">
              הישארו מעודכנים
              <div className="h-1 w-12 bg-primary mt-2 rounded-full"></div>
            </h3>
            <p className="text-gray-300">
              הירשמו לניוזלטר שלנו וקבלו עדכונים על מבצעים, טרנדים חדשים וטיפים לטיפוח השיער.
            </p>
            <form onSubmit={handleSubscribe} className="mt-4">
              <div className="relative glassmorphism rounded-lg overflow-hidden p-1 backdrop-blur-sm bg-white/5 border border-white/10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="האימייל שלך"
                  className="w-full px-4 py-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="absolute left-1 top-1 bottom-1 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-all duration-300 neumorphic-button"
                >
                  הרשמה
                </button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 mt-2"
                >
                  תודה! נרשמת בהצלחה לניוזלטר שלנו.
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm text-center md:text-right">
            © {new Date().getFullYear()} מספרה ביתא. כל הזכויות שמורות.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 space-x-reverse text-sm text-gray-400">
              <li><a href="/terms" className="hover:text-primary transition-colors duration-300">תנאי שימוש</a></li>
              <li><a href="/privacy" className="hover:text-primary transition-colors duration-300">מדיניות פרטיות</a></li>
              <li><a href="/accessibility" className="hover:text-primary transition-colors duration-300">נגישות</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialButton: React.FC<{ icon: React.ReactNode; href: string; label: string }> = ({ icon, href, label }) => (
  <motion.a
    href={href}
    aria-label={label}
    target="_blank"
    rel="noopener noreferrer"
    className="neumorphic-social-button w-10 h-10 rounded-full flex items-center justify-center bg-gray-700 text-white hover:text-primary transition-all duration-300"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
  >
    {icon}
  </motion.a>
);

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <motion.a
    href={href}
    className="text-gray-300 hover:text-primary transition-colors duration-300 inline-block"
    whileHover={{ x: 5 }}
  >
    {children}
  </motion.a>
);

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; href: string }> = ({ icon, text, href }) => (
  <a
    href={href}
    className="flex items-center space-x-3 space-x-reverse text-gray-300 hover:text-primary transition-colors duration-300"
  >
    <div className="text-primary">{icon}</div>
    <span>{text}</span>
  </a>
);

export default Footer;