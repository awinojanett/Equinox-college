import PageHeader from '../components/PageHeader';

export default function Contact() {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Contact Us"
        description="Get in touch with our team"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea id="message" name="message" rows="4" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">Send Message</button>
            </form>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                <strong>Address:</strong><br />
                Kondele, Kisumu<br />
                Kisumu-Kakamega Road
              </p>
              <p className="text-gray-600">
                <strong>Phone:</strong><br />
                +(254) 724-238-805
              </p>
              <p className="text-gray-600">
                <strong>Email:</strong><br />
                info@equinoxcollege.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}