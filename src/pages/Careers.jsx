import PageHeader from '../components/PageHeader';

export default function Careers() {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Careers"
        description="Join our team of healthcare professionals"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Current Openings</h2>
            <p className="text-gray-600">Check back soon for available positions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}