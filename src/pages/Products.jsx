import PageHeader from '../components/PageHeader';

export default function Products() {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Medical Equipment"
        description="High-quality medical equipment for sale and rental"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Product cards will go here */}
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold">Coming Soon</h3>
            <p className="text-gray-600">Our product catalog is being updated.</p>
          </div>
        </div>
      </div>
    </div>
  );
}