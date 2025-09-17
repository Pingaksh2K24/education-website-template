import Button from '@/components/ui/Button';
import HeroSection from '@/components/common/HeroSection';
import { FaPalette, FaBriefcase, FaFlask, FaGraduationCap, FaLaptopCode, FaBook, FaUniversity, FaBullseye, FaCheckCircle } from 'react-icons/fa';

export default function HomePage() {
  const courses = [
    { name: 'Bachelor of Arts (BA)', duration: '3 Years', icon: <FaPalette /> },
    { name: 'Bachelor of Commerce (BCom)', duration: '3 Years', icon: <FaBriefcase /> },
    { name: 'Bachelor of Science (BSc)', duration: '3 Years', icon: <FaFlask /> },
    { name: 'Master of Science (MSc)', duration: '2 Years', icon: <FaGraduationCap /> },
    { name: 'Bachelor of Computer Applications (BCA)', duration: '3 Years', icon: <FaLaptopCode /> }
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Enhanced Content Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Our Courses */}
            <div className="group">
              <div className="mb-12">
                <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
                  <FaBook className="mr-2" /> Academic Programs
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 bg-clip-text text-transparent mb-4">
                  Our Courses
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Discover our comprehensive range of undergraduate and postgraduate programs designed to shape your future.
                </p>
              </div>
              
              <div className="space-y-4">
                {courses.map((course, index) => (
                  <div key={index} className="group/item bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-xl p-6 rounded-2xl border border-white/50 transition-all duration-500 hover:scale-105 hover:-translate-y-1">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-white text-xl group-hover/item:scale-110 transition-transform duration-300">
                        {course.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg group-hover/item:text-blue-900 transition-colors duration-300">
                          {course.name}
                        </h3>
                        <p className="text-gray-500 text-sm">
                          Duration: {course.duration}
                        </p>
                      </div>
                      <div className="opacity-0 group-hover/item:opacity-100 transform translate-x-2 group-hover/item:translate-x-0 transition-all duration-300">
                        <span className="text-blue-600 font-medium">Learn More →</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced About Us */}
            <div className="group">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500">
                <div className="mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                    <FaUniversity className="mr-2" /> Institution
                  </div>
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent mb-4">
                    About Us
                  </h2>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                    Excellence in Education Since 1869
                  </h3>
                </div>
                
                <div className="space-y-6">
                  <p className="text-gray-700 leading-relaxed text-lg">
                    We are committed to providing world-class education that empowers students to achieve their dreams and contribute meaningfully to society.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
                      <div className="text-3xl font-bold text-blue-900 mb-2">150+</div>
                      <div className="text-sm text-gray-600">Years of Excellence</div>
                    </div>
                    <div className="text-center p-4 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl">
                      <div className="text-3xl font-bold text-orange-600 mb-2">10K+</div>
                      <div className="text-sm text-gray-600">Alumni Network</div>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <Button>Learn More About Us</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Admissions Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-100 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/images/addmission-section.jpg" 
                  alt="Student" 
                  className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <FaCheckCircle className="text-white text-lg" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">NAAC A+ Accredited</div>
                        <div className="text-sm text-gray-600">Quality Education Assured</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="mb-8">
                <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
                  <FaBullseye className="mr-2" /> Join Us
                </div>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  Admissions Open
                </h2>
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                  Start Your Journey With Us
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-700 leading-relaxed text-lg">
                  Take the first step towards a bright future. Our admission process is designed to identify and nurture talent from all backgrounds.
                </p>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-4">Application Deadlines:</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Early Admission</span>
                      <span className="font-semibold text-blue-900">March 15, 2024</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-700">Regular Admission</span>
                      <span className="font-semibold text-blue-900">May 30, 2024</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button>Apply Now</Button>
                  <button className="px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-300">
                    Download Brochure
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}