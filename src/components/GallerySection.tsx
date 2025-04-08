'use client';

import React, { useState, useCallback } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import clsx from 'clsx';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: 'haircut' | 'styling' | 'color' | 'salon';
}

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Sample gallery images - replace with your actual images
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: '/images/gallery/haircut-1.jpg',
      alt: 'תספורת קצרה מודרנית',
      width: 800,
      height: 1000,
      category: 'haircut',
    },
    {
      id: 2,
      src: '/images/gallery/styling-1.jpg',
      alt: 'עיצוב שיער לאירוע',
      width: 800,
      height: 600,
      category: 'styling',
    },
    {
      id: 3,
      src: '/images/gallery/color-1.jpg',
      alt: 'צבע שיער בלונד',
      width: 800,
      height: 1200,
      category: 'color',
    },
    {
      id: 4,
      src: '/images/gallery/salon-1.jpg',
      alt: 'חלל המספרה',
      width: 1200,
      height: 800,
      category: 'salon',
    },
    {
      id: 5,
      src: '/images/gallery/haircut-2.jpg',
      alt: 'תספורת גברים',
      width: 800,
      height: 800,
      category: 'haircut',
    },
    {
      id: 6,
      src: '/images/gallery/styling-2.jpg',
      alt: 'תסרוקת כלה',
      width: 800,
      height: 1100,
      category: 'styling',
    },
    {
      id: 7,
      src: '/images/gallery/color-2.jpg',
      alt: 'צבע שיער אומברה',
      width: 800,
      height: 1000,
      category: 'color',
    },
    {
      id: 8,
      src: '/images/gallery/salon-2.jpg',
      alt: 'עמדת עבודה במספרה',
      width: 1200,
      height: 900,
      category: 'salon',
    },
    {
      id: 9,
      src: '/images/gallery/haircut-3.jpg',
      alt: 'תספורת נשים',
      width: 800,
      height: 1000,
      category: 'haircut',
    },
    {
      id: 10,
      src: '/images/gallery/styling-3.jpg',
      alt: 'עיצוב שיער גלי',
      width: 800,
      height: 1200,
      category: 'styling',
    },
    {
      id: 11,
      src: '/images/gallery/color-3.jpg',
      alt: 'צבע שיער אדום',
      width: 800,
      height: 1000,
      category: 'color',
    },
    {
      id: 12,
      src: '/images/gallery/salon-3.jpg',
      alt: 'אזור המתנה במספרה',
      width: 1200,
      height: 800,
      category: 'salon',
    },
  ];

  const filteredImages = activeFilter
    ? galleryImages.filter((image) => image.category === activeFilter)
    : galleryImages;

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const handleFilterClick = (category: string | null) => {
    setActiveFilter(category === activeFilter ? null : category);
  };

  const getNextImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  }, [selectedImage, filteredImages]);

  const getPrevImage = useCallback(() => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex((img) => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  }, [selectedImage, filteredImages]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowRight') {
        getPrevImage(); // RTL navigation - right arrow goes to previous
      } else if (e.key === 'ArrowLeft') {
        getNextImage(); // RTL navigation - left arrow goes to next
      }
    },
    [getNextImage, getPrevImage]
  );

  return (
    <section 
      id="gallery" 
      className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden"
      dir="rtl"
    >
      {/* Glassmorphism background elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-gradient-to-br from-primary-200/30 to-primary-400/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-gradient-to-tr from-primary-200/20 to-primary-300/20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            הגלריה שלנו
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            צפו בתמונות מהעבודות האחרונות שלנו ומחלל המספרה המעוצב
          </motion.p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <FilterButton 
            active={activeFilter === null} 
            onClick={() => handleFilterClick(null)}
          >
            הכל
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'haircut'} 
            onClick={() => handleFilterClick('haircut')}
          >
            תספורות
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'styling'} 
            onClick={() => handleFilterClick('styling')}
          >
            עיצוב שיער
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'color'} 
            onClick={() => handleFilterClick('color')}
          >
            צבע
          </FilterButton>
          <FilterButton 
            active={activeFilter === 'salon'} 
            onClick={() => handleFilterClick('salon')}
          >
            המספרה
          </FilterButton>
        </div>

        {/* Gallery grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
        >
          {filteredImages.map((image) => (
            <motion.div
              key={image.id}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div 
                className="relative overflow-hidden rounded-xl cursor-pointer shadow-neumorphic hover:shadow-neumorphic-hover transition-all duration-300"
                onClick={() => openLightbox(image)}
                role="button"
                tabIndex={0}
                aria-label={`פתח תמונה של ${image.alt}`}
              >
                <div className="aspect-w-4 aspect-h-3">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzIwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjJmMmYyIi8+PC9zdmc+"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-medium">{image.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
          onClick={closeLightbox}
          onKeyDown={handleKeyDown}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="תצוגת תמונה מוגדלת"
        >
          <div className="relative w-full h-full flex items-center justify-center p-4">
            <div 
              className="absolute top-4 right-4 z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeLightbox}
                className="glassmorphism-button p-2 rounded-full text-white hover:text-primary-400 transition-colors"
                aria-label="סגור"
              >
                <FiX size={24} />
              </button>
            </div>
            
            <div 
              className="relative max-w-5xl max-h-[85vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>
              
              <div className="absolute bottom-4 left-0 right-0 text-center text-white bg-black/50 py-2 px-4 backdrop-blur-sm rounded-lg mx-auto max-w-max">
                {selectedImage.alt}
              </div>
            </div>
            
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 glassmorphism-button p-3 rounded-full text-white hover:text-primary-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                getPrevImage();
              }}
              aria-label="תמונה קודמת"
            >
              <FiChevronRight size={24} />
            </button>
            
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 glassmorphism-button p-3 rounded-full text-white hover:text-primary-400 transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                getNextImage();
              }}
              aria-label="תמונה הבאה"
            >
              <FiChevronLeft size={24} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

interface FilterButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

const FilterButton: React.FC<FilterButtonProps> = ({ children, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        'py-2 px-5 rounded-full font-medium transition-all duration-300',
        'shadow-neumorphic hover:shadow-neumorphic-hover',
        active
          ? 'bg-primary-500 text-white shadow-inner'
          : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700'
      )}
    >
      {children}
    </button>
  );
};

export default GallerySection;