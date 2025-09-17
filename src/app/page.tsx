import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative z-10 flex items-center h-full">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">Lorem Ipsum Dolor</h1>
              <p className="text-xl text-white mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Button>Read More</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Courses */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-8">Our Courses</h2>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-4"></span>
                  BA
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-4"></span>
                  BCom
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-4"></span>
                  BSc
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-4"></span>
                  MSc
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-900 rounded-full mr-4"></span>
                  BCA
                </li>
              </ul>
            </div>

            {/* About Us */}
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-4">About Us</h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lorem Ipsum Dolor</h3>
              <p className="text-gray-700 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Admissions Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616c78107ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                alt="Student" 
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">Admissions</h2>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Lorem Ipsum Dolor</h3>
              <p className="text-gray-700 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Button>Apply Now</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}