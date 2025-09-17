'use client';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPaperPlane, FaUser, FaComments } from 'react-icons/fa';
import {  MdLocationOn, MdAccessTime } from 'react-icons/md';
import Button from '@/components/ui/Button';

export default function ContactPage() {
  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      details: ['+91 98765 43210', '+91 98765 43211'],
      color: 'from-blue-500 to-indigo-600'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      details: ['info@college.edu', 'admissions@college.edu'],
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      details: ['123 Education Street', 'Academic City, State 12345'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <FaClock />,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 9:00 AM - 2:00 PM'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const departments = [
    { name: 'Admissions Office', phone: '+91 98765 43210', email: 'admissions@college.edu' },
    { name: 'Academic Office', phone: '+91 98765 43211', email: 'academics@college.edu' },
    { name: 'Student Affairs', phone: '+91 98765 43212', email: 'students@college.edu' },
    { name: 'Finance Office', phone: '+91 98765 43213', email: 'finance@college.edu' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <FaComments className="mr-2" /> Get In Touch
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Contact
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              We&apos;re here to help you with admissions, academic inquiries, and any questions about our institution.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className={`w-16 h-16 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {info.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <FaPaperPlane className="mr-2" /> Send Message
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Get In Touch</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and we&apos;ll get back to you as soon as possible.
              </p>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input 
                        type="text" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="John"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FaUser className="text-gray-400" />
                      </div>
                      <input 
                        type="text" 
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Doe"
                        suppressHydrationWarning
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input 
                      type="email" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="john@example.com"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input 
                      type="tel" 
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 98765 43210"
                      suppressHydrationWarning
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300" suppressHydrationWarning>
                    <option>General Inquiry</option>
                    <option>Admissions</option>
                    <option>Academic Programs</option>
                    <option>Campus Visit</option>
                    <option>Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us how we can help you..."
                    suppressHydrationWarning
                  ></textarea>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300">
                  Send Message
                </Button>
              </form>
            </div>
            
            {/* Map & Additional Info */}
            <div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-8 mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Visit Our Campus</h3>
                <div className="bg-gray-300 rounded-2xl h-64 flex items-center justify-center mb-6">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl text-gray-500 mb-2 mx-auto" />
                    <p className="text-gray-600">Interactive Campus Map</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MdLocationOn className="text-blue-600 text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Main Campus</p>
                      <p className="text-gray-600">123 Education Street, Academic City, State 12345</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MdAccessTime className="text-green-600 text-xl mt-1" />
                    <div>
                      <p className="font-semibold text-gray-900">Campus Hours</p>
                      <p className="text-gray-600">24/7 Access for Students & Staff</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social Media */}
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300">
                    <FaFacebook />
                  </a>
                  <a href="#" className="w-12 h-12 bg-sky-500 rounded-xl flex items-center justify-center text-white hover:bg-sky-600 transition-colors duration-300">
                    <FaTwitter />
                  </a>
                  <a href="#" className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center text-white hover:bg-pink-700 transition-colors duration-300">
                    <FaInstagram />
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-700 rounded-xl flex items-center justify-center text-white hover:bg-blue-800 transition-colors duration-300">
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <FaPhone className="mr-2" /> Department Contacts
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Departments</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reach out to specific departments for specialized assistance
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{dept.name}</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FaPhone className="text-blue-600 text-sm" />
                    </div>
                    <span className="text-gray-700">{dept.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                      <FaEnvelope className="text-green-600 text-sm" />
                    </div>
                    <span className="text-gray-700">{dept.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What are the admission requirements?</h3>
              <p className="text-gray-700">Admission requirements vary by program. Please contact our admissions office for specific requirements for your desired course.</p>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">How can I schedule a campus visit?</h3>
              <p className="text-gray-700">You can schedule a campus visit by calling our main office or filling out the contact form above. We offer guided tours Monday through Saturday.</p>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">What financial aid options are available?</h3>
              <p className="text-gray-700">We offer various financial aid options including scholarships, grants, and student loans. Contact our finance office for detailed information.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}