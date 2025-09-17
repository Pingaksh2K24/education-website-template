'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaGraduationCap, FaUsers, FaBook, FaFlask, FaCalculator, FaGlobe, FaHistory, FaLanguage } from 'react-icons/fa';

const departmentsData = {
  'ba': {
    name: 'Bachelor of Arts (BA)',
    icon: FaBook,
    description: 'Comprehensive liberal arts education with focus on humanities and social sciences',
    duration: '3 Years',
    seats: '120',
    subjects: ['English Literature', 'History', 'Political Science', 'Psychology', 'Sociology', 'Philosophy'],
    eligibility: '12th Pass with minimum 50% marks',
    career: ['Civil Services', 'Teaching', 'Journalism', 'Social Work', 'Content Writing', 'Research'],
    hod: 'Dr. Priya Sharma',
    faculty: 15
  },
  'bcom': {
    name: 'Bachelor of Commerce (BCom)',
    icon: FaCalculator,
    description: 'Professional commerce education with emphasis on business and finance',
    duration: '3 Years',
    seats: '100',
    subjects: ['Accounting', 'Business Studies', 'Economics', 'Statistics', 'Business Law', 'Taxation'],
    eligibility: '12th Pass with Commerce/Science with minimum 50% marks',
    career: ['Chartered Accountant', 'Banking', 'Finance Manager', 'Business Analyst', 'Entrepreneur', 'Auditor'],
    hod: 'Prof. Rajesh Kumar',
    faculty: 12
  },
  'bsc': {
    name: 'Bachelor of Science (BSc)',
    icon: FaFlask,
    description: 'Scientific education with practical laboratory experience',
    duration: '3 Years',
    seats: '80',
    subjects: ['Physics', 'Chemistry', 'Mathematics', 'Biology', 'Computer Science', 'Statistics'],
    eligibility: '12th Pass with Science stream and minimum 50% marks',
    career: ['Research Scientist', 'Lab Technician', 'Data Analyst', 'Software Developer', 'Healthcare', 'Teaching'],
    hod: 'Dr. Amit Patel',
    faculty: 18
  },
  'ma': {
    name: 'Master of Arts (MA)',
    icon: FaLanguage,
    description: 'Advanced studies in humanities with research opportunities',
    duration: '2 Years',
    seats: '60',
    subjects: ['Advanced Literature', 'Research Methodology', 'Cultural Studies', 'Linguistics', 'Philosophy', 'History'],
    eligibility: 'Bachelor\'s degree in relevant field with minimum 50% marks',
    career: ['Professor', 'Researcher', 'Writer', 'Translator', 'Cultural Analyst', 'Policy Maker'],
    hod: 'Dr. Sunita Verma',
    faculty: 10
  },
  'mcom': {
    name: 'Master of Commerce (MCom)',
    icon: FaGlobe,
    description: 'Advanced commerce studies with specialization options',
    duration: '2 Years',
    seats: '50',
    subjects: ['Advanced Accounting', 'Financial Management', 'Business Research', 'International Business', 'Corporate Law', 'Taxation'],
    eligibility: 'Bachelor\'s degree in Commerce with minimum 50% marks',
    career: ['Financial Analyst', 'Investment Banker', 'Tax Consultant', 'Business Consultant', 'CFO', 'Entrepreneur'],
    hod: 'Prof. Vikash Singh',
    faculty: 8
  },
  'msc': {
    name: 'Master of Science (MSc)',
    icon: FaHistory,
    description: 'Advanced scientific research and specialized studies',
    duration: '2 Years',
    seats: '40',
    subjects: ['Advanced Physics', 'Organic Chemistry', 'Applied Mathematics', 'Biotechnology', 'Computer Applications', 'Research Methods'],
    eligibility: 'Bachelor\'s degree in Science with minimum 50% marks',
    career: ['Research Scientist', 'Lab Manager', 'Quality Analyst', 'Technical Consultant', 'R&D Specialist', 'Professor'],
    hod: 'Dr. Neha Gupta',
    faculty: 12
  }
};

const departments = [
  { key: 'ba', label: 'Bachelor of Arts (BA)', color: 'from-blue-500 to-blue-600' },
  { key: 'bcom', label: 'Bachelor of Commerce (BCom)', color: 'from-green-500 to-green-600' },
  { key: 'bsc', label: 'Bachelor of Science (BSc)', color: 'from-purple-500 to-purple-600' },
  { key: 'ma', label: 'Master of Arts (MA)', color: 'from-red-500 to-red-600' },
  { key: 'mcom', label: 'Master of Commerce (MCom)', color: 'from-orange-500 to-orange-600' },
  { key: 'msc', label: 'Master of Science (MSc)', color: 'from-indigo-500 to-indigo-600' },
];

function DepartmentsContent() {
  const searchParams = useSearchParams();
  const [selectedDept, setSelectedDept] = useState('ba');
  const currentDept = departmentsData[selectedDept as keyof typeof departmentsData];

  useEffect(() => {
    const dept = searchParams.get('dept');
    if (dept && departmentsData[dept as keyof typeof departmentsData]) {
      setSelectedDept(dept);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#022340] via-[#1e40af] to-[#7c3aed] py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Academic Departments
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Explore our diverse range of academic programs designed to shape future leaders
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Department Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {departments.map((dept) => {
            const DeptIcon = departmentsData[dept.key as keyof typeof departmentsData].icon;
            return (
              <button
                key={dept.key}
                onClick={() => setSelectedDept(dept.key)}
                className={`p-6 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                  selectedDept === dept.key
                    ? `bg-gradient-to-r ${dept.color} text-white shadow-2xl`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-center mb-4">
                  <DeptIcon className="text-4xl" />
                </div>
                <h3 className="font-bold text-lg text-center">{dept.label}</h3>
              </button>
            );
          })}
        </div>

        {/* Department Details */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className={`bg-gradient-to-r ${departments.find(d => d.key === selectedDept)?.color} p-8 text-white`}>
            <div className="flex items-center gap-4 mb-4">
              <currentDept.icon className="text-5xl" />
              <div>
                <h2 className="text-3xl font-bold">{currentDept.name}</h2>
                <p className="text-lg opacity-90">{currentDept.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Quick Info */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600">{currentDept.duration}</div>
                <div className="text-sm text-gray-600">Duration</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <div className="text-2xl font-bold text-green-600">{currentDept.seats}</div>
                <div className="text-sm text-gray-600">Total Seats</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600">{currentDept.faculty}</div>
                <div className="text-sm text-gray-600">Faculty Members</div>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <div className="text-2xl font-bold text-orange-600">{currentDept.hod}</div>
                <div className="text-sm text-gray-600">Head of Department</div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Subjects */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaBook className="text-blue-500" />
                  Core Subjects
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {currentDept.subjects.map((subject, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-gray-700">{subject}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career Opportunities */}
              <div className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <FaGraduationCap className="text-green-500" />
                  Career Opportunities
                </h3>
                <div className="grid grid-cols-1 gap-2">
                  {currentDept.career.map((career, index) => (
                    <div key={index} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Eligibility */}
            <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-800 mb-3 flex items-center gap-2">
                <FaUsers className="text-indigo-500" />
                Eligibility Criteria
              </h3>
              <p className="text-gray-700 text-lg">{currentDept.eligibility}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Departments() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <DepartmentsContent />
    </Suspense>
  );
}