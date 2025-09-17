export default function BannerComponent() {
  return (
    <div className="bg-white py-6 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo and College Info */}
          <div className="flex items-center space-x-6">
            {/* Logo */}
            <div className="w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl font-bold">SC</span>
            </div>
            
            {/* College Details */}
            <div>
              <h1 className="text-2xl font-bold text-blue-900">Siddhivinayak College of Technology & Research</h1>
              <p className="text-sm text-gray-600">Affiliated to University of Mumbai</p>
              <p className="text-xs text-gray-500">NAAC A+ Accredited | Established 1869</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="hidden md:block text-right">
            <p className="text-sm text-gray-700 font-medium">Mumbai, Maharashtra</p>
            <p className="text-xs text-gray-500">ISO 9001:2015 Certified</p>
          </div>
        </div>
      </div>
    </div>
  );
}