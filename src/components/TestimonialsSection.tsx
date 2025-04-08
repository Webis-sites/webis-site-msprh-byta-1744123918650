'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteRight, FaStar, FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import clsx from 'clsx';

interface Testimonial {
  id: number;
  name: string;
  rating: number;
  text: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'רונית לוי',
    rating: 5,
    text: 'המספרה הזו פשוט מדהימה! התסרוקת שקיבלתי הייתה בדיוק מה שרציתי. הצוות מקצועי ואדיב, והאווירה נעימה ומזמינה. אני ממליצה בחום!',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 2,
    name: 'יוסי כהן',
    rating: 5,
    text: 'שירות מעולה ומקצועי! הספר הבין בדיוק את הסגנון שחיפשתי והתוצאה הייתה מושלמת. המחירים הוגנים והמקום נקי ומטופח. אחזור בהחלט!',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 3,
    name: 'מיכל אברהם',
    rating: 4,
    text: 'חוויה נהדרת במספרה הביתית הזו! האווירה אינטימית ונעימה, והספר מקצועי ומקשיב. קיבלתי המון מחמאות על התספורת החדשה שלי!',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 4,
    name: 'דוד שמעוני',
    rating: 5,
    text: 'מקום מקסים עם שירות אישי ומקצועי! הספר ידע בדיוק איך לטפל בשיער שלי ולתת לי את המראה שרציתי. ממליץ בחום לכל מי שמחפש מספרה איכותית!',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  },
  {
    id: 5,
    name: 'אורלי גולן',
    rating: 5,
    text: 'פשוט מושלם! הגעתי עם תמונה של התספורת שרציתי והתוצאה הייתה אפילו יותר טובה ממה שציפיתי. הצוות מקצועי, סבלני ונעים. בהחלט המספרה הטובה ביותר באזור!',
    image: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying]);
  
  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(prevIndex => 
      (prevIndex + 1) % testimonials.length
    );
  };
  
  const handleDotClick = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };
  
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <FaStar 
        key={i} 
        className={clsx(
          "inline-block",
          i < rating ? "text-primary" : "text-gray-300"
        )}
      />
    ));
  };

  return (
    <section className="py-16 bg-secondary/30 backdrop-blur-md relative overflow-hidden" dir="rtl">
      <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-0"></div>
      
      {/* Glassmorphism container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-gray-800">מה הלקוחות שלנו אומרים</h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            אנו גאים להעניק חוויית שירות מעולה ללקוחותינו. הנה כמה מהחוויות שלקוחותינו שיתפו איתנו.
          </p>
        </div>
        
        {/* Testimonials carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Neumorphic card container */}
          <div className="bg-white rounded-2xl p-6 md:p-10 shadow-[20px_20px_60px_#d9d9d9,-20px_-20px_60px_#ffffff] relative overflow-hidden">
            <div className="absolute top-6 right-8 text-primary opacity-20">
              <FaQuoteRight size={60} />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8"
              >
                {testimonials[currentIndex].image && (
                  <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0">
                    <div className="w-full h-full rounded-full overflow-hidden border-2 border-primary/30 shadow-lg">
                      <img 
                        src={testimonials[currentIndex].image} 
                        alt={testimonials[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                )}
                
                <div className="flex-1 text-center md:text-right">
                  <div className="mb-3">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                  <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>
                  <h4 className="font-semibold text-xl text-gray-800">
                    {testimonials[currentIndex].name}
                  </h4>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation controls */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="הביקורת הקודמת"
              >
                <FaChevronRight />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={clsx(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === currentIndex 
                        ? "bg-primary w-6" 
                        : "bg-gray-300 hover:bg-primary/50"
                    )}
                    aria-label={`עבור לביקורת ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-white shadow-[5px_5px_10px_#d9d9d9,-5px_-5px_10px_#ffffff] text-primary hover:bg-primary hover:text-white transition-all duration-300"
                aria-label="הביקורת הבאה"
              >
                <FaChevronLeft />
              </button>
            </div>
          </div>
          
          {/* Corporate-style trust indicators */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { label: 'לקוחות מרוצים', value: '500+' },
              { label: 'שנות ניסיון', value: '15+' },
              { label: 'מעצבי שיער', value: '8' },
              { label: 'זוכי פרסים', value: '12' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm border border-white/50"
              >
                <div className="font-bold text-2xl text-primary">{stat.value}</div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;