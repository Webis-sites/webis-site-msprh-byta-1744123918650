"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaScissors, FaPaintBrush, FaSprayCan, FaSpa, FaClock, FaShekelSign } from 'react-icons/fa';

// Define service categories and their details
const serviceCategories = [
  {
    id: 'haircuts',
    title: 'תספורות',
    icon: <FaScissors className="text-2xl" />,
    description: 'תספורות מקצועיות לכל סוגי השיער והסגנונות',
    image: 'https://images.unsplash.com/photo-1560066984-138dadb4c035',
    services: [
      { name: 'תספורת נשים', duration: 60, price: 180, description: 'תספורת מלאה כולל שמפו, מסכה וסטיילינג' },
      { name: 'תספורת גברים', duration: 45, price: 120, description: 'תספורת מדויקת עם מכונה ומספריים' },
      { name: 'תספורת ילדים', duration: 30, price: 90, description: 'תספורת עדינה ומהירה לילדים עד גיל 12' },
      { name: 'תספורת פוני', duration: 15, price: 50, description: 'עיצוב ותיקון פוני בלבד' },
    ],
  },
  {
    id: 'styling',
    title: 'עיצוב שיער',
    icon: <FaPaintBrush className="text-2xl" />,
    description: 'עיצוב שיער מקצועי לכל אירוע ולכל יום',
    image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df',
    services: [
      { name: 'פן', duration: 45, price: 120, description: 'פן מקצועי לכל אורך שיער' },
      { name: 'תסרוקת ערב', duration: 90, price: 250, description: 'תסרוקת מורכבת לאירועים מיוחדים' },
      { name: 'תסרוקת כלה', duration: 120, price: 400, description: 'תסרוקת כלה מפוארת כולל ניסיון מקדים' },
      { name: 'החלקה ברזילאית', duration: 180, price: 800, description: 'החלקה מקצועית לשיער מתולתל ומקורזל' },
    ],
  },
  {
    id: 'coloring',
    title: 'צבע',
    icon: <FaSprayCan className="text-2xl" />,
    description: 'צביעת שיער מקצועית בשיטות מתקדמות',
    image: 'https://images.unsplash.com/photo-1554519515-242161756769',
    services: [
      { name: 'צבע שורשים', duration: 60, price: 200, description: 'צביעת שורשים בלבד' },
      { name: 'צבע מלא', duration: 90, price: 300, description: 'צביעה מלאה לכל אורך השיער' },
      { name: 'גוונים והבהרות', duration: 120, price: 400, description: 'הבהרות ותוספת גוונים בשיער' },
      { name: 'בלונד מלא', duration: 180, price: 600, description: 'הבהרה מלאה לבלונד בהיר' },
    ],
  },
  {
    id: 'treatments',
    title: 'טיפולים',
    icon: <FaSpa className="text-2xl" />,
    description: 'טיפולי שיער מתקדמים להזנה ושיקום',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
    services: [
      { name: 'טיפול קרטין', duration: 120, price: 500, description: 'טיפול קרטין להחלקה וחיזוק השיער' },
      { name: 'מסכת שיער מקצועית', duration: 45, price: 150, description: 'מסכה מזינה לשיער יבש ופגום' },
      { name: 'טיפול אולטרסוניק', duration: 60, price: 250, description: 'טיפול בטכנולוגיית אולטרסאונד להחדרת לחות' },
      { name: 'טיפול בוטוקס לשיער', duration: 90, price: 450, description: 'טיפול בוטוקס להזנה עמוקה ומראה בריא' },
    ],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

// Service Card Component
const ServiceCard = ({ service }) => {
  return (
    <motion.div 
      className="service-card bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h3 className="text-xl font-bold mb-2 text-gray-800">{service.name}</h3>
      <p className="text-gray-600 mb-3">{service.description}</p>
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center text-gray-700">
          <FaClock className="mr-1" />
          <span>{service.duration} דקות</span>
        </div>
        <div className="flex items-center font-bold text-primary">
          <FaShekelSign className="ml-1" />
          <span>{service.price}</span>
        </div>
      </div>
      <Link href="/booking" className="book-now-btn w-full block">
        הזמן תור
      </Link>
    </motion.div>
  );
};

// Category Section Component
const CategorySection = ({ category, isActive, onClick }) => {
  return (
    <div className="mb-16">
      <motion.div 
        className={`category-header cursor-pointer flex items-center p-4 rounded-xl mb-6 ${
          isActive ? 'bg-primary/10 shadow-neumorphic' : 'bg-white/50 shadow-neumorphic-light'
        }`}
        onClick={onClick}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="icon-container bg-white p-3 rounded-full shadow-neumorphic-sm mr-4">
          {category.icon}
        </div>
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
          <p className="text-gray-600">{category.description}</p>
        </div>
        <div className={`arrow-icon transform transition-transform duration-300 ${isActive ? 'rotate-180' : ''}`}>
          ▼
        </div>
      </motion.div>

      {isActive && (
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="relative h-64 mb-6 rounded-xl overflow-hidden shadow-neumorphic">
            <Image
              src={`${category.image}?w=1200&h=400&fit=crop&crop=focalpoint&auto=format&q=80`}
              alt={category.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
              <div className="p-6">
                <h2 className="text-3xl font-bold text-white">{category.title}</h2>
                <p className="text-white/90">{category.description}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category.services.map((service, index) => (
              <motion.div key={index} variants={itemVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(serviceCategories[0].id);

  const toggleCategory = (categoryId) => {
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  return (
    <div className="services-page rtl bg-secondary min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="page-header glass-card text-center mb-12 p-8 rounded-2xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">השירותים שלנו</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            אנו מציעים מגוון רחב של שירותי עיצוב שיער ברמה הגבוהה ביותר, בהתאמה אישית לצרכים ולסגנון שלך
          </p>
        </motion.div>

        <div className="categories-container">
          {serviceCategories.map((category) => (
            <CategorySection
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => toggleCategory(category.id)}
            />
          ))}
        </div>

        <motion.div 
          className="cta-section glass-card text-center mt-16 p-8 rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-800 mb-4">מוכנים לחוויית שיער חדשה?</h2>
          <p className="text-xl text-gray-600 mb-6">
            הצוות המקצועי שלנו מחכה לעזור לך להשיג את המראה המושלם
          </p>
          <Link href="/booking" className="main-cta-btn">
            הזמן תור עכשיו
          </Link>
        </motion.div>
      </div>
    </div>
  );
}