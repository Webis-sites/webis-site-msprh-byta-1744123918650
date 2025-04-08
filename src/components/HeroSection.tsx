'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface HeroSectionProps {
  className?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  return (
    <section 
      dir="rtl"
      className={clsx(
        'relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center',
        className
      )}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          alt="מספרה ביתא - תמונת רקע"
          layout="fill"
          objectFit="cover"
          priority
          className="brightness-[0.7]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className="glassmorphism-card max-w-3xl mx-auto p-8 sm:p-12 rounded-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              מספרה מוביל בישראל
            </motion.h1>
            
            <motion.p 
              className="text-xl sm:text-2xl text-gray-100 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              חווית לקוח מושלמת בכל ביקור
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <button 
                className="neumorphic-button"
                onClick={() => console.log('Booking appointment')}
                aria-label="קבע תור עכשיו"
              >
                קבע תור עכשיו
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div 
        className="absolute -bottom-16 -left-16 w-64 h-64 rounded-full bg-primary/20 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      />
      <motion.div 
        className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-primary/30 blur-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  );
};

export default HeroSection;