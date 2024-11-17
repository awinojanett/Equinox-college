import { Link } from 'react-router-dom';

export default function ServiceCard({ title, description, link, icon: Icon }) {
  return (
    <div className="bg-white overflow-hidden shadow rounded-lg hover:shadow-xl transition-shadow">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center">
          {Icon && <Icon className="h-8 w-8 text-blue-500 mr-3" />}
          <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        </div>
        <p className="mt-2 text-sm text-gray-500">{description}</p>
        <Link
          to={link}
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500"
        >
          Learn more →
        </Link>
      </div>
    </div>
  );
}