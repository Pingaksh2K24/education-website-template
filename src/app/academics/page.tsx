'use client';
import { FaGraduationCap, FaBook, FaFlask, FaGlobe, FaUsers, FaStar, FaClock, FaAward, FaChartLine, FaLaptopCode } from 'react-icons/fa';
import { MdScience, MdBusiness, MdEngineering, MdLibraryBooks } from 'react-icons/md';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function AcademicsPage() {
  const programs = [
    {
      category: 'Engineering',
      icon: <MdEngineering />,
      color: 'from-blue-500 to-indigo-600',
      courses: [
        { name: 'Computer Science Engineering', duration: '4 Years', seats: '120' },
        { name: 'Mechanical Engineering', duration: '4 Years', seats: '60' },
        { name: 'Electrical Engineering', duration: '4 Years', seats: '60' },
        { name: 'Civil Engineering', duration: '4 Years', seats: '60' }
      ]
    },
    {
      category: 'Science',
      icon: <MdScience />,
      color: 'from-green-500 to-emerald-600',
      courses: [
        { name: 'Physics (Hons)', duration: '3 Years', seats: '40' },
        { name: 'Chemistry (Hons)', duration: '3 Years', seats: '40' },
        { name: 'Mathematics (Hons)', duration: '3 Years', seats: '40' },
        { name: 'Biotechnology', duration: '3 Years', seats: '30' }
      ]
    },
    {
      category: 'Business',
      icon: <MdBusiness />,
      color: 'from-orange-500 to-red-500',
      courses: [
        { name: 'MBA', duration: '2 Years', seats: '100' },
        { name: 'BBA', duration: '3 Years', seats: '80' },
        { name: 'B.Com (Hons)', duration: '3 Years', seats: '120' },
        { name: 'Economics (Hons)', duration: '3 Years', seats: '60' }
      ]
    },
    {
      category: 'Arts & Humanities',
      icon: <MdLibraryBooks />,
      color: 'from-purple-500 to-pink-500',
      courses: [
        { name: 'English Literature', duration: '3 Years', seats: '50' },
        { name: 'History (Hons)', duration: '3 Years', seats: '40' },
        { name: 'Psychology', duration: '3 Years', seats: '60' },
        { name: 'Journalism', duration: '3 Years', seats: '40' }
      ]
    }
  ];

  const features = [
    { icon: <FaUsers />, title: 'Expert Faculty', description: '200+ PhD qualified professors' },
    { icon: <FaFlask />, title: 'Research Labs', description: 'State-of-the-art facilities' },
    { icon: <FaGlobe />, title: 'Global Exposure', description: 'International partnerships' },
    { icon: <FaAward />, title: 'Accreditation', description: 'NAAC A+ & NBA approved' }
  ];

  const achievements = [
    { number: '95%', label: 'Placement Rate' },
    { number: '50+', label: 'Research Papers' },
    { number: '25+', label: 'Industry Partners' },
    { number: '15:1', label: 'Student-Faculty Ratio' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-blue-900 to-purple-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <FaGraduationCap className="mr-2" /> Academic Excellence
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Academic
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Programs
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Discover world-class education across diverse disciplines designed to shape tomorrow&apos;s leaders and innovators.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                Explore Programs
              </Button>
              <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
                Download Prospectus
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <FaBook className="mr-2" /> Academic Programs
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of undergraduate and postgraduate programs
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-br ${program.color} rounded-2xl flex items-center justify-center text-white text-2xl mr-4`}>
                    {program.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{program.category}</h3>
                    <p className="text-gray-600">{program.courses.length} Programs Available</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {program.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all duration-300 group">
                      <div className="flex justify-between items-center">
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900 group-hover:text-blue-900 transition-colors">{course.name}</h4>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center">
                              <FaClock className="mr-1" /> {course.duration}
                            </span>
                            <span className="flex items-center">
                              <FaUsers className="mr-1" /> {course.seats} Seats
                            </span>
                          </div>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="text-blue-600 font-medium text-sm">View Details →</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <FaChartLine className="mr-2" /> Academic Excellence
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to academic excellence and student success
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="text-4xl font-bold text-blue-600 mb-2">{achievement.number}</div>
                <div className="text-gray-600 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research & Innovation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
                <FaFlask className="mr-2" /> Research Excellence
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Research & Innovation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our research programs foster innovation and discovery across multiple disciplines, 
                contributing to scientific advancement and societal progress.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <FaLaptopCode />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Advanced Research Labs</h3>
                    <p className="text-gray-600">State-of-the-art facilities equipped with cutting-edge technology</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <FaUsers />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Collaborative Projects</h3>
                    <p className="text-gray-600">Industry partnerships and international collaborations</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-white flex-shrink-0">
                    <FaAward />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Published Research</h3>
                    <p className="text-gray-600">Regular publications in top-tier international journals</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <Button>Explore Research</Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image 
                  src="/images/hero4.jpg" 
                  alt="Research Lab" 
                  width={600}
                  height={384}
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                        <FaStar className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Innovation Hub</div>
                        <div className="text-sm text-gray-600">Fostering Future Technologies</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-indigo-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Begin Your Academic Journey?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Join thousands of students who have transformed their lives through our world-class academic programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
              Apply Now
            </Button>
            <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Book Campus Tour
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}