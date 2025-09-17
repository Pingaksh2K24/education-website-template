export default function BestPracticesPage() {
  const practices = [
    {
      title: "Green Campus Initiative",
      description: "Comprehensive environmental sustainability program with solar energy, waste management, and carbon footprint reduction.",
      impact: "50% reduction in carbon emissions",
      year: "2019-Present"
    },
    {
      title: "Industry-Academia Partnership",
      description: "Strategic collaborations with leading industries for curriculum development, internships, and placement opportunities.",
      impact: "95% placement rate achieved",
      year: "2018-Present"
    },
    {
      title: "Digital Learning Platform",
      description: "Integrated e-learning system with AI-powered personalized learning paths and virtual laboratories.",
      impact: "Enhanced learning outcomes by 40%",
      year: "2020-Present"
    },
    {
      title: "Community Outreach Program",
      description: "Regular community service activities including health camps, literacy programs, and skill development workshops.",
      impact: "Benefited 10,000+ community members",
      year: "2017-Present"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Best Practices</h1>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-4">Institutional Best Practices</h2>
          <p className="text-orange-700">
            Our institution has developed and implemented several innovative practices that have 
            significantly contributed to quality enhancement and stakeholder satisfaction.
          </p>
        </div>
        
        <div className="grid gap-8">
          {practices.map((practice, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{practice.title}</h3>
                  <p className="text-gray-600 mb-4">{practice.description}</p>
                </div>
                <div className="text-right ml-6">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {practice.year}
                  </div>
                </div>
              </div>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-1">Impact Achieved</h4>
                <p className="text-green-700">{practice.impact}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Recognition & Awards</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Best Green Campus Award 2023
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Excellence in Industry Partnership 2022
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Digital Innovation in Education 2021
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-yellow-500 rounded-full mr-3"></span>
                Community Service Excellence 2020
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Implementation Framework</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-blue-600">1</span>
                </div>
                <span>Identification & Planning</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-green-600">2</span>
                </div>
                <span>Stakeholder Engagement</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-orange-600">3</span>
                </div>
                <span>Implementation & Monitoring</span>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm font-bold text-purple-600">4</span>
                </div>
                <span>Evaluation & Improvement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}