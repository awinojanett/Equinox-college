import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaHospital } from 'react-icons/fa';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Products', href: '/products' },
  { name: 'Enroll', href: '/enroll' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-white shadow-lg">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-24"> {/* Increased height from h-20 to h-24 */}
              <div className="flex">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2">
                <img
                    src="/public/new1.png" 
                    alt="Equinox Emergency College Logo"
                    className="h-20 w-20 object-contain"
                     />
                  <div className="flex flex-col">
                    <span className="text-3xl font-bold text-blue-600 leading-tight">Equinox</span> {/* Increased font size */}
                    <span className="text-lg text-gray-600 font-medium leading-tight">Emergency College</span> {/* Increased font size */}
                  </div>
                </Link>
              </div>
              <div className="hidden sm:ml-8 sm:flex sm:space-x-4"> {/* Increased spacing */}
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="inline-flex items-center px-4 pt-1 text-lg font-medium text-gray-700 hover:text-blue-600 transition-colors duration-200" /* Increased font size and padding */
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="-mr-2 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-3 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-8 w-8" aria-hidden="true" /> /* Increased icon size */
                  ) : (
                    <Bars3Icon className="block h-8 w-8" aria-hidden="true" /> /* Increased icon size */
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block py-4 px-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors duration-200" /* Increased padding */
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}