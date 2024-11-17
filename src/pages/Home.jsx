import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Player } from '@lottiefiles/react-lottie-player';
import Gallery from '../components/Gallery';
import Testimonials from '../components/Testimonials';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 h-[600px]">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("/ten3.jpeg")',
            backgroundBlendMode: 'overlay'
          }}
        ></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8"
        >
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to Equinox Emergency College
          </h1>
          <p className="mt-6 text-xl text-white max-w-3xl">
            Empowering healthcare professionals through comprehensive training, emergency courses, and medical equipment solutions.
          </p>
          <div className="mt-10 flex gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/enroll"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-400 transition-colors"
              >
                Enroll Now
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/products"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 transition-colors"
              >
                Shop Equipment
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Services Overview */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="lg:text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Our Services
              </h2>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                Comprehensive healthcare training and equipment solutions
              </p>
            </div>
          </AnimatedSection>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service cards remain the same */}
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <Gallery />

      {/* Stats Section */}
      <AnimatedSection className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 text-center">
            <div className="bg-blue-500 rounded-lg p-6">
              <p className="text-4xl font-bold text-white">1000+</p>
              <p className="mt-2 text-white">Graduates</p>
            </div>
            <div className="bg-blue-500 rounded-lg p-6">
              <p className="text-4xl font-bold text-white">50+</p>
              <p className="mt-2 text-white">Courses</p>
            </div>
            <div className="bg-blue-500 rounded-lg p-6">
              <p className="text-4xl font-bold text-white">95%</p>
              <p className="mt-2 text-white">Job Placement</p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
}