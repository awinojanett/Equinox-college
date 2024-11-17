import { BriefcaseIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';
import PageHeader from '../components/PageHeader';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    title: 'Home Caregiver Training',
    description: 'Comprehensive training programs for aspiring caregivers, including certification and job placement assistance.',
    icon: HeartIcon,
    link: '/services/caregiver'
  },
  {
    title: 'Emergency Courses',
    description: 'Professional emergency response training including CPR, First Aid, and Advanced Life Support.',
    icon: AcademicCapIcon,
    link: '/services/emergency'
  },
  {
    title: 'Medical Equipment',
    description: 'High-quality medical equipment available for purchase or rental, with expert guidance and support.',
    icon: BriefcaseIcon,
    link: '/services/equipment'
  }
];

export default function Services() {
  return (
    <div className="bg-gray-50">
      <PageHeader
        title="Our Services"
        description="Comprehensive healthcare training and equipment solutions"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              link={service.link}
            />
          ))}
        </div>
        
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Instructors</h3>
              <p className="text-gray-600">Learn from experienced healthcare professionals with years of practical experience.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexible Schedule</h3>
              <p className="text-gray-600">Choose from various course timings that fit your busy schedule.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Job Placement</h3>
              <p className="text-gray-600">Access to our network of healthcare providers and job placement assistance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}