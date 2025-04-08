'use client';

import React from 'react';
import Layout from '../components/Layout';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BookingSection from '../components/BookingSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AboutSection from '../components/AboutSection';
import GallerySection from '../components/GallerySection';
import ProductsSection from '../components/ProductsSection';
import PromotionsSection from '../components/PromotionsSection';
import LocationSection from '../components/LocationSection';
import Footer from '../components/Footer';
import BookingPage from '../components/BookingPage';
import ServicesPage from '../components/ServicesPage';
import GalleryPage from '../components/GalleryPage';
import ProductsPage from '../components/ProductsPage';

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        {/* כאן יתווספו הקומפוננטות שייווצרו על ידי המחולל */}
        <Layout />
    <Header />
    <HeroSection />
    <ServicesSection />
    <BookingSection />
    <TestimonialsSection />
    <AboutSection />
    <GallerySection />
    <ProductsSection />
    <PromotionsSection />
    <LocationSection />
    <Footer />
    <BookingPage />
    <ServicesPage />
    <GalleryPage />
    <ProductsPage />
  </main>
      
      <footer className="py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; 2025 מספרה ביתא. כל הזכויות שמורות.
        </div>
      </footer>
    </div>
  );
}