'use client';

import { useState, useEffect } from 'react';
import { FaArrowUp, FaLongArrowAltUp} from 'react-icons/fa';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-14 right-4 z-50 w-8 h-8 bg-red-500 hover:bg-orange-500 text-white rounded-full shadow-xl hover:shadow-xl transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to top"
        >
          <FaArrowUp className="text-sm" />
        </button>
      )}
    </>
  );
}