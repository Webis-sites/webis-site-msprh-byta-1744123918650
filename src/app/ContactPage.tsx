"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for Leaflet marker icon in Next.js
const icon = L.icon({
  iconUrl: '/images/marker-icon.png',
  shadowUrl: '/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  
  // Sample salon location in Israel (Tel Aviv)
  const position: [number, number] = [32.0853, 34.7818];
  
  const onSubmit = async (data: FormData) => {
    setFormStatus('loading');
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // In a real app, you would send the form data to your backend
      console.log('Form submitted:', data);
      
      setFormStatus('success');
      reset();
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      
      // Reset form status after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }
  };

  const businessHours = [
    { day: 'ראשון', hours: '9:00 - 20:00' },
    { day: 'שני', hours: '9:00 - 20:00' },
    { day: 'שלישי', hours: '9:00 - 20:00' },
    { day: 'רביעי', hours: '9:00 - 20:00' },
    { day: 'חמישי', hours: '9:00 - 20:00' },
    { day: 'שישי', hours: '9:00 - 14:00' },
    { day: 'שבת', hours: 'סגור' },
  ];

  return (
    <div className="min-h-screen bg-secondary text-gray-800 py-12 px-4 sm:px-6 lg:px-8 rtl" dir="rtl">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">צור קשר</h1>
          <p className="text-xl max-w-2xl mx-auto">
            אנחנו כאן לענות על כל שאלה. מלא את הטופס או השתמש בפרטי הקשר למטה.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-neumorphic p-8"
          >
            <h2 className="text-2xl font-semibold mb-6">השאר הודעה</h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">שם מלא</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border ${errors.name ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition`}
                  placeholder="הכנס את שמך המלא"
                  {...register('name', { required: 'שם הוא שדה חובה' })}
                />
                {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">אימייל</label>
                <input
                  id="email"
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border ${errors.email ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition`}
                  placeholder="הכנס את כתובת האימייל שלך"
                  {...register('email', { 
                    required: 'אימייל הוא שדה חובה',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'כתובת אימייל לא תקינה'
                    }
                  })}
                />
                {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">טלפון</label>
                <input
                  id="phone"
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border ${errors.phone ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition`}
                  placeholder="הכנס את מספר הטלפון שלך"
                  {...register('phone', { 
                    required: 'טלפון הוא שדה חובה',
                    pattern: {
                      value: /^[0-9]{9,10}$/,
                      message: 'מספר טלפון לא תקין'
                    }
                  })}
                />
                {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>}
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">הודעה</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg bg-secondary border ${errors.message ? 'border-red-500' : 'border-gray-200'} focus:outline-none focus:ring-2 focus:ring-primary/50 transition`}
                  placeholder="כתוב את הודעתך כאן"
                  {...register('message', { required: 'הודעה היא שדה חובה' })}
                ></textarea>
                {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full py-3 px-6 rounded-lg bg-primary text-white font-medium shadow-neumorphic-button hover:shadow-neumorphic-button-hover active:shadow-neumorphic-button-active transition-all duration-300 disabled:opacity-70 backdrop-blur-sm"
              >
                {formStatus === 'loading' ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    שולח...
                  </span>
                ) : 'שלח הודעה'}
              </button>
              
              {formStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-green-50 text-green-800 border border-green-200"
                >
                  ההודעה נשלחה בהצלחה! ניצור איתך קשר בהקדם.
                </motion.div>
              )}
              
              {formStatus === 'error' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-red-50 text-red-800 border border-red-200"
                >
                  אירעה שגיאה בשליחת ההודעה. אנא נסה שוב מאוחר יותר.
                </motion.div>
              )}
            </form>
          </motion.div>
          
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Map */}
            <div className="bg-white rounded-2xl shadow-neumorphic overflow-hidden h-[300px]">
              <MapContainer 
                center={position} 
                zoom={15} 
                style={{ height: '100%', width: '100%' }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position} icon={icon}>
                  <Popup>
                    מספרה ביתא <br /> המקום המושלם לשיער שלך!
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-neumorphic p-8 space-y-6 backdrop-blur-md bg-white/80 border border-white/20">
              <h2 className="text-2xl font-semibold mb-6">פרטי התקשרות</h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaMapMarkerAlt className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">כתובת</h3>
                    <p>רחוב דיזנגוף 123, תל אביב</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">טלפון</h3>
                    <p><a href="tel:+972123456789" className="hover:text-primary transition">03-1234567</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaEnvelope className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">אימייל</h3>
                    <p><a href="mailto:info@beta-salon.co.il" className="hover:text-primary transition">info@beta-salon.co.il</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FaClock className="text-primary text-xl" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium mb-2">שעות פעילות</h3>
                    <div className="bg-secondary rounded-lg overflow-hidden">
                      <table className="min-w-full">
                        <tbody>
                          {businessHours.map((item, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-secondary' : 'bg-secondary/50'}>
                              <td className="py-2 px-4 font-medium">{item.day}</td>
                              <td className="py-2 px-4 text-left">{item.hours}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}