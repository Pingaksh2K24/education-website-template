'use client';
import { FaUniversity, FaGraduationCap, FaUsers, FaAward, FaGlobe, FaLightbulb, FaHeart, FaRocket, FaBookOpen, FaChartLine, FaHandshake, FaLeaf } from 'react-icons/fa';
import { MdSchool, MdScience, MdBusiness, MdComputer } from 'react-icons/md';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  const stats = [
    { icon: <FaGraduationCap />, number: '50,000+', label: 'Alumni Worldwide' },
    { icon: <FaUsers />, number: '15,000+', label: 'Current Students' },
    { icon: <FaAward />, number: '150+', label: 'Years of Excellence' },
    { icon: <FaGlobe />, number: '100+', label: 'Countries Represented' }
  ];

  const values = [
    {
      icon: <FaLightbulb />,
      title: 'Innovation',
      description: 'Fostering creativity and cutting-edge research to solve tomorrow\'s challenges.'
    },
    {
      icon: <FaHeart />,
      title: 'Integrity',
      description: 'Upholding the highest ethical standards in all our endeavors.'
    },
    {
      icon: <FaRocket />,
      title: 'Excellence',
      description: 'Striving for academic and professional excellence in every field.'
    },
    {
      icon: <FaHandshake />,
      title: 'Collaboration',
      description: 'Building partnerships that create lasting impact in our communities.'
    }
  ];

  const milestones = [
    { year: '1869', event: 'Institution Founded', description: 'Established with a vision to provide quality education' },
    { year: '1920', event: 'First Graduate Program', description: 'Launched our first postgraduate degree program' },
    { year: '1975', event: 'Research Excellence', description: 'Became a recognized research university' },
    { year: '2000', event: 'Digital Transformation', description: 'Pioneered online learning and digital education' },
    { year: '2020', event: 'Global Recognition', description: 'Ranked among top educational institutions worldwide' }
  ];

  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'Chancellor',
      image: '/images/hero1.jpg',
      description: 'Leading educational innovation for over 25 years'
    },
    {
      name: 'Prof. Priya Sharma',
      position: 'Vice Chancellor',
      image: '/images/hero2.jpg',
      description: 'Expert in academic excellence and student development'
    },
    {
      name: 'Dr. Amit Patel',
      position: 'Dean of Academics',
      image: '/images/hero3.jpg',
      description: 'Pioneering research in modern educational methodologies'
    }
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
              <FaUniversity className="mr-2" /> About Our Institution
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Shaping Minds,
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Building Futures
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              For over 150 years, we have been at the forefront of educational excellence, 
              nurturing leaders, innovators, and changemakers who shape our world.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                Our Story
              </Button>
              <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
                Virtual Tour
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
                <FaBookOpen className="mr-2" /> Our Purpose
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-8">Mission & Vision</h2>
              
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
                  <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Mission</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To provide transformative education that empowers students to become ethical leaders, 
                    innovative thinkers, and responsible global citizens who contribute to the betterment of society.
                  </p>
                </div>
                
                <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl border border-orange-100">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">Our Vision</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    To be a globally recognized institution that sets the standard for educational excellence, 
                    research innovation, and social impact in the 21st century.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="/images/college-building.jpg" 
                  alt="College Building" 
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <FaLeaf className="text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Sustainable Campus</div>
                        <div className="text-sm text-gray-600">Carbon Neutral by 2030</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <FaHeart className="mr-2" /> Our Foundation
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our institutional culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <FaChartLine className="mr-2" /> Our Journey
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Historical Milestones</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key moments that have shaped our institution's legacy of excellence
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.event}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium mb-6">
              <FaUsers className="mr-2" /> Leadership Team
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Meet Our Leaders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionary leaders committed to educational excellence and student success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h3>
                  <div className="text-blue-600 font-medium mb-3">{leader.position}</div>
                  <p className="text-gray-600 text-sm">{leader.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Legacy?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Become part of a community that values excellence, innovation, and making a positive impact on the world.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
              Apply Now
            </Button>
            <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Schedule a Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}