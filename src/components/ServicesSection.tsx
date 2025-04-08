'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaScissors, FaSprayCan, FaPalette, FaLeaf, FaMagic, FaGem } from 'react-icons/fa';
import Image from 'next/image';
import clsx from 'clsx';

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  image: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, price, image, icon }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={clsx(
        "relative overflow-hidden rounded-2xl transition-all duration-300",
        "bg-white/80 backdrop-blur-md border border-white/20",
        "shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)]",
        "hover:shadow-[8px_8px_20px_rgba(0,0,0,0.1),-8px_-8px_20px_rgba(255,255,255,0.9)]"
      )}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div 
          className="absolute bottom-0 right-0 p-4 bg-primary/80 text-white rounded-tl-2xl backdrop-blur-sm"
          style={{ direction: 'rtl' }}
        >
          <p className="font-bold text-lg">{price}</p>
        </div>
      </div>

      <div className="p-6" style={{ direction: 'rtl' }}>
        <div className="flex items-center mb-3">
          <div className="text-primary mr-3 text-2xl">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600 mb-4">{description}</p>
        
        <motion.button
          className={clsx(
            "w-full py-2 px-4 rounded-lg text-center font-medium transition-all",
            "bg-secondary/10 text-primary border border-primary/20",
            "hover:bg-primary hover:text-white",
            "shadow-[3px_3px_6px_rgba(0,0,0,0.1),-3px_-3px_6px_rgba(255,255,255,0.7)]",
            "active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),inset_-2px_-2px_5px_rgba(255,255,255,0.5)]"
          )}
          whileTap={{ scale: 0.98 }}
        >
          הזמן תור
        </motion.button>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services: ServiceCardProps[] = [
    {
      title: "תספורת נשים",
      description: "תספורת מקצועית הכוללת שטיפה, עיצוב וייבוש לפי מבנה הפנים והסגנון האישי",
      price: "₪180 - ₪250",
      image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      icon: <FaScissors />
    },
    {
      title: "תספורת גברים",
      description: "תספורת מדויקת לגברים, כולל עיצוב זקן וטיפול בשיער הפנים",
      price: "₪80 - ₪120",
      image: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      icon: <FaScissors />
    },
    {
      title: "צביעת שיער",
      description: "צביעה מקצועית בשיטות מתקדמות, כולל אומברה, בליאז' והיילייטס",
      price: "₪250 - ₪500",
      image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      icon: <FaPalette />
    },
    {
      title: "החלקות שיער",
      description: "טיפולי החלקה מתקדמים לכל סוגי השיער, כולל החלקה ברזילאית וקראטין",
      price: "₪600 - ₪1200",
      image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      icon: <FaMagic />
    },
    {
      title: "עיצוב ותסרוקות",
      description: "עיצוב שיער מקצועי לאירועים מיוחדים, חתונות ומסיבות",
      price: "₪200 - ₪350",
      image: "https://images.unsplash.com/photo-1522336572468-97b06e8ef143?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      icon: <FaSprayCan />
    },
    {
      title: "טיפולי שיער",
      description: "טיפולים מתקדמים להזנה, לחות ושיקום שיער פגום או יבש",
      price: "₪150 - ₪300",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
      icon: <FaLeaf />
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-secondary/5 to-secondary/20" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block p-2 px-6 rounded-full bg-white/80 backdrop-blur-sm border border-primary/10 shadow-lg mb-4">
            <h2 className="text-primary text-lg font-medium">השירותים שלנו</h2>
          </div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            טיפולים מקצועיים לשיער שלך
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            במספרה ביתא אנו מציעים מגוון רחב של טיפולי שיער מקצועיים המותאמים אישית לצרכים שלך.
            הצוות המיומן שלנו משתמש במוצרים באיכות הגבוהה ביותר להשגת התוצאות המושלמות.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                type: "spring",
                stiffness: 100
              }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            className={clsx(
              "inline-flex items-center gap-2 py-3 px-8 rounded-full font-bold",
              "bg-primary text-white",
              "shadow-[5px_5px_10px_rgba(0,0,0,0.1),-5px_-5px_10px_rgba(255,255,255,0.8)]",
              "hover:shadow-[8px_8px_15px_rgba(0,0,0,0.15),-8px_-8px_15px_rgba(255,255,255,0.9)]",
              "active:shadow-[inset_3px_3px_5px_rgba(0,0,0,0.2),inset_-3px_-3px_5px_rgba(255,255,255,0.1)]"
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGem className="text-lg" />
            <span>לכל השירותים שלנו</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;