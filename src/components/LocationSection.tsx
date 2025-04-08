'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaDirections, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import clsx from 'clsx';

interface BusinessHour {
  day: string;
  hours: string;
  isToday: boolean;
}

export default function LocationSection() {
  // Hebrew RTL setup
  React.useEffect(() => {
    document.documentElement.dir = 'rtl';
  }, []);

  // Business location coordinates (Tel Aviv example)
  const position: [number, number] = [32.0853, 34.7818];
  
  // Business hours data
  const businessHours: BusinessHour[] = [
    { day: 'ראשון', hours: '09:00 - 20:00', isToday: new Date().getDay() === 0 },
    { day: 'שני', hours: '09:00 - 20:00', isToday: new Date().getDay() === 1 },
    { day: 'שלישי', hours: '09:00 - 20:00', isToday: new Date().getDay() === 2 },
    { day: 'רביעי', hours: '09:00 - 20:00', isToday: new Date().getDay() === 3 },
    { day: 'חמישי', hours: '09:00 - 20:00', isToday: new Date().getDay() === 4 },
    { day: 'שישי', hours: '09:00 - 14:00', isToday: new Date().getDay() === 5 },
    { day: 'שבת', hours: 'סגור', isToday: new Date().getDay() === 6 },
  ];

  // Contact information
  const contactInfo = {
    address: 'רחוב דיזנגוף 123, תל אביב',
    phone: '03-1234567',
    email: 'info@mysalon.co.il',
  };

  return (
    <section className="location-section py-16 px-4 md:px-8 bg-secondary text-gray-800 font-sans">
      <div className="container mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-primary"
        >
          המיקום שלנו
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Map Section */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-[400px] w-full rounded-2xl overflow-hidden shadow-neumorphic"
          >
            <div className="h-full w-full glassmorphism rounded-2xl">
              <MapContainer 
                center={position} 
                zoom={15} 
                style={{ height: '100%', width: '100%', borderRadius: '1rem' }}
                zoomControl={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    מספרה ביתא <br /> {contactInfo.address}
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="flex flex-col gap-8"
          >
            {/* Business Hours */}
            <div className="glassmorphism p-6 rounded-2xl">
              <div className="flex items-center gap-3 mb-4">
                <FaClock className="text-primary text-xl" />
                <h3 className="text-xl font-bold">שעות פעילות</h3>
              </div>
              <div className="overflow-hidden rounded-xl shadow-neumorphic">
                <table className="w-full text-right">
                  <tbody>
                    {businessHours.map((item, index) => (
                      <tr 
                        key={index} 
                        className={clsx(
                          "transition-colors",
                          item.isToday ? "bg-primary bg-opacity-10 font-bold" : 
                            index % 2 === 0 ? "bg-white bg-opacity-40" : "bg-white bg-opacity-20"
                        )}
                      >
                        <td className="py-2 px-4 border-b border-gray-200 border-opacity-20">{item.day}</td>
                        <td className="py-2 px-4 border-b border-gray-200 border-opacity-20">{item.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Contact Info */}
            <div className="glassmorphism p-6 rounded-2xl">
              <h3 className="text-xl font-bold mb-4">פרטי התקשרות</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center shadow-neumorphic">
                    <FaMapMarkerAlt className="text-primary" />
                  </div>
                  <span>{contactInfo.address}</span>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center shadow-neumorphic">
                    <FaPhone className="text-primary" />
                  </div>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center shadow-neumorphic">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="mt-6 w-full py-3 px-6 bg-primary text-white rounded-xl shadow-neumorphic-button flex items-center justify-center gap-2 transition-all hover:shadow-neumorphic-button-hover"
              >
                <FaDirections />
                <span>קבל הוראות הגעה</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}