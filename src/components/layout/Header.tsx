'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function Header() {
  const [isNaacOpen, setIsNaacOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#022340] via-[#022340] to-[#022340] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-18">
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-1">
              <Link href="/" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                About Us
              </Link>
              <Link href="/academics" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Academics
              </Link>
              {/* Admissions Dropdown */}
              <div className="relative" onMouseEnter={() => setIsAdmissionOpen(true)} onMouseLeave={() => setIsAdmissionOpen(false)}>
                <button className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center" suppressHydrationWarning>
                  Admissions
                  <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${isAdmissionOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isAdmissionOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link href="/admissions?section=overview" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Admission Overview
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link href="/admissions?section=apply-online" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Apply Online
                    </Link>
                    <Link href="/admissions?section=eligibility" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Eligibility Criteria
                    </Link>
                    <Link href="/admissions?section=fee-structure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Fee Structure
                    </Link>
                    <Link href="/admissions?section=important-dates" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Important Dates
                    </Link>
                    <Link href="/admissions?section=prospectus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Download Prospectus
                    </Link>
                    <Link href="/admissions?section=scholarships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Scholarships
                    </Link>
                    <Link href="/admissions?section=contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Admission Helpdesk
                    </Link>
                  </div>
                )}
              </div>
              {/* Departments Dropdown */}
              <div className="relative" onMouseEnter={() => setIsDeptOpen(true)} onMouseLeave={() => setIsDeptOpen(false)}>
                <button className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center" suppressHydrationWarning>
                  Departments
                  <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${isDeptOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isDeptOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link href="/departments" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      All Departments
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link href="/departments?dept=ba" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Bachelor of Arts (BA)
                    </Link>
                    <Link href="/departments?dept=bcom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Bachelor of Commerce (BCom)
                    </Link>
                    <Link href="/departments?dept=bsc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Bachelor of Science (BSc)
                    </Link>
                    <Link href="/departments?dept=ma" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Master of Arts (MA)
                    </Link>
                    <Link href="/departments?dept=mcom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Master of Commerce (MCom)
                    </Link>
                    <Link href="/departments?dept=msc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Master of Science (MSc)
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/faculty" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Faculty
              </Link>
              <Link href="/student-life" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Student Life
              </Link>
              <Link href="/placements" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Placements
              </Link>
              <Link href="/alumni" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Alumni
              </Link>
              
              {/* Gallery Dropdown */}
              <div className="relative" onMouseEnter={() => setIsGalleryOpen(true)} onMouseLeave={() => setIsGalleryOpen(false)}>
                <button className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center" suppressHydrationWarning>
                  Gallery
                  <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${isGalleryOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isGalleryOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link href="/gallery?category=all" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      All Photos
                    </Link>
                    <div className="border-t border-gray-100 my-1"></div>
                    <Link href="/gallery?category=campus" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Campus Life
                    </Link>
                    <Link href="/gallery?category=events" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Events & Functions
                    </Link>
                    <Link href="/gallery?category=convocation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Convocation
                    </Link>
                    <Link href="/gallery?category=sports" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Sports Activities
                    </Link>
                    <Link href="/gallery?category=cultural" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Cultural Programs
                    </Link>
                    <Link href="/gallery?category=infrastructure" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Infrastructure
                    </Link>
                  </div>
                )}
              </div>
              
              {/* NAAC Dropdown */}
              <div className="relative" onMouseEnter={() => setIsNaacOpen(true)} onMouseLeave={() => setIsNaacOpen(false)}>
                <button className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center" suppressHydrationWarning>
                  NAAC
                  <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${isNaacOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isNaacOpen && (
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link href="/naac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      NAAC Overview
                    </Link>
                    <Link href="/naac/accreditation" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Accreditation Status
                    </Link>
                    <Link href="/naac/ssr" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Self Study Report (SSR)
                    </Link>
                    <Link href="/naac/peer-team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Peer Team Report
                    </Link>
                    <Link href="/naac/aqar" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      AQAR Reports
                    </Link>
                    <Link href="/naac/criteria" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Seven Criteria
                    </Link>
                    <Link href="/naac/best-practices" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Best Practices
                    </Link>
                    <Link href="/naac/iqac" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      IQAC
                    </Link>
                    <Link href="/naac/documents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                      Documents & Policies
                    </Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}