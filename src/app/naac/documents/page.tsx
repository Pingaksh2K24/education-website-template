export default function DocumentsPage() {
  const documents = [
    {
      category: "Accreditation Documents",
      files: [
        { name: "NAAC Certificate A+", type: "PDF", size: "2.5 MB" },
        { name: "Self Study Report 2020", type: "PDF", size: "15.2 MB" },
        { name: "Peer Team Report", type: "PDF", size: "8.7 MB" },
        { name: "Institutional Profile", type: "PDF", size: "3.1 MB" }
      ]
    },
    {
      category: "Quality Assurance Reports",
      files: [
        { name: "AQAR 2023-24", type: "PDF", size: "5.8 MB" },
        { name: "AQAR 2022-23", type: "PDF", size: "5.2 MB" },
        { name: "AQAR 2021-22", type: "PDF", size: "4.9 MB" },
        { name: "AQAR 2020-21", type: "PDF", size: "4.7 MB" }
      ]
    },
    {
      category: "Policies & Procedures",
      files: [
        { name: "Academic Policy", type: "PDF", size: "1.8 MB" },
        { name: "Research Policy", type: "PDF", size: "2.1 MB" },
        { name: "Admission Policy", type: "PDF", size: "1.5 MB" },
        { name: "Examination Policy", type: "PDF", size: "2.3 MB" }
      ]
    },
    {
      category: "Best Practices Documentation",
      files: [
        { name: "Green Campus Initiative", type: "PDF", size: "3.2 MB" },
        { name: "Industry Partnership Model", type: "PDF", size: "2.8 MB" },
        { name: "Digital Learning Framework", type: "PDF", size: "4.1 MB" },
        { name: "Community Outreach Programs", type: "PDF", size: "2.9 MB" }
      ]
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-center mb-8">Documents & Policies</h1>
        
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">NAAC Related Documents</h2>
          <p className="text-gray-700">
            Access all NAAC accreditation documents, quality assurance reports, institutional policies, 
            and best practices documentation. All documents are available for download in PDF format.
          </p>
        </div>
        
        <div className="grid gap-8">
          {documents.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-3">
                {category.category}
              </h3>
              <div className="grid gap-4">
                {category.files.map((file, fileIndex) => (
                  <div key={fileIndex} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                        <span className="text-red-600 font-bold text-sm">{file.type}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{file.name}</h4>
                        <p className="text-sm text-gray-500">Size: {file.size}</p>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm">
                        View
                      </button>
                      <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm">
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-bold text-blue-800 mb-3">Document Access Information</h3>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h4 className="font-semibold mb-2">For Students & Faculty:</h4>
              <p className="text-blue-700">All documents are freely accessible for educational and research purposes.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">For External Users:</h4>
              <p className="text-blue-700">Documents are available for transparency and public information as per NAAC guidelines.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}