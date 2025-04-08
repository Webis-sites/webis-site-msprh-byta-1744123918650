'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaScissors, FaCalendarAlt, FaGift } from 'react-icons/fa';
import clsx from 'clsx';

interface PromotionCardProps {
  title: string;
  description: string;
  validUntil: string;
  imageSrc: string;
  discount: string;
  icon: React.ReactNode;
}

const PromotionCard: React.FC<PromotionCardProps> = ({
  title,
  description,
  validUntil,
  imageSrc,
  discount,
  icon,
}) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-white/80 backdrop-blur-md border border-white/20 shadow-neumorphic mx-auto max-w-sm h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(200, 0, 255, 0.2)' }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 z-0" />
      
      {/* Discount Badge */}
      <div className="absolute top-4 left-4 bg-primary text-white font-bold py-2 px-4 rounded-full z-10 shadow-lg">
        {discount}
      </div>
      
      <div className="relative z-10 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="text-primary">{icon}</div>
          <div className="text-corporate-gray text-sm flex items-center">
            <FaCalendarAlt className="ml-1" />
            <span>בתוקף עד: {validUntil}</span>
          </div>
        </div>
        
        <div className="mb-4 h-48 overflow-hidden rounded-lg">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
        
        <h3 className="text-xl font-bold text-corporate-blue mb-2 text-right">{title}</h3>
        <p className="text-corporate-gray mb-6 text-right">{description}</p>
        
        <motion.button
          className="w-full bg-primary text-white py-3 px-6 rounded-lg font-bold shadow-neumorphic-button transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50 text-center"
          whileTap={{ scale: 0.97 }}
        >
          הזמינו עכשיו
        </motion.button>
      </div>
    </motion.div>
  );
};

export default function PromotionsSection() {
  const promotions = [
    {
      id: 1,
      title: "מבצע קיץ מיוחד",
      description: "תספורת וטיפול שיער מלא כולל צבע ופן במחיר מיוחד לחודשי הקיץ",
      validUntil: "31.08.2023",
      imageSrc: "https://images.unsplash.com/photo-1560066984-138dadb4c035",
      discount: "30% הנחה",
      icon: <FaScissors size={24} />,
    },
    {
      id: 2,
      title: "חבילת כלה יוקרתית",
      description: "טיפול פנים, איפור, שיער ומניקור לכלה וללווי הכלה במחיר מיוחד",
      validUntil: "31.12.2023",
      imageSrc: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1",
      discount: "20% הנחה",
      icon: <FaGift size={24} />,
    },
    {
      id: 3,
      title: "מבצע לקוחות חדשים",
      description: "טיפול ראשון במחיר מיוחד כולל ייעוץ אישי לסגנון ולטיפוח השיער",
      validUntil: "ללא הגבלה",
      imageSrc: "https://images.unsplash.com/photo-1562322140-8baeececf3df",
      discount: "50% הנחה",
      icon: <FaScissors size={24} />,
    },
  ];

  return (
    <section dir="rtl" className="py-16 px-4 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/5 filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-primary/10 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-corporate-blue mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            מבצעים מיוחדים
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-corporate-gray max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            גלו את המבצעים המיוחדים שלנו לעונה הקרובה. הזדרזו - המבצעים לזמן מוגבל!
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {promotions.map((promo) => (
            <PromotionCard
              key={promo.id}
              title={promo.title}
              description={promo.description}
              validUntil={promo.validUntil}
              imageSrc={promo.imageSrc}
              discount={promo.discount}
              icon={promo.icon}
            />
          ))}
        </div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a 
            href="#all-promotions" 
            className="inline-block bg-white text-primary font-semibold py-3 px-8 rounded-lg shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300"
          >
            לכל המבצעים
          </a>
        </motion.div>
      </div>
    </section>
  );
}