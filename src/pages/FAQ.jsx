import PageHeader from '../components/PageHeader';

export default function FAQ() {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Frequently Asked Questions"
        description="Find answers to common questions"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Common Questions</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900">How long are the training programs?</h3>
                <p className="mt-2 text-gray-600">Program lengths vary depending on the course. Contact us for specific details.</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-900">Do you offer job placement?</h3>
                <p className="mt-2 text-gray-600">Yes, we provide job placement assistance to our graduates.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}