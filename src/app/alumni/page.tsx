'use client';
import { FaUsers, FaGlobe, FaTrophy, FaHandshake, FaStar, FaLinkedin, FaEnvelope, FaCalendar, FaGraduationCap, FaBuilding, FaHeart } from 'react-icons/fa';
import { MdWork, MdBusiness, MdSchool } from 'react-icons/md';
import Button from '@/components/ui/Button';
import Image from 'next/image';
export default function AlumniPage() {
  const stats = [
    { icon: <FaUsers />, number: '50,000+', label: 'Global Alumni' },
    { icon: <FaGlobe />, number: '75+', label: 'Countries' },
    { icon: <FaTrophy />, number: '500+', label: 'Industry Leaders' },
    { icon: <FaHandshake />, number: '95%', label: 'Network Engagement' }
  ];

  const notableAlumni = [
    {
      name: 'Dr. Rajesh Mehta',
      batch: 'Class of 1995',
      position: 'CEO, Tech Innovations Ltd',
      achievement: 'Forbes 40 Under 40',
      image: '/images/hero1.jpg',
      company: 'Tech Innovations Ltd',
      linkedin: '#',
      description: 'Leading digital transformation in healthcare technology'
    },
    {
      name: 'Priya Sharma',
      batch: 'Class of 2000',
      position: 'Director, World Bank',
      achievement: 'UN Women Leadership Award',
      image: '/images/hero2.jpg',
      company: 'World Bank',
      linkedin: '#',
      description: 'Pioneering sustainable development initiatives globally'
    },
    {
      name: 'Amit Kumar',
      batch: 'Class of 1998',
      position: 'Founder & CTO, StartupXYZ',
      achievement: 'Entrepreneur of the Year',
      image: '/images/hero3.jpg',
      company: 'StartupXYZ',
      linkedin: '#',
      description: 'Building next-generation AI solutions for businesses'
    },
    {
      name: 'Dr. Sunita Patel',
      batch: 'Class of 1992',
      position: 'Chief Medical Officer',
      achievement: 'Medical Excellence Award',
      image: '/images/hero4.jpg',
      company: 'Apollo Hospitals',
      linkedin: '#',
      description: 'Advancing healthcare through innovative medical practices'
    },
    {
      name: 'Vikram Singh',
      batch: 'Class of 2005',
      position: 'Senior Vice President',
      achievement: 'Banking Innovation Award',
      image: '/images/hero1.jpg',
      company: 'HDFC Bank',
      linkedin: '#',
      description: 'Transforming digital banking experiences'
    },
    {
      name: 'Meera Joshi',
      batch: 'Class of 2003',
      position: 'Creative Director',
      achievement: 'Cannes Lions Winner',
      image: '/images/hero2.jpg',
      company: 'Ogilvy & Mather',
      linkedin: '#',
      description: 'Creating award-winning advertising campaigns'
    }
  ];

  const industries = [
    { name: 'Technology', count: '12,000+', icon: <MdWork />, color: 'from-blue-500 to-indigo-600' },
    { name: 'Finance & Banking', count: '8,500+', icon: <MdBusiness />, color: 'from-green-500 to-emerald-600' },
    { name: 'Healthcare', count: '6,200+', icon: <FaHeart />, color: 'from-red-500 to-pink-600' },
    { name: 'Education', count: '5,800+', icon: <MdSchool />, color: 'from-purple-500 to-indigo-600' },
    { name: 'Government', count: '4,500+', icon: <FaBuilding />, color: 'from-orange-500 to-red-500' },
    { name: 'Entrepreneurship', count: '3,200+', icon: <FaTrophy />, color: 'from-yellow-500 to-orange-500' }
  ];

  const events = [
    {
      title: 'Annual Alumni Meet 2024',
      date: 'March 15, 2024',
      location: 'College Campus',
      description: 'Reconnect with classmates and celebrate achievements',
      image: '/images/hero1.jpg'
    },
    {
      title: 'Global Alumni Conference',
      date: 'June 20, 2024',
      location: 'Virtual Event',
      description: 'International networking and knowledge sharing',
      image: '/images/hero2.jpg'
    },
    {
      title: 'Mentorship Program Launch',
      date: 'August 10, 2024',
      location: 'Online Platform',
      description: 'Connect experienced alumni with current students',
      image: '/images/hero3.jpg'
    }
  ];

  const benefits = [
    {
      icon: <FaUsers />,
      title: 'Global Network',
      description: 'Connect with 50,000+ alumni worldwide across industries'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Mentorship',
      description: 'Guide current students and share your expertise'
    },
    {
      icon: <FaCalendar />,
      title: 'Exclusive Events',
      description: 'Access to alumni-only events and networking opportunities'
    },
    {
      icon: <FaHandshake />,
      title: 'Career Support',
      description: 'Job referrals and professional development resources'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <FaUsers className="mr-2" /> Alumni Network
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Our Alumni
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Network
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              A global community of 50,000+ graduates making their mark across industries and continents, united by shared values and lifelong connections.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                Join Alumni Network
              </Button>
              <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
                Alumni Directory
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
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <FaTrophy className="mr-2" /> Distinguished Alumni
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Notable Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet some of our most accomplished graduates who are making a difference in their fields
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {notableAlumni.map((alumni, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <Image 
                    src={alumni.image} 
                    alt={alumni.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {alumni.batch}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex space-x-3">
                      <a href={alumni.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors">
                        <FaEnvelope />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{alumni.name}</h3>
                  <div className="text-blue-600 font-medium mb-1">{alumni.position}</div>
                  <div className="text-sm text-gray-600 mb-3">{alumni.company}</div>
                  
                  <div className="bg-green-50 rounded-lg p-3 mb-4">
                    <div className="flex items-center">
                      <FaStar className="text-yellow-500 mr-2" />
                      <span className="text-sm font-medium text-green-800">{alumni.achievement}</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-600">{alumni.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Distribution */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <MdWork className="mr-2" /> Industry Presence
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Alumni by Industry</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our graduates are making their mark across diverse industries worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${industry.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-4`}>
                  {industry.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{industry.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{industry.count}</div>
                <div className="text-sm text-gray-600">Alumni working in this sector</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <FaCalendar className="mr-2" /> Alumni Events
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Upcoming Events</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay connected through our exclusive alumni events and networking opportunities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <FaCalendar className="mr-2" />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Benefits */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <FaHandshake className="mr-2" /> Member Benefits
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Alumni Benefits</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Exclusive advantages and opportunities for our alumni community members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
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
            Stay Connected with Your Alma Mater
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Join our thriving alumni community and continue to be part of our institution&apos;s ongoing success story.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
              Update Your Profile
            </Button>
            <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Alumni Portal
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}