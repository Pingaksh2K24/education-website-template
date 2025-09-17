export default function AccreditationPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">NAAC Accreditation Status</h1>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <div className="flex items-center">
            <div className="text-green-600 text-6xl font-bold mr-6">A+</div>
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-2">NAAC Grade A+</h2>
              <p className="text-green-700">Valid from 2020 to 2025</p>
              <p className="text-green-700">CGPA: 3.65 out of 4.0</p>
            </div>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Accreditation Details</h3>
            <ul className="space-y-2">
              <li><strong>Institution:</strong> Excellence College</li>
              <li><strong>Grade:</strong> A+</li>
              <li><strong>CGPA:</strong> 3.65</li>
              <li><strong>Valid Period:</strong> 2020-2025</li>
              <li><strong>Peer Team Visit:</strong> March 2020</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Key Strengths</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Excellent academic infrastructure</li>
              <li>• Qualified and experienced faculty</li>
              <li>• Strong industry partnerships</li>
              <li>• High placement rates</li>
              <li>• Research and innovation focus</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}