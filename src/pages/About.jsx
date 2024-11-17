import PageHeader from '../components/PageHeader';

export default function About() {
  return (
    <div className="bg-white">
      <PageHeader
        title="About Us"
        description="Leading the way in healthcare education and emergency response training"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At Equinox Emergency College, we are dedicated to providing comprehensive healthcare education and training to empower the next generation of medical professionals and caregivers. Our mission is to bridge the gap between theoretical knowledge and practical application in emergency medical care and home healthcare services.
            </p>
            <p className="text-gray-600">
              We strive to maintain the highest standards of education while making our programs accessible to all who wish to serve in the healthcare field. Through our diverse range of courses and hands-on training programs, we prepare our students for the real-world challenges they'll face in their careers.
            </p>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">1</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Excellence</h3>
                  <p className="text-gray-600">Commitment to providing the highest quality education and training</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">2</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Innovation</h3>
                  <p className="text-gray-600">Embracing new technologies and methods in healthcare education</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="h-6 w-6 flex items-center justify-center rounded-full bg-blue-100 text-blue-600 mr-3">3</span>
                <div>
                  <h3 className="font-semibold text-gray-900">Integrity</h3>
                  <p className="text-gray-600">Maintaining ethical standards and professional conduct</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}