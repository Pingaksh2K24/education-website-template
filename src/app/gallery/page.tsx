'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaExpand, FaImages, FaUniversity, FaCalendarAlt, FaGraduationCap, FaFutbol, FaTheaterMasks, FaBuilding } from 'react-icons/fa';

const galleryData = {
  'all': [
    { id: 1, src: '/images/campus1.jpg', alt: 'Campus Building', category: 'campus' },
    { id: 2, src: '/images/event1.jpg', alt: 'Annual Function', category: 'events' },
    { id: 3, src: '/images/convocation1.jpg', alt: 'Graduation Ceremony', category: 'convocation' },
    { id: 4, src: '/images/sports1.jpg', alt: 'Cricket Match', category: 'sports' },
    { id: 5, src: '/images/cultural1.jpg', alt: 'Dance Performance', category: 'cultural' },
    { id: 6, src: '/images/infrastructure1.jpg', alt: 'Library', category: 'infrastructure' },
    { id: 7, src: '/images/campus2.jpg', alt: 'Garden Area', category: 'campus' },
    { id: 8, src: '/images/event2.jpg', alt: 'Tech Fest', category: 'events' },
    { id: 9, src: '/images/convocation2.jpg', alt: 'Award Ceremony', category: 'convocation' },
    { id: 10, src: '/images/sports2.jpg', alt: 'Basketball Court', category: 'sports' },
    { id: 11, src: '/images/cultural2.jpg', alt: 'Music Concert', category: 'cultural' },
    { id: 12, src: '/images/infrastructure2.jpg', alt: 'Computer Lab', category: 'infrastructure' },
  ],
  'campus': [
    { id: 1, src: '/images/campus1.jpg', alt: 'Campus Building', category: 'campus' },
    { id: 7, src: '/images/campus2.jpg', alt: 'Garden Area', category: 'campus' },
  ],
  'events': [
    { id: 2, src: '/images/event1.jpg', alt: 'Annual Function', category: 'events' },
    { id: 8, src: '/images/event2.jpg', alt: 'Tech Fest', category: 'events' },
  ],
  'convocation': [
    { id: 3, src: '/images/convocation1.jpg', alt: 'Graduation Ceremony', category: 'convocation' },
    { id: 9, src: '/images/convocation2.jpg', alt: 'Award Ceremony', category: 'convocation' },
  ],
  'sports': [
    { id: 4, src: '/images/sports1.jpg', alt: 'Cricket Match', category: 'sports' },
    { id: 10, src: '/images/sports2.jpg', alt: 'Basketball Court', category: 'sports' },
  ],
  'cultural': [
    { id: 5, src: '/images/cultural1.jpg', alt: 'Dance Performance', category: 'cultural' },
    { id: 11, src: '/images/cultural2.jpg', alt: 'Music Concert', category: 'cultural' },
  ],
  'infrastructure': [
    { id: 6, src: '/images/infrastructure1.jpg', alt: 'Library', category: 'infrastructure' },
    { id: 12, src: '/images/infrastructure2.jpg', alt: 'Computer Lab', category: 'infrastructure' },
  ],
};

const categories = [
  { key: 'all', label: 'All Photos', icon: FaImages },
  { key: 'campus', label: 'Campus Life', icon: FaUniversity },
  { key: 'events', label: 'Events & Functions', icon: FaCalendarAlt },
  { key: 'convocation', label: 'Convocation', icon: FaGraduationCap },
  { key: 'sports', label: 'Sports Activities', icon: FaFutbol },
  { key: 'cultural', label: 'Cultural Programs', icon: FaTheaterMasks },
  { key: 'infrastructure', label: 'Infrastructure', icon: FaBuilding },
];

function GalleryContent() {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<{id: number; src: string; alt: string; category: string} | null>(null);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category && galleryData[category as keyof typeof galleryData]) {
      setActiveCategory(category);
    }
  }, [searchParams]);

  const filteredImages = galleryData[activeCategory as keyof typeof galleryData] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#022340] via-[#1e40af] to-[#7c3aed] py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Photo Gallery
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our vibrant campus life, memorable events, and achievements through our photo collection
          </p>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                activeCategory === category.key
                  ? 'bg-gradient-to-r from-red-500 to-orange-500 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-red-300'
              }`}
            >
              <category.icon className="text-lg" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className="relative aspect-square overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 text-sm">Image Placeholder</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <button
                  onClick={() => setSelectedImage(image)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
                >
                  <FaExpand className="text-sm" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 group-hover:text-red-600 transition-colors duration-300">
                  {image.alt}
                </h3>
                <p className="text-sm text-gray-500 capitalize mt-1">
                  {image.category.replace('-', ' ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* No Images Message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">📷</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Images Found</h3>
            <p className="text-gray-600">No images available for this category yet.</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors z-10"
            >
              ✕
            </button>
            <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
              <span className="text-gray-500">Large Image Placeholder</span>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.alt}</h3>
              <p className="text-gray-600 capitalize">{selectedImage.category.replace('-', ' ')}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function Gallery() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <GalleryContent />
    </Suspense>
  );
}