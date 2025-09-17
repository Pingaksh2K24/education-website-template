export default function SSRPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Self Study Report (SSR)</h1>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">SSR 2020 - Cycle 3</h2>
          <p className="text-blue-700 mb-4">
            The Self Study Report is a comprehensive document that reflects the institution&apos;s 
            performance across seven criteria as defined by NAAC.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Download SSR (PDF)
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">SSR Components</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Executive Summary
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Institutional Profile
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Seven Criteria Analysis
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Supporting Documents
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Annexures
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Key Highlights</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Comprehensive institutional analysis</li>
              <li>• Evidence-based documentation</li>
              <li>• Stakeholder feedback integration</li>
              <li>• Quality enhancement measures</li>
              <li>• Future development plans</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}