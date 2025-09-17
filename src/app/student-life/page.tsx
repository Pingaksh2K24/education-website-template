'use client';
import { FaUsers, FaMusic, FaFootballBall, FaTheaterMasks, FaCamera, FaBook, FaHeart, FaHome, FaCoffee, FaWifi, FaBus, FaMedkit } from 'react-icons/fa';
import { MdSports, MdLibraryBooks, MdRestaurant, MdLocalHospital } from 'react-icons/md';
import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function StudentLifePage() {
  const stats = [
    { icon: <FaUsers />, number: '50+', label: 'Student Clubs' },
    { icon: <FaTheaterMasks />, number: '100+', label: 'Annual Events' },
    { icon: <FaFootballBall />, number: '15+', label: 'Sports Teams' },
    { icon: <FaHome />, number: '2000+', label: 'Hostel Capacity' }
  ];

  const activities = [
    {
      category: 'Cultural Activities',
      icon: <FaTheaterMasks />,
      color: 'from-purple-500 to-pink-500',
      items: ['Annual Cultural Festival', 'Drama & Theatre', 'Music Competitions', 'Dance Performances', 'Art Exhibitions']
    },
    {
      category: 'Sports & Recreation',
      icon: <FaFootballBall />,
      color: 'from-green-500 to-emerald-600',
      items: ['Cricket & Football', 'Basketball & Volleyball', 'Athletics Track', 'Indoor Games', 'Fitness Center']
    },
    {
      category: 'Academic Clubs',
      icon: <FaBook />,
      color: 'from-blue-500 to-indigo-600',
      items: ['Debate Society', 'Science Club', 'Literary Society', 'Quiz Club', 'Research Groups']
    },
    {
      category: 'Special Interest',
      icon: <FaCamera />,
      color: 'from-orange-500 to-red-500',
      items: ['Photography Club', 'Environmental Club', 'Social Service', 'Tech Innovation', 'Entrepreneurship']
    }
  ];

  const facilities = [
    {
      name: 'Modern Library',
      icon: <MdLibraryBooks />,
      description: '24/7 access with digital resources and study spaces',
      image: '/images/hero1.jpg'
    },
    {
      name: 'Dining Facilities',
      icon: <MdRestaurant />,
      description: 'Multiple cafeterias with diverse cuisine options',
      image: '/images/hero2.jpg'
    },
    {
      name: 'Sports Complex',
      icon: <MdSports />,
      description: 'State-of-the-art sports facilities and gymnasium',
      image: '/images/hero3.jpg'
    },
    {
      name: 'Health Center',
      icon: <MdLocalHospital />,
      description: 'On-campus medical facility with qualified staff',
      image: '/images/hero4.jpg'
    }
  ];

  const services = [
    { icon: <FaWifi />, title: 'Free WiFi', description: 'High-speed internet across campus' },
    { icon: <FaBus />, title: 'Transport', description: 'College bus service to major city points' },
    { icon: <FaMedkit />, title: 'Healthcare', description: '24/7 medical assistance and first aid' },
    { icon: <FaCoffee />, title: 'Cafeterias', description: 'Multiple dining options and food courts' }
  ];

  const events = [
    {
      name: 'Annual Cultural Fest',
      date: 'March 2024',
      description: 'Three-day celebration of arts, culture, and talent',
      image: '/images/hero1.jpg'
    },
    {
      name: 'Sports Championship',
      date: 'February 2024',
      description: 'Inter-college sports competition and tournaments',
      image: '/images/hero2.jpg'
    },
    {
      name: 'Tech Innovation Fair',
      date: 'April 2024',
      description: 'Showcase of student projects and innovations',
      image: '/images/hero3.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-blue-900 to-purple-900 py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <div className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium mb-8 border border-white/20">
              <FaHeart className="mr-2" /> Campus Life
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Vibrant
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
                Student Life
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed mb-12">
              Experience a dynamic campus environment filled with opportunities for growth, friendship, and unforgettable memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
                Explore Activities
              </Button>
              <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
                Virtual Campus Tour
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
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-6">
              <FaUsers className="mr-2" /> Student Activities
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Campus Activities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover diverse opportunities to pursue your passions and develop new skills
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6`}>
                  {activity.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">{activity.category}</h3>
                <ul className="space-y-3">
                  {activity.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
              <FaHome className="mr-2" /> Campus Facilities
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">World-Class Facilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Modern amenities and services designed to enhance your college experience
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                <div className="relative overflow-hidden">
                  <Image 
                    src={facility.image} 
                    alt={facility.name} 
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white text-xl">
                      {facility.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{facility.name}</h3>
                  <p className="text-gray-600 text-sm">{facility.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-6">
              <FaCoffee className="mr-2" /> Student Services
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Essential Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive support services to make your campus life comfortable and convenient
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-6">
              <FaMusic className="mr-2" /> Upcoming Events
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Don&apos;t Miss Out</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with exciting events and activities happening on campus
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden">
                  <Image 
                    src={event.image} 
                    alt={event.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.name}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900 to-blue-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Join Our Community?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            Become part of a vibrant student community where lifelong friendships are made and memories are created.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transform hover:scale-105 transition-all duration-300">
              Apply for Admission
            </Button>
            <button className="px-8 py-3 border-2 border-white/30 text-white hover:bg-white/10 rounded-lg font-medium transition-all duration-300 backdrop-blur-sm">
              Schedule Campus Visit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}