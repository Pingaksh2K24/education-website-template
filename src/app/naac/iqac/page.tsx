export default function IQACPage() {
  const members = [
    { name: "Dr. Rajesh Kumar", position: "Chairperson", department: "Principal" },
    { name: "Prof. Priya Sharma", position: "Coordinator", department: "English Department" },
    { name: "Dr. Amit Patel", position: "Member", department: "Science Department" },
    { name: "Ms. Sunita Verma", position: "Administrative Officer", department: "Administration" },
    { name: "Mr. Vikram Singh", position: "Industry Representative", department: "TCS Ltd." },
    { name: "Ms. Meera Joshi", position: "Alumni Representative", department: "Batch 2015" }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">IQAC - Internal Quality Assurance Cell</h1>
        
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-indigo-800 mb-4">About IQAC</h2>
          <p className="text-indigo-700 mb-4">
            The Internal Quality Assurance Cell (IQAC) is a post-accreditation quality sustenance measure 
            as per the guidelines of NAAC. It ensures continuous improvement in the academic and 
            administrative performance of the institution.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Objectives</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                <span>Ensure heightened level of clarity and focus in institutional functioning</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                <span>Ensure internalization of quality culture</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                <span>Ensure enhancement and coordination among various activities</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3 mt-2"></span>
                <span>Provide a sound basis for decision-making</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold mb-4">Functions</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                <span>Development and application of quality benchmarks</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                <span>Facilitating the creation of learner-centric environment</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                <span>Collection and analysis of feedback from stakeholders</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2"></span>
                <span>Preparation of Annual Quality Assurance Report (AQAR)</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h3 className="text-xl font-bold mb-6">IQAC Committee Members</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <h4 className="font-semibold text-gray-900">{member.name}</h4>
                <p className="text-blue-600 text-sm font-medium">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.department}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h4 className="font-bold mb-2">Quality Monitoring</h4>
            <p className="text-sm text-gray-600">Continuous assessment and improvement of institutional processes</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📈</span>
            </div>
            <h4 className="font-bold mb-2">Performance Enhancement</h4>
            <p className="text-sm text-gray-600">Strategic initiatives for academic and administrative excellence</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="font-bold mb-2">Stakeholder Satisfaction</h4>
            <p className="text-sm text-gray-600">Ensuring quality education and services for all stakeholders</p>
          </div>
        </div>
      </div>
    </div>
  );
}