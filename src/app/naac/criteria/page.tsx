export default function CriteriaPage() {
  const criteria = [
    {
      number: 1,
      title: "Curricular Aspects",
      description: "Curriculum design, development, and implementation",
      score: "3.8/4.0"
    },
    {
      number: 2,
      title: "Teaching-Learning and Evaluation",
      description: "Student-centric methods and evaluation processes",
      score: "3.7/4.0"
    },
    {
      number: 3,
      title: "Research, Innovations and Extension",
      description: "Research culture and extension activities",
      score: "3.5/4.0"
    },
    {
      number: 4,
      title: "Infrastructure and Learning Resources",
      description: "Physical and academic support facilities",
      score: "3.9/4.0"
    },
    {
      number: 5,
      title: "Student Support and Progression",
      description: "Student support services and career progression",
      score: "3.6/4.0"
    },
    {
      number: 6,
      title: "Governance, Leadership and Management",
      description: "Institutional governance and leadership quality",
      score: "3.8/4.0"
    },
    {
      number: 7,
      title: "Institutional Values and Best Practices",
      description: "Environmental consciousness and best practices",
      score: "3.4/4.0"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">NAAC Seven Criteria</h1>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-blue-800 mb-2">Overall CGPA: 3.65/4.0</h2>
          <p className="text-blue-700">Grade A+ Accreditation</p>
        </div>
        
        <div className="grid gap-6">
          {criteria.map((criterion, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                    {criterion.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{criterion.title}</h3>
                    <p className="text-gray-600">{criterion.description}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-green-600">{criterion.score}</div>
                  <div className="text-sm text-gray-500">Score</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-4">Assessment Methodology</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="font-semibold mb-2">Quantitative Metrics</h4>
              <p className="text-sm text-gray-600">Data-driven assessment parameters</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">📋</span>
              </div>
              <h4 className="font-semibold mb-2">Qualitative Metrics</h4>
              <p className="text-sm text-gray-600">Process and outcome evaluation</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🎯</span>
              </div>
              <h4 className="font-semibold mb-2">Best Practices</h4>
              <p className="text-sm text-gray-600">Innovation and excellence showcase</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}