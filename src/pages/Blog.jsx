import PageHeader from '../components/PageHeader';

export default function Blog() {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Blog & Resources"
        description="Stay updated with the latest in healthcare"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Latest Articles</h2>
          <p className="text-gray-600">Coming soon! Check back for articles and resources.</p>
        </div>
      </div>
    </div>
  );
}