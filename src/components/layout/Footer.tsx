"use client";
import { FaGraduationCap, FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaTwitter, FaLinkedin, FaYoutube, FaLaptopCode } from 'react-icons/fa';

export default function Footer() {

  return (
    <footer className="relative bg-gradient-to-br from-[#022340] via-[#022340] to-[#022340] text-white overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.15'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3Ccircle cx='20' cy='20' r='1'/%3E%3Ccircle cx='60' cy='60' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Main Footer Content */}
      <div className="relative py-12">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced College Branding */}
          <div className="mb-12 text-center group">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
              <div className="relative inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-red-500 to-red-500 rounded-full shadow-2xl transform group-hover:scale-110 transition-transform duration-500">
                <FaGraduationCap className="text-5xl text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-orange-200 bg-clip-text text-transparent leading-tight">
              Excellence in Education
            </h2>
            <p className="text-slate-300 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-6">
              Empowering minds, shaping futures, and building tomorrow&apos;s leaders through quality education and innovation.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-red-500 to-red-600 rounded-full"></div>
              <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              <div className="w-32 h-1 bg-gradient-to-l from-transparent via-red-500 to-red-600 rounded-full"></div>
            </div>
          </div>

          {/* Footer Grid */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {/* Academic Programs */}
            <div className="group hover:bg-white/5 p-6 rounded-2xl transition-all duration-500 border border-transparent hover:border-white/10">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-500 group-hover:text-orange-400 transition-colors duration-300">
                  Academic Programs
                </h3>
              </div>
              <ul className="space-y-4">
                {['Undergraduate', 'Postgraduate', 'Research Programs', 'Online Courses', 'Certifications'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-orange-300 hover:translate-x-3 transition-all duration-300 flex items-center group/link hover:bg-white/5 p-3 rounded-lg">
                      <span className="w-2 h-2 bg-orange-400 rounded-full mr-4 opacity-0 group-hover/link:opacity-100 transform scale-0 group-hover/link:scale-100 transition-all duration-300"></span>
                      <span className="font-medium">{item}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Student Services */}
            <div className="group hover:bg-white/5 p-6 rounded-2xl transition-all duration-500 border border-transparent hover:border-white/10">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-500 group-hover:text-orange-400 transition-colors duration-300">
                  Student Services
                </h3>
              </div>
              <ul className="space-y-3">
                {['Library', 'Career Center', 'Student Portal', 'Campus Life', 'Financial Aid'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="group hover:bg-white/5 p-6 rounded-2xl transition-all duration-500 border border-transparent hover:border-white/10">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-500 group-hover:text-orange-400 transition-colors duration-300">
                  Quick Links
                </h3>
              </div>
              <ul className="space-y-3">
                {['Admissions', 'Faculty', 'Events', 'News', 'Alumni', 'Privacy Policy', 'Terms of Service', 'Anti-Ragging Policy', 'Grievance Redressal', 'Accessibility', 'Site Map'].map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-slate-300 hover:text-orange-300 hover:translate-x-2 transition-all duration-300 flex items-center group">
                      <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Connect */}
            <div className="group hover:bg-white/5 p-6 rounded-2xl transition-all duration-500 border border-transparent hover:border-white/10">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-red-500 group-hover:text-orange-400 transition-colors duration-300">
                  Contact Us
                </h3>
              </div>
              <div className="space-y-4 mb-8">
                <div className="flex items-center group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-sm" />
                  </div>
                  <p className="text-slate-300 group-hover/item:text-white transition-colors duration-300">
                    123 Education Street, Knowledge City, State 12345
                  </p>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FaPhone className="text-white text-sm" />
                  </div>
                  <p className="text-slate-300 group-hover/item:text-white transition-colors duration-300">
                    +1 (555) 123-4567
                  </p>
                </div>
                <div className="flex items-center group/item hover:bg-white/5 p-3 rounded-lg transition-all duration-300">
                  <div className="w-8 h-8 bg-red-500 rounded-lg flex items-center justify-center mr-3 flex-shrink-0">
                    <FaEnvelope className="text-white text-sm" />
                  </div>
                  <p className="text-slate-300 group-hover/item:text-white transition-colors duration-300">
                    info@college.edu
                  </p>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <h4 className="font-bold mb-4 text-white">Follow Us</h4>
                <div className="flex space-x-3">
                  {[
                    { icon: '📘', bg: 'from-blue-600 to-blue-700', hover: 'hover:from-blue-500 hover:to-blue-600' },
                    { icon: '🐦', bg: 'from-sky-500 to-sky-600', hover: 'hover:from-sky-400 hover:to-sky-500' },
                    { icon: '💼', bg: 'from-blue-700 to-blue-800', hover: 'hover:from-blue-600 hover:to-blue-700' },
                    { icon: '📺', bg: 'from-red-600 to-red-700', hover: 'hover:from-red-500 hover:to-red-600' }
                  ].map((social, index) => {
                    const icons = [<FaFacebook key="fb" />, <FaTwitter key="tw" />, <FaLinkedin key="li" />, <FaYoutube key="yt" />];
                    return (
                      <a key={index} href="#" className={`w-12 h-12 bg-gradient-to-br ${social.bg} ${social.hover} rounded-xl flex items-center justify-center transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                        <span className="text-lg text-white">{icons[index]}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>

      {/* Enhanced Bottom Bar */}
      <div className="relative bg-gradient-to-r from-slate-[#022340] via-[#022340] to-[#022340] border-t border-white/20 py-4">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="text-slate-300 text-sm">
                © 2024 <span className="font-bold text-white bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Excellence College</span>. All rights reserved.
              </div>
              <div className="hidden sm:block w-px h-6 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="text-slate-400 flex items-center space-x-1 text-sm">
                <FaLaptopCode className="animate-pulse" />
                <span>Designed and Developed by </span>
                <a href="https://siddhivinayak-technolabs.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-orange-500 font-medium transition-colors duration-300">
                  Siddhivinayak Technolabs
                </a>
              </div>
            </div>
            <div className="text-slate-400 text-sm">
              Made with ❤️ for educational excellence
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}