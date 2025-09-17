'use client';
import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaGraduationCap, FaFileAlt, FaCheckCircle, FaCalendarAlt, FaDownload, FaAward, FaPhone, FaClipboardList } from 'react-icons/fa';

const admissionData = {
  'overview': {
    title: 'Admission Overview',
    icon: FaGraduationCap,
    content: {
      description: 'Welcome to Excellence College admissions. We offer comprehensive undergraduate and postgraduate programs designed to shape future leaders.',
      highlights: [
        'Merit-based admission process',
        'Multiple intake sessions',
        'Transparent selection criteria',
        'Equal opportunity for all students',
        'Online and offline application modes'
      ],
      process: [
        'Fill online application form',
        'Submit required documents',
        'Pay application fee',
        'Attend entrance test/interview',
        'Merit list publication',
        'Document verification',
        'Fee payment and admission confirmation'
      ]
    }
  },
  'apply-online': {
    title: 'Apply Online',
    icon: FaClipboardList,
    content: {
      description: 'Apply for admission through our secure online portal. Complete your application in simple steps.',
      steps: [
        'Create account on admission portal',
        'Fill personal and academic details',
        'Upload required documents',
        'Pay application fee online',
        'Submit application form',
        'Download acknowledgment receipt'
      ],
      requirements: [
        'Valid email ID and mobile number',
        'Scanned copies of certificates',
        'Passport size photograph',
        'Signature in JPG format',
        'Debit/Credit card for fee payment'
      ],
      fee: '₹500 for UG courses, ₹750 for PG courses'
    }
  },
  'eligibility': {
    title: 'Eligibility Criteria',
    icon: FaCheckCircle,
    content: {
      description: 'Check the eligibility requirements for different courses offered at our college.',
      undergraduate: [
        'BA: 12th pass with minimum 50% marks',
        'BCom: 12th pass with Commerce/Science (50% marks)',
        'BSc: 12th pass with Science stream (50% marks)'
      ],
      postgraduate: [
        'MA: Bachelor\'s degree in relevant field (50% marks)',
        'MCom: Bachelor\'s degree in Commerce (50% marks)',
        'MSc: Bachelor\'s degree in Science (50% marks)'
      ],
      general: [
        'Age limit: 17-25 years for UG, 21-30 years for PG',
        'Reserved category relaxation as per government norms',
        'Transfer students must have valid migration certificate'
      ]
    }
  },
  'fee-structure': {
    title: 'Fee Structure',
    icon: FaFileAlt,
    content: {
      description: 'Transparent and affordable fee structure for all courses with flexible payment options.',
      undergraduate: [
        { course: 'BA', annual: '₹25,000', semester: '₹12,500' },
        { course: 'BCom', annual: '₹30,000', semester: '₹15,000' },
        { course: 'BSc', annual: '₹35,000', semester: '₹17,500' }
      ],
      postgraduate: [
        { course: 'MA', annual: '₹40,000', semester: '₹20,000' },
        { course: 'MCom', annual: '₹45,000', semester: '₹22,500' },
        { course: 'MSc', annual: '₹50,000', semester: '₹25,000' }
      ],
      additional: [
        'Admission Fee: ₹5,000 (One time)',
        'Caution Deposit: ₹2,000 (Refundable)',
        'Library Fee: ₹1,000 per year',
        'Lab Fee: ₹3,000 per year (Science courses)'
      ]
    }
  },
  'important-dates': {
    title: 'Important Dates',
    icon: FaCalendarAlt,
    content: {
      description: 'Keep track of all important admission dates and deadlines.',
      dates: [
        { event: 'Application Form Release', date: 'March 1, 2024' },
        { event: 'Last Date to Apply', date: 'May 31, 2024' },
        { event: 'Entrance Test', date: 'June 15-20, 2024' },
        { event: 'Merit List Publication', date: 'June 25, 2024' },
        { event: 'Document Verification', date: 'June 28 - July 5, 2024' },
        { event: 'Fee Payment Deadline', date: 'July 10, 2024' },
        { event: 'Classes Commence', date: 'July 15, 2024' }
      ],
      note: 'All dates are tentative and subject to change. Please check official website for updates.'
    }
  },
  'prospectus': {
    title: 'Download Prospectus',
    icon: FaDownload,
    content: {
      description: 'Download our comprehensive prospectus containing detailed information about courses, facilities, and admission process.',
      documents: [
        { name: 'College Prospectus 2024-25', size: '2.5 MB', type: 'PDF' },
        { name: 'Undergraduate Courses Guide', size: '1.8 MB', type: 'PDF' },
        { name: 'Postgraduate Courses Guide', size: '1.5 MB', type: 'PDF' },
        { name: 'Fee Structure Details', size: '500 KB', type: 'PDF' },
        { name: 'Scholarship Information', size: '750 KB', type: 'PDF' }
      ],
      includes: [
        'Course curriculum and syllabus',
        'Faculty profiles and qualifications',
        'Campus facilities and infrastructure',
        'Placement statistics and records',
        'Student life and activities',
        'Admission process and requirements'
      ]
    }
  },
  'scholarships': {
    title: 'Scholarships',
    icon: FaAward,
    content: {
      description: 'Various scholarship opportunities available for deserving and meritorious students.',
      merit: [
        'Topper Scholarship: 100% fee waiver for rank 1-3',
        'Excellence Scholarship: 50% fee waiver for rank 4-10',
        'Merit Scholarship: 25% fee waiver for rank 11-25'
      ],
      needBased: [
        'Financial Aid: Up to 75% fee concession',
        'Minority Scholarship: As per government guidelines',
        'SC/ST Scholarship: Complete fee waiver',
        'OBC Scholarship: 50% fee concession'
      ],
      special: [
        'Sports Scholarship: For state/national level players',
        'Cultural Scholarship: For exceptional performers',
        'Alumni Scholarship: For children of alumni'
      ]
    }
  },
  'contact': {
    title: 'Admission Helpdesk',
    icon: FaPhone,
    content: {
      description: 'Get in touch with our admission team for any queries or assistance.',
      contacts: [
        { name: 'Dr. Rajesh Kumar', designation: 'Admission Officer', phone: '+91-9876543210', email: 'admissions@college.edu' },
        { name: 'Ms. Priya Sharma', designation: 'Assistant Registrar', phone: '+91-9876543211', email: 'registrar@college.edu' }
      ],
      office: {
        address: '123 Education Street, Knowledge City, State 12345',
        hours: 'Monday to Friday: 9:00 AM - 5:00 PM',
        saturday: 'Saturday: 9:00 AM - 1:00 PM',
        closed: 'Sunday and Public Holidays'
      },
      online: [
        'Live Chat: Available on website',
        'WhatsApp: +91-9876543212',
        'Email: help@college.edu',
        'Toll Free: 1800-123-4567'
      ]
    }
  }
};

const admissionSections = [
  { key: 'overview', label: 'Admission Overview', color: 'from-blue-500 to-blue-600' },
  { key: 'apply-online', label: 'Apply Online', color: 'from-green-500 to-green-600' },
  { key: 'eligibility', label: 'Eligibility Criteria', color: 'from-purple-500 to-purple-600' },
  { key: 'fee-structure', label: 'Fee Structure', color: 'from-red-500 to-red-600' },
  { key: 'important-dates', label: 'Important Dates', color: 'from-orange-500 to-orange-600' },
  { key: 'prospectus', label: 'Download Prospectus', color: 'from-indigo-500 to-indigo-600' },
  { key: 'scholarships', label: 'Scholarships', color: 'from-pink-500 to-pink-600' },
  { key: 'contact', label: 'Admission Helpdesk', color: 'from-teal-500 to-teal-600' },
];

function AdmissionsContent() {
  const searchParams = useSearchParams();
  const [selectedSection, setSelectedSection] = useState('overview');
  const currentSection = admissionData[selectedSection as keyof typeof admissionData];

  useEffect(() => {
    const section = searchParams.get('section');
    if (section && admissionData[section as keyof typeof admissionData]) {
      setSelectedSection(section);
    }
  }, [searchParams]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#022340] via-[#1e40af] to-[#7c3aed] py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Admissions 2024-25
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join Excellence College and embark on your journey towards academic excellence and professional success
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Section Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {admissionSections.map((section) => {
            const SectionIcon = admissionData[section.key as keyof typeof admissionData].icon;
            return (
              <button
                key={section.key}
                onClick={() => setSelectedSection(section.key)}
                className={`p-4 rounded-xl transition-all duration-300 transform hover:scale-105 ${
                  selectedSection === section.key
                    ? `bg-gradient-to-r ${section.color} text-white shadow-2xl`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:shadow-lg'
                }`}
              >
                <div className="flex items-center justify-center mb-2">
                  <SectionIcon className="text-2xl" />
                </div>
                <h3 className="font-semibold text-sm text-center">{section.label}</h3>
              </button>
            );
          })}
        </div>

        {/* Section Details */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className={`bg-gradient-to-r ${admissionSections.find(s => s.key === selectedSection)?.color} p-8 text-white`}>
            <div className="flex items-center gap-4">
              <currentSection.icon className="text-4xl" />
              <div>
                <h2 className="text-3xl font-bold">{currentSection.title}</h2>
                <p className="text-lg opacity-90">{currentSection.content.description}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            {/* Dynamic Content Based on Section */}
            {selectedSection === 'overview' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {(currentSection.content as {highlights?: string[]}).highlights?.map((item: string, index: number) => (
                      <div key={index} className="flex items-center gap-2 p-3 bg-blue-50 rounded-lg">
                        <FaCheckCircle className="text-blue-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Admission Process</h3>
                  <div className="space-y-3">
                    {(currentSection.content as {process?: string[]}).process?.map((step: string, index: number) => (
                      <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                          {index + 1}
                        </div>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {selectedSection === 'fee-structure' && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Undergraduate Courses</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Course</th>
                          <th className="border border-gray-300 p-3 text-left">Annual Fee</th>
                          <th className="border border-gray-300 p-3 text-left">Semester Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(currentSection.content as {undergraduate?: {course: string, annual: string, semester: string}[]}).undergraduate?.map((item: {course: string, annual: string, semester: string}, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-300 p-3">{item.course}</td>
                            <td className="border border-gray-300 p-3">{item.annual}</td>
                            <td className="border border-gray-300 p-3">{item.semester}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Postgraduate Courses</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left">Course</th>
                          <th className="border border-gray-300 p-3 text-left">Annual Fee</th>
                          <th className="border border-gray-300 p-3 text-left">Semester Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        {(currentSection.content as {postgraduate?: {course: string, annual: string, semester: string}[]}).postgraduate?.map((item: {course: string, annual: string, semester: string}, index: number) => (
                          <tr key={index}>
                            <td className="border border-gray-300 p-3">{item.course}</td>
                            <td className="border border-gray-300 p-3">{item.annual}</td>
                            <td className="border border-gray-300 p-3">{item.semester}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Other sections with simple list format */}
            {!['overview', 'fee-structure'].includes(selectedSection) && (
              <div className="space-y-6">
                {Object.entries(currentSection.content).map(([key, value]) => {
                  if (key === 'description') return null;
                  return (
                    <div key={key}>
                      <h3 className="text-xl font-bold mb-4 capitalize">{key.replace(/([A-Z])/g, ' $1')}</h3>
                      {Array.isArray(value) ? (
                        <div className="space-y-2">
                          {value.map((item, index) => (
                            <div key={index} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <span>{typeof item === 'object' ? `${item.event || item.name || ''}: ${item.date || item.designation || ''}` : item}</span>
                            </div>
                          ))}
                        </div>
                      ) : typeof value === 'object' ? (
                        <div className="space-y-2">
                          {Object.entries(value).map(([subKey, subValue]) => (
                            <div key={subKey} className="flex items-start gap-2 p-3 bg-gray-50 rounded-lg">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                              <span><strong>{subKey}:</strong> {String(subValue)}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="text-gray-700">{value}</p>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Admissions() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center"><div className="text-xl">Loading...</div></div>}>
      <AdmissionsContent />
    </Suspense>
  );
}