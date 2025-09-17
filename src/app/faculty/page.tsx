'use client';
import { FaGraduationCap, FaUsers, FaAward, FaStar, FaEnvelope, FaLinkedin, FaBook, FaChalkboardTeacher } from 'react-icons/fa';
import { MdScience, MdBusiness, MdLibraryBooks } from 'react-icons/md';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function FacultyPage() {
  const stats = [
    { icon: <FaUsers />, number: '150+', label: 'Faculty Members' },
    { icon: <FaGraduationCap />, number: '85%', label: 'PhD Qualified' },
    { icon: <FaAward />, number: '25+', label: 'Years Avg Experience' },
    { icon: <FaStar />, number: '4.8/5', label: 'Student Rating' }
  ];

  const departments = [
    {
      name: 'Arts & Humanities',
      icon: <MdLibraryBooks />,
      color: 'from-purple-500 to-pink-500',
      facultyCount: 25,
      hod: 'Dr. Priya Sharma'
    },
    {
      name: 'Commerce',
      icon: <MdBusiness />,
      color: 'from-blue-500 to-indigo-600',
      facultyCount: 20,
      hod: 'Prof. Rajesh Kumar'
    },
    {
      name: 'Science',
      icon: <MdScience />,
      color: 'from-green-500 to-emerald-600',
      facultyCount: 30,
      hod: 'Dr. Amit Patel'
    }
  ];

  const featuredFaculty = [
    {
      name: 'Dr. Priya Sharma',
      position: 'Head of Department - Arts',
      qualification: 'PhD in English Literature',
      experience: '15 Years',
      image: '/images/hero1.jpg',
      email: 'priya.sharma@college.edu',
      specialization: 'Modern Literature, Creative Writing',
      publications: '25+ Research Papers'
    },
    {
      name: 'Prof. Rajesh Kumar',
      position: 'Head of Department - Commerce',
      qualification: 'PhD in Business Administration',
      experience: '20 Years',
      image: '/images/hero2.jpg',
      email: 'rajesh.kumar@college.edu',
      specialization: 'Finance, Marketing Strategy',
      publications: '30+ Research Papers'
    },
    {
      name: 'Dr. Amit Patel',
      position: 'Head of Department - Science',
      qualification: 'PhD in Physics',
      experience: '18 Years',
      image: '/images/hero3.jpg',
      email: 'amit.patel@college.edu',
      specialization: 'Quantum Physics, Research Methods',
      publications: '40+ Research Papers'
    },
    {
      name: 'Dr. Sunita Verma',
      position: 'Associate Professor - Mathematics',
      qualification: 'PhD in Applied Mathematics',
      experience: '12 Years',
      image: '/images/hero4.jpg',
      email: 'sunita.verma@college.edu',
      specialization: 'Statistics, Data Analysis',
      publications: '20+ Research Papers'
    },
    {
      name: 'Prof. Vikram Singh',
      position: 'Professor - Chemistry',
      qualification: 'PhD in Organic Chemistry',
      experience: '22 Years',
      image: '/images/hero1.jpg',
      email: 'vikram.singh@college.edu',
      specialization: 'Organic Synthesis, Green Chemistry',
      publications: '35+ Research Papers'
    },
    {
      name: 'Dr. Meera Joshi',
      position: 'Assistant Professor - History',
      qualification: 'PhD in Ancient History',
      experience: '8 Years',
      image: '/images/hero2.jpg',
      email: 'meera.joshi@college.edu',
      specialization: 'Ancient Civilizations, Archaeology',
      publications: '15+ Research Papers'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <FaChalkboardTeacher className="mr-2" /> Our Faculty
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Meet Our
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Expert Faculty
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Our distinguished faculty members bring decades of experience, research excellence, and passion for teaching to create an inspiring learning environment.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <FaBook className="mr-2" /> Academic Departments
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Faculty by Department</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our faculty is organized across three main departments, each led by experienced department heads
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${dept.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}>
                  {dept.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{dept.name}</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Faculty Members:</span>
                    <span className="font-semibold text-gray-900">{dept.facultyCount}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Head of Department:</span>
                    <span className="font-semibold text-blue-600">{dept.hod}</span>
                  </div>
                </div>
                <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                  View Faculty
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Faculty */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <FaStar className="mr-2" /> Featured Faculty
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Distinguished Professors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get to know our accomplished faculty members who are leaders in their respective fields
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredFaculty.map((faculty, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <Image 
                    src={faculty.image} 
                    alt={faculty.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a href={`mailto:${faculty.email}`} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <FaEnvelope />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <FaLinkedin />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">{faculty.position}</div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <FaGraduationCap className="mr-2 text-blue-500" />
                      <span>{faculty.qualification}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaAward className="mr-2 text-green-500" />
                      <span>{faculty.experience} Experience</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <FaBook className="mr-2 text-purple-500" />
                      <span>{faculty.publications}</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-3 mb-4">
                    <div className="text-sm font-medium text-gray-700 mb-1">Specialization:</div>
                    <div className="text-sm text-gray-600">{faculty.specialization}</div>
                  </div>
                  
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-700 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Join Our Academic Community
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Interested in becoming part of our distinguished faculty? We welcome applications from qualified educators and researchers.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
              Faculty Positions
            </Button>
            <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Research Opportunities
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}