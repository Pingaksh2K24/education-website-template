import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#022340] via-[#022340] to-[#022340] shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-18">
          <div className="hidden md:block">
            <div className="flex items-center justify-center space-x-1">
              <Link href="/" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                About Us
              </Link>
              <Link href="/academics" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Academics
              </Link>
              <Link href="/admissions" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Admissions
              </Link>
              <Link href="/departments" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Departments
              </Link>
              <Link href="/faculty" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Faculty
              </Link>
              <Link href="/student-life" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Student Life
              </Link>
              <Link href="/placements" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Placements
              </Link>
              <Link href="/alumni" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Alumni
              </Link>
              <Link href="/naac" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                NAAC
              </Link>
              <Link href="/contact" className="text-white hover:text-orange-300 hover:bg-white/10 px-4 py-3 text-sm font-medium rounded-lg transition-all duration-300 transform hover:scale-105">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}