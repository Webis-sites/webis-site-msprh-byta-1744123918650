'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt3 } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';
import { BsCalendarCheck } from 'react-icons/bs';
import clsx from 'clsx';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'ראשי', href: '#' },
    { name: 'שירותים', href: '#services' },
    { name: 'גלריה', href: '#gallery' },
    { name: 'מחירון', href: '#prices' },
    { name: 'צור קשר', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={clsx(
        'fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300 rtl',
        scrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-header py-2' 
          : 'bg-white/60 backdrop-blur-sm py-4',
        className
      )}
      dir="rtl"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a href="#" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-l from-primary to-primary-dark bg-clip-text text-transparent">
                מספרה ביתא
              </span>
            </a>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 space-x-reverse">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 mx-1 text-gray-700 hover:text-primary transition-colors rounded-lg text-sm font-medium neumorphic-link"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Book Now Button - Desktop */}
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="#booking"
              className="neumorphic-button glassmorphism-button flex items-center px-5 py-2 rounded-full bg-gradient-to-l from-primary to-primary-dark text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <BsCalendarCheck className="ml-2" />
              <span>קבע תור עכשיו</span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <motion.button
              onClick={toggleMenu}
              className="p-2 rounded-full neumorphic-button text-gray-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isOpen ? 'סגור תפריט' : 'פתח תפריט'}
            >
              {isOpen ? (
                <IoClose className="w-6 h-6 text-primary" />
              ) : (
                <HiOutlineMenuAlt3 className="w-6 h-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glassmorphism-panel bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-b-2xl mx-4 mt-2 overflow-hidden"
          >
            <div className="flex flex-col py-4 px-2">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className="text-gray-700 hover:text-primary hover:bg-gray-50/50 py-3 px-4 rounded-lg text-center font-medium transition-colors"
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div 
                className="mt-4 px-4"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <a
                  href="#booking"
                  className="neumorphic-button glassmorphism-button flex items-center justify-center w-full px-5 py-3 rounded-full bg-gradient-to-l from-primary to-primary-dark text-white font-medium shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  <BsCalendarCheck className="ml-2" />
                  <span>קבע תור עכשיו</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;