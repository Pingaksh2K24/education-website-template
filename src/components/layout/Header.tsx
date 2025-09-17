'use client';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const pathname = usePathname();
  const [isNaacOpen, setIsNaacOpen] = useState(false);
  const [isDeptOpen, setIsDeptOpen] = useState(false);
  const [isAdmissionOpen, setIsAdmissionOpen] = useState(false);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-[#022340] via-[#022340] to-[#022340] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-18 relative">
          {/* Mobile menu button - centered */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-orange-300 p-2"
            >
              {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-1">
              <Link href="/" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                pathname === '/' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                Home
              </Link>
              <Link href="/about" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                pathname === '/about' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                About Us
              </Link>
              <Link href="/academics" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                pathname === '/academics' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                Academics
              </Link>
              {/* Admissions Dropdown */}
              <div className="relative" onMouseEnter={() => setIsAdmissionOpen(true)} onMouseLeave={() => setIsAdmissionOpen(false)}>
                <button className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center ${
                  pathname.startsWith('/admissions') ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
                }`} suppressHydrationWarning>
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
                <button className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center ${
                  pathname.startsWith('/departments') ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
                }`} suppressHydrationWarning>
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
              <Link href="/faculty" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                pathname === '/faculty' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                Faculty
              </Link>
              <Link href="/student-life" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                pathname === '/student-life' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                Student Life
              </Link>
              <Link href="/placements" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                pathname === '/placements' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                Placements
              </Link>
              <Link href="/alumni" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                pathname === '/alumni' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                Alumni
              </Link>
              
              {/* Gallery Dropdown */}
              <div className="relative" onMouseEnter={() => setIsGalleryOpen(true)} onMouseLeave={() => setIsGalleryOpen(false)}>
                <button className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center ${
                  pathname.startsWith('/gallery') ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
                }`} suppressHydrationWarning>
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
                <button className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center ${
                  pathname.startsWith('/naac') ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
                }`} suppressHydrationWarning>
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
              
              <Link href="/contact" className={`px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105 ${
                pathname === '/contact' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white' : 'text-white hover:text-orange-300 hover:bg-white/10'
              }`}>
                Contact
              </Link>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#022340] to-[#033a5a] border-t border-white/20 shadow-2xl">
            <div className="px-4 pt-4 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
              <Link href="/" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10 hover:translate-x-2'
              }`} onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link href="/about" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/about' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10 hover:translate-x-2'
              }`} onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              <Link href="/academics" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/academics' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10 hover:translate-x-2'
              }`} onClick={() => setIsMobileMenuOpen(false)}>
                Academics
              </Link>
              
              {/* Admissions with submenu */}
              <div>
                <button
                  onClick={() => setIsAdmissionOpen(!isAdmissionOpen)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    pathname.startsWith('/admissions') ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10'
                  }`}
                >
                  Admissions
                  <FaChevronDown className={`transition-transform duration-300 ${isAdmissionOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAdmissionOpen && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-orange-400/30 pl-4">
                    <Link href="/admissions?section=overview" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Admission Overview</Link>
                    <Link href="/admissions?section=apply-online" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Apply Online</Link>
                    <Link href="/admissions?section=eligibility" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Eligibility Criteria</Link>
                    <Link href="/admissions?section=fee-structure" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Fee Structure</Link>
                  </div>
                )}
              </div>
              
              {/* Departments with submenu */}
              <div>
                <button
                  onClick={() => setIsDeptOpen(!isDeptOpen)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    pathname.startsWith('/departments') ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10'
                  }`}
                >
                  Departments
                  <FaChevronDown className={`transition-transform duration-300 ${isDeptOpen ? 'rotate-180' : ''}`} />
                </button>
                {isDeptOpen && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-orange-400/30 pl-4">
                    <Link href="/departments" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>All Departments</Link>
                    <Link href="/departments?dept=ba" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Bachelor of Arts (BA)</Link>
                    <Link href="/departments?dept=bcom" className="block px-3 py-2 text-sm text-gray-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Bachelor of Commerce (BCom)</Link>
                    <Link href="/departments?dept=bsc" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Bachelor of Science (BSc)</Link>
                  </div>
                )}
              </div>
              
              <Link href="/faculty" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/faculty' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10 hover:translate-x-2'
              }`} onClick={() => setIsMobileMenuOpen(false)}>
                Faculty
              </Link>
              <Link href="/student-life" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/student-life' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10 hover:translate-x-2'
              }`} onClick={() => setIsMobileMenuOpen(false)}>
                Student Life
              </Link>
              <Link href="/placements" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/placements' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10 hover:translate-x-2'
              }`} onClick={() => setIsMobileMenuOpen(false)}>
                Placements
              </Link>
              <Link href="/alumni" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/alumni' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10 hover:translate-x-2'
              }`} onClick={() => setIsMobileMenuOpen(false)}>
                Alumni
              </Link>
              
              {/* Gallery with submenu */}
              <div>
                <button
                  onClick={() => setIsGalleryOpen(!isGalleryOpen)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    pathname.startsWith('/gallery') ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10'
                  }`}
                >
                  Gallery
                  <FaChevronDown className={`transition-transform duration-300 ${isGalleryOpen ? 'rotate-180' : ''}`} />
                </button>
                {isGalleryOpen && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-orange-400/30 pl-4">
                    <Link href="/gallery?category=all" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>All Photos</Link>
                    <Link href="/gallery?category=campus" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Campus Life</Link>
                    <Link href="/gallery?category=events" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Events & Functions</Link>
                    <Link href="/gallery?category=sports" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Sports Activities</Link>
                  </div>
                )}
              </div>
              
              {/* NAAC with submenu */}
              <div>
                <button
                  onClick={() => setIsNaacOpen(!isNaacOpen)}
                  className={`w-full flex justify-between items-center px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                    pathname.startsWith('/naac') ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10'
                  }`}
                >
                  NAAC
                  <FaChevronDown className={`transition-transform duration-300 ${isNaacOpen ? 'rotate-180' : ''}`} />
                </button>
                {isNaacOpen && (
                  <div className="ml-6 mt-2 space-y-1 border-l-2 border-orange-400/30 pl-4">
                    <Link href="/naac" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>NAAC Overview</Link>
                    <Link href="/naac/accreditation" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Accreditation Status</Link>
                    <Link href="/naac/ssr" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>Self Study Report</Link>
                    <Link href="/naac/iqac" className="block px-3 py-2 text-sm text-gray-300 hover:text-orange-300 hover:bg-white/5 rounded-lg transition-all duration-200" onClick={() => setIsMobileMenuOpen(false)}>IQAC</Link>
                  </div>
                )}
              </div>
              
              <Link href="/contact" className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 ${
                pathname === '/contact' ? 'bg-gradient-to-r from-red-500 to-red-500 text-white shadow-lg' : 'text-white hover:text-orange-300 hover:bg-white/10 hover:translate-x-2'
              }`} onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}