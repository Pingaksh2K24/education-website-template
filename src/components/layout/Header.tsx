import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-6">
              <Link href="/" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                About Us
              </Link>
              <Link href="/academics" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Academics
              </Link>
              <Link href="/admissions" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Admissions
              </Link>
              <Link href="/departments" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Departments
              </Link>
              <Link href="/faculty" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Faculty
              </Link>
              <Link href="/student-life" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Student Life
              </Link>
              <Link href="/placements" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Placements
              </Link>
              <Link href="/alumni" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Alumni
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-900 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}