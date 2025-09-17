import { MdEmail, MdPhone } from 'react-icons/md';

export default function TopBar() {
  return (
    <div className="bg-[#022340] text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center text-sm">
          <div className="flex space-x-4">
            <span className="flex items-center space-x-2">
              <MdEmail className="text-sm" />
              <span>info@college.edu</span>
            </span>
            <span className="flex items-center space-x-2">
              <MdPhone className="text-sm" />
              <span>+1 (555) 123-4567</span>
            </span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-300">Student Portal</a>
            <a href="#" className="hover:text-gray-300">Staff Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}