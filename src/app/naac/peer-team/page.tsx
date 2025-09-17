export default function PeerTeamPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Peer Team Report</h1>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Peer Team Visit - March 2020</h2>
          <p className="text-purple-700 mb-4">
            The NAAC Peer Team conducted a comprehensive evaluation of our institution 
            across all seven criteria during their three-day visit.
          </p>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
            Download Peer Team Report (PDF)
          </button>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg font-bold mb-2">Dr. Rajesh Kumar</h3>
            <p className="text-gray-600 mb-2">Chairperson</p>
            <p className="text-sm text-gray-500">Former Vice Chancellor, ABC University</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg font-bold mb-2">Prof. Priya Sharma</h3>
            <p className="text-gray-600 mb-2">Member Coordinator</p>
            <p className="text-sm text-gray-500">Professor, XYZ Institute</p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <h3 className="text-lg font-bold mb-2">Dr. Amit Patel</h3>
            <p className="text-gray-600 mb-2">Member</p>
            <p className="text-sm text-gray-500">Dean, PQR College</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Key Observations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-green-700 mb-2">Strengths Identified</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Strong academic leadership</li>
                <li>• Excellent infrastructure facilities</li>
                <li>• High faculty qualification ratio</li>
                <li>• Effective governance structure</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-orange-700 mb-2">Areas for Improvement</h4>
              <ul className="space-y-1 text-gray-700">
                <li>• Enhanced research output</li>
                <li>• Industry collaboration expansion</li>
                <li>• Digital infrastructure upgrade</li>
                <li>• Alumni engagement programs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}