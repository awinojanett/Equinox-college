export default function PageHeader({ title, description }) {
    return (
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              {title}
            </h1>
            {description && (
              <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-500">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }