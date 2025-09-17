export default function Footer() {
  return (
    <footer className="bg-[#022340] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* College Logo */}
          <div className="md:col-span-1">
            <h2 className="text-4xl font-bold mb-8">College</h2>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-lg">
              <li><a href="/" className="hover:text-gray-300">Home</a></li>
              <li><a href="/about" className="hover:text-gray-300">About</a></li>
              <li><a href="/courses" className="hover:text-gray-300">Courses</a></li>
              <li><a href="/admissions" className="hover:text-gray-300">Admissions</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact</h3>
            <div className="space-y-3 text-lg">
              <p>1234 Street Name</p>
              <p>City, State 12345</p>
              <p>123-456-7890</p>
              <p>info@example.com</p>
            </div>
          </div>

          {/* Follow Us & Newsletter */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex space-x-4 mb-8">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-sm font-bold">f</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-sm font-bold">t</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-sm font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded flex items-center justify-center">
                <span className="text-sm font-bold">yt</span>
              </div>
            </div>
            
            <h4 className="text-xl font-bold mb-4">Newsletter</h4>
            <div className="space-y-3">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-4 py-3 rounded bg-white text-gray-800 placeholder-gray-500"
                suppressHydrationWarning
              />
              <button 
                className="w-full bg-blue-800 hover:bg-blue-700 text-white py-3 px-4 rounded font-medium"
                suppressHydrationWarning
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}