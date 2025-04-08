'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import clsx from 'clsx';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const ProductsSection: React.FC = () => {
  const [products] = useState<Product[]>([
    {
      id: 1,
      name: "שמפו לשיער מתולתל",
      description: "שמפו איכותי המיועד לשיער מתולתל, מעניק לחות ומונע קשרים",
      price: 89.90,
      image: "/images/curly-shampoo.jpg"
    },
    {
      id: 2,
      name: "מסכת שיער מזינה",
      description: "מסכה עשירה בחומרים מזינים לשיער יבש ופגום",
      price: 119.90,
      image: "/images/hair-mask.jpg"
    },
    {
      id: 3,
      name: "שמן ארגן טהור",
      description: "שמן ארגן טהור להענקת ברק ורכות לכל סוגי השיער",
      price: 149.90,
      image: "/images/argan-oil.jpg"
    },
    {
      id: 4,
      name: "ספריי מעצב שיער",
      description: "ספריי לעיצוב השיער עם אחיזה חזקה ללא הכבדה",
      price: 79.90,
      image: "/images/styling-spray.jpg"
    },
    {
      id: 5,
      name: "קרם לחות לשיער",
      description: "קרם לחות יומי להגנה על השיער מפני נזקי חום וסביבה",
      price: 99.90,
      image: "/images/hair-cream.jpg"
    },
    {
      id: 6,
      name: "סרום לשיער מתולתל",
      description: "סרום מקצועי להגדרת תלתלים ומניעת פריזיות",
      price: 129.90,
      image: "/images/curly-serum.jpg"
    }
  ]);

  return (
    <section className="products-section py-16 px-4 md:px-8 bg-gray-50 rtl" dir="rtl">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
          >
            המוצרים שלנו
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            אנו מציעים מגוון מוצרי שיער איכותיים לטיפוח ועיצוב השיער שלך
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: product.id * 0.1 }}
              whileHover={{ y: -5 }}
              className="product-card relative rounded-xl overflow-hidden"
            >
              <div className="glassmorphism-card bg-white/80 backdrop-blur-md border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4 w-full">
                      <p className="text-white font-medium">{product.name}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 h-20 overflow-hidden">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-gray-800">₪{product.price.toFixed(2)}</span>
                    <div className="flex space-x-2 space-x-reverse">
                      <button 
                        className={clsx(
                          "neumorphic-button flex items-center justify-center px-4 py-2 rounded-lg",
                          "bg-primary text-white font-medium transition-all duration-300",
                          "hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/50",
                          "shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.2),_inset_2px_2px_5px_rgba(255,255,255,0.2)]",
                          "hover:shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.2),_inset_1px_1px_3px_rgba(255,255,255,0.2)]",
                          "active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.2),_inset_-2px_-2px_5px_rgba(255,255,255,0.1)]"
                        )}
                      >
                        <FaShoppingCart className="ml-2" />
                        הוסף לסל
                      </button>
                      <button 
                        className={clsx(
                          "neumorphic-button flex items-center justify-center p-2 rounded-lg",
                          "bg-gray-200 text-gray-700 transition-all duration-300",
                          "hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300",
                          "shadow-[inset_-2px_-2px_5px_rgba(0,0,0,0.1),_inset_2px_2px_5px_rgba(255,255,255,0.5)]",
                          "hover:shadow-[inset_-1px_-1px_3px_rgba(0,0,0,0.1),_inset_1px_1px_3px_rgba(255,255,255,0.3)]",
                          "active:shadow-[inset_2px_2px_5px_rgba(0,0,0,0.1),_inset_-2px_-2px_5px_rgba(255,255,255,0.2)]"
                        )}
                      >
                        <FaInfoCircle />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;