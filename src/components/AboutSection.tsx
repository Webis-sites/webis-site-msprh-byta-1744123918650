'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import clsx from 'clsx';

interface StylistProfile {
  id: string;
  name: string;
  specialty: string;
  image: string;
  bio?: string;
}

interface AboutSectionProps {
  salonName?: string;
  history?: string;
  mission?: string;
  values?: string[];
  stylists: StylistProfile[];
}

const AboutSection: React.FC<AboutSectionProps> = ({
  salonName = 'מספרה ביתא',
  history = 'מספרה ביתא נוסדה בשנת 2010 על ידי צוות של מעצבי שיער מנוסים שחלמו ליצור חוויית עיצוב שיער ייחודית ואישית. מאז הקמתה, המספרה הפכה לשם דבר בתחום עיצוב השיער בישראל.',
  mission = 'המשימה שלנו היא להעניק לכל לקוח חוויה אישית ומקצועית, תוך שימוש בטכניקות החדשניות ביותר ומוצרי השיער האיכותיים ביותר.',
  values = [
    'מקצועיות ללא פשרות',
    'שירות אישי ולבבי',
    'חדשנות מתמדת',
    'אחריות סביבתית',
    'יחס אישי לכל לקוח'
  ],
  stylists = [
    {
      id: '1',
      name: 'רונית כהן',
      specialty: 'מעצבת שיער בכירה',
      image: '/stylists/stylist1.jpg',
      bio: 'רונית היא מעצבת שיער עם ניסיון של 15 שנה בתחום. היא מתמחה בצבעי שיער ייחודיים ותספורות אופנתיות.'
    },
    {
      id: '2',
      name: 'יוסי לוי',
      specialty: 'מומחה לשיער מתולתל',
      image: '/stylists/stylist2.jpg',
      bio: 'יוסי מתמחה בטיפול ועיצוב שיער מתולתל. הוא עבר הכשרות מיוחדות בארץ ובחו"ל בתחום זה.'
    },
    {
      id: '3',
      name: 'מיכל אברהם',
      specialty: 'צבעי שיער וטיפולים משקמים',
      image: '/stylists/stylist3.jpg',
      bio: 'מיכל היא מומחית לצבעי שיער וטיפולים משקמים. היא ידועה ביכולתה ליצור גוונים מדויקים ומחמיאים.'
    },
    {
      id: '4',
      name: 'דניאל ישראלי',
      specialty: 'תספורות גברים ועיצוב זקן',
      image: '/stylists/stylist4.jpg',
      bio: 'דניאל מתמחה בתספורות גברים ועיצוב זקן. הוא משלב טכניקות קלאסיות עם טרנדים עכשוויים.'
    }
  ]
}) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section dir="rtl" className="w-full overflow-hidden bg-secondary text-right">
      {/* Hero Section with Glassmorphism */}
      <div className="relative py-16 px-4 md:px-8 lg:px-16">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/30 z-0"></div>
        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="flex flex-col items-end"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold mb-6 text-gray-800 border-r-4 border-primary pr-4"
            >
              אודות {salonName}
            </motion.h2>
            
            <motion.div 
              variants={itemVariants}
              className="w-full md:w-3/4 bg-white/80 backdrop-blur-md rounded-2xl p-8 shadow-neumorphic mb-12"
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">הסיפור שלנו</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">{history}</p>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">המשימה שלנו</h3>
              <p className="text-lg leading-relaxed text-gray-700 mb-6">{mission}</p>
              
              <h3 className="text-2xl font-semibold mb-4 text-primary">הערכים שלנו</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                {values.map((value, index) => (
                  <motion.li 
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-2 text-gray-700"
                  >
                    <span className="inline-block w-3 h-3 rounded-full bg-primary"></span>
                    <span>{value}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Team Section with Neumorphic Cards */}
      <div className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-secondary to-secondary/80">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl font-bold mb-12 text-gray-800 text-center"
          >
            <span className="border-b-4 border-primary pb-2">הצוות שלנו</span>
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stylists.map((stylist) => (
              <motion.div
                key={stylist.id}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl shadow-neumorphic overflow-hidden transform transition-transform duration-300"
              >
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src={stylist.image}
                    alt={stylist.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">{stylist.bio}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{stylist.name}</h3>
                  <p className="text-primary font-medium mb-3">{stylist.specialty}</p>
                  
                  <button 
                    className="w-full py-2 px-4 bg-secondary hover:bg-primary text-gray-800 hover:text-white rounded-lg transition-colors duration-300 shadow-button-neumorphic active:shadow-button-neumorphic-pressed active:translate-y-0.5 transform font-medium"
                    aria-label={`קבע תור עם ${stylist.name}`}
                  >
                    קבע תור
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center"
          >
            <a 
              href="#contact" 
              className="inline-block py-3 px-8 bg-white text-primary hover:bg-primary hover:text-white border border-primary rounded-full transition-colors duration-300 shadow-neumorphic hover:shadow-neumorphic-hover text-lg font-semibold"
            >
              הצטרפו לצוות שלנו
            </a>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Corporate-style Statistics Section */}
      <div className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-3xl font-bold mb-12 text-gray-800 text-center"
          >
            למה לבחור ב{salonName}?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '12+', label: 'שנות ניסיון', icon: '✂️' },
              { number: '5,000+', label: 'לקוחות מרוצים', icon: '😊' },
              { number: '25+', label: 'פרסים ותעודות הוקרה', icon: '🏆' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center p-8 rounded-xl bg-secondary/5 border-b-2 border-primary"
              >
                <span className="text-4xl mb-4">{stat.icon}</span>
                <h3 className="text-4xl font-bold text-primary mb-2">{stat.number}</h3>
                <p className="text-lg text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-secondary/20 to-primary/20 backdrop-blur-sm shadow-lg text-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-4">הבטחה שלנו לאיכות</h3>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              אנו מתחייבים להעניק לכם את חווית עיצוב השיער הטובה ביותר, עם תוצאות מושלמות ושירות ללא דופי. אם אינכם מרוצים מהתוצאה, אנו נתקן זאת ללא עלות נוספת.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;