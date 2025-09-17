'use client';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      bg: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/hero1.jpg")',
      title: 'Welcome to Our College',
      text: 'Discover excellence in education with our world-class facilities and experienced faculty.'
    },
    {
      bg: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/hero2.jpg")',
      title: 'Modern Campus Life',
      text: 'Experience vibrant campus life with state-of-the-art facilities and diverse student activities.'
    },
    {
      bg: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/hero3.jpg")',
      title: 'Academic Excellence',
      text: 'Join thousands of successful graduates who started their journey with us.'
    },
    {
      bg: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/images/hero4.jpg")',
      title: 'Future Ready Education',
      text: 'Prepare for tomorrow with cutting-edge curriculum and industry partnerships.'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-[500px] bg-cover bg-center flex items-center overflow-hidden" style={{backgroundImage: slides[currentSlide].bg}}>
      {/* Animated Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/30 z-5"></div>
      
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden z-5">
        <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-6 h-6 bg-white/10 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Enhanced Navigation Arrows */}
      <button 
        onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
        className="absolute left-6 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
        suppressHydrationWarning
      >
        <span className="text-xl font-bold">‹</span>
      </button>
      <button 
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
        suppressHydrationWarning
      >
        <span className="text-xl font-bold">›</span>
      </button>

      {/* Enhanced Content with Animations */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-3xl">
          {/* Animated Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6 animate-fadeIn">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
            <span className="text-sm font-medium">Educational Excellence</span>
          </div>
          
          {/* Enhanced Title */}
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent animate-slideInLeft">
              {slides[currentSlide].title}
            </span>
          </h1>
          
          {/* Enhanced Description */}
          <p className="text-xl md:text-2xl mb-8 max-w-2xl leading-relaxed text-gray-100 animate-slideInLeft" style={{animationDelay: '0.2s'}}>
            {slides[currentSlide].text}
          </p>
          
          {/* Enhanced Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-slideInLeft" style={{animationDelay: '0.4s'}}>
            <button className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center" suppressHydrationWarning>
              <span className="mr-2">Read More</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/30 hover:border-white/50" suppressHydrationWarning>
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/20 z-20">
        <div 
          className="h-full bg-gradient-to-r from-orange-400 to-orange-600 transition-all duration-300"
          style={{width: `${((currentSlide + 1) / slides.length) * 100}%`}}
        ></div>
      </div>

      {/* Enhanced Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full border-2 ${
              index === currentSlide 
                ? 'w-12 h-3 bg-white border-white' 
                : 'w-3 h-3 bg-white/30 border-white/50 hover:bg-white/50'
            }`}
            suppressHydrationWarning
          />
        ))}
      </div>
      
      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
        <span className="text-white text-sm font-medium">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}