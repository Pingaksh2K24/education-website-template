export default function AQARPage() {
  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">AQAR Reports</h1>
        <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-green-800 mb-4">Annual Quality Assurance Reports</h2>
          <p className="text-green-700">
            AQAR is a part of the post accreditation quality sustenance measures initiated by NAAC. 
            It helps institutions to maintain quality standards and continuous improvement.
          </p>
        </div>
        
        <div className="grid gap-6">
          {[
            { year: '2023-24', status: 'Submitted', date: 'June 2024' },
            { year: '2022-23', status: 'Approved', date: 'May 2023' },
            { year: '2021-22', status: 'Approved', date: 'April 2022' },
            { year: '2020-21', status: 'Approved', date: 'March 2021' }
          ].map((report, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold">AQAR {report.year}</h3>
                <p className="text-gray-600">Submitted: {report.date}</p>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  report.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {report.status}
                </span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Download PDF
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">AQAR Components</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Curricular Aspects
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Teaching-Learning and Evaluation
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Research, Innovations and Extension
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Infrastructure and Learning Resources
              </li>
            </ul>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Student Support and Progression
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Governance, Leadership and Management
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Institutional Values and Best Practices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}