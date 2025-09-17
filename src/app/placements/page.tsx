'use client';
import { FaBriefcase, FaChartLine, FaUsers, FaTrophy, FaStar, FaBuilding, FaGraduationCap, FaHandshake, FaRocket } from 'react-icons/fa';
import { MdTrendingUp, MdWork } from 'react-icons/md';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function PlacementsPage() {
  const stats = [
    { icon: <FaChartLine />, number: '95%', label: 'Placement Rate' },
    { icon: <FaBriefcase />, number: '₹12 LPA', label: 'Highest Package' },
    { icon: <FaUsers />, number: '500+', label: 'Students Placed' },
    { icon: <FaBuilding />, number: '150+', label: 'Partner Companies' }
  ];

  const topRecruiters = [
    { name: 'TCS', sector: 'IT Services', logo: '/images/hero1.jpg' },
    { name: 'Infosys', sector: 'Technology', logo: '/images/hero2.jpg' },
    { name: 'Wipro', sector: 'IT Consulting', logo: '/images/hero3.jpg' },
    { name: 'HDFC Bank', sector: 'Banking', logo: '/images/hero4.jpg' },
    { name: 'Accenture', sector: 'Consulting', logo: '/images/hero1.jpg' },
    { name: 'Amazon', sector: 'E-commerce', logo: '/images/hero2.jpg' },
    { name: 'Microsoft', sector: 'Technology', logo: '/images/hero3.jpg' },
    { name: 'Google', sector: 'Technology', logo: '/images/hero4.jpg' }
  ];

  const placementTrends = [
    { year: '2020', placed: 420, percentage: 88 },
    { year: '2021', placed: 450, percentage: 90 },
    { year: '2022', placed: 480, percentage: 92 },
    { year: '2023', placed: 500, percentage: 95 }
  ];

  const successStories = [
    {
      name: 'Priya Sharma',
      course: 'B.Com (Hons)',
      company: 'HDFC Bank',
      package: '₹8.5 LPA',
      position: 'Financial Analyst',
      image: '/images/hero1.jpg',
      quote: 'The placement cell provided excellent guidance and preparation that helped me secure my dream job.'
    },
    {
      name: 'Rahul Kumar',
      course: 'BSc Computer Science',
      company: 'TCS',
      package: '₹6.2 LPA',
      position: 'Software Developer',
      image: '/images/hero2.jpg',
      quote: 'The technical training and mock interviews were instrumental in my placement success.'
    },
    {
      name: 'Anjali Patel',
      course: 'BA English',
      company: 'Wipro',
      package: '₹5.8 LPA',
      position: 'Content Specialist',
      image: '/images/hero3.jpg',
      quote: 'The college helped me discover my potential and guided me towards the right career path.'
    }
  ];

  const services = [
    {
      icon: <FaGraduationCap />,
      title: 'Career Counseling',
      description: 'Personalized guidance to help students choose the right career path'
    },
    {
      icon: <FaHandshake />,
      title: 'Industry Connect',
      description: 'Regular interaction with industry professionals and alumni'
    },
    {
      icon: <FaRocket />,
      title: 'Skill Development',
      description: 'Training programs to enhance technical and soft skills'
    },
    {
      icon: <MdWork />,
      title: 'Interview Preparation',
      description: 'Mock interviews and group discussions for better preparation'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <FaBriefcase className="mr-2" /> Career Success
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Placement
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Empowering students with industry-ready skills and connecting them with top employers for successful career launches.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                Placement Records
              </Button>
              <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
                Career Guidance
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
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Trends */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <MdTrendingUp className="mr-2" /> Growth Trends
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Placement Statistics</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Consistent growth in placement rates and student success over the years
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {placementTrends.map((trend, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300">
                <div className="text-3xl font-bold text-indigo-600 mb-2">{trend.year}</div>
                <div className="text-2xl font-bold text-gray-900 mb-1">{trend.placed}</div>
                <div className="text-sm text-gray-600 mb-3">Students Placed</div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                    style={{width: `${trend.percentage}%`}}
                  ></div>
                </div>
                <div className="text-sm font-medium text-indigo-600 mt-2">{trend.percentage}% Success Rate</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Recruiters */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <FaBuilding className="mr-2" /> Industry Partners
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Top Recruiters</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading companies that regularly recruit our talented graduates
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {topRecruiters.map((company, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <Image 
                    src={company.logo} 
                    alt={company.name} 
                    width={200}
                    height={96}
                    className="w-full h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h3>
                <p className="text-sm text-gray-600">{company.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <FaTrophy className="mr-2" /> Success Stories
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Alumni Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Inspiring stories of our graduates who have achieved remarkable success in their careers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image 
                    src={story.image} 
                    alt={story.name} 
                    width={400}
                    height={192}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {story.package}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{story.name}</h3>
                  <div className="text-blue-600 font-medium mb-1">{story.position}</div>
                  <div className="text-sm text-gray-600 mb-2">{story.company}</div>
                  <div className="text-sm text-gray-500 mb-4">{story.course}</div>
                  
                  <div className="bg-blue-50 rounded-lg p-4 mb-4">
                    <div className="flex items-start">
                      <FaStar className="text-yellow-500 mt-1 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-700 italic">{story.quote}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <FaHandshake className="mr-2" /> Our Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Placement Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to ensure every student is placement-ready
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
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
            Ready to Launch Your Career?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Join our successful alumni network and take the first step towards a rewarding career with our placement support.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
              Apply for Admission
            </Button>
            <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Contact Placement Cell
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}