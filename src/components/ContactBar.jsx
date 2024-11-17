import { FaPhone, FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function ContactBar() {
  return (
    <div className="bg-blue-600 text-white py-4"> {/* Increased padding */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-8"> {/* Increased spacing */}
            <a href="tel:+15551234567" className="flex items-center hover:text-blue-200 text-lg"> {/* Increased font size */}
              <FaPhone className="h-6 w-6 mr-3" /> {/* Increased icon size and margin */}
              <span>+(254) 724-238-805</span>
            </a>
            <a href="mailto:info@equinoxcollege.com" className="flex items-center hover:text-blue-200 text-lg"> {/* Increased font size */}
              <FaEnvelope className="h-6 w-6 mr-3" /> {/* Increased icon size and margin */}
              <span>info@equinoxemeregency.com</span>
            </a>
          </div>
          <div className="flex items-center space-x-8"> {/* Increased spacing */}
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">
              <FaFacebook className="h-6 w-6" /> {/* Increased icon size */}
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">
              <FaTwitter className="h-6 w-6" /> {/* Increased icon size */}
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">
              <FaInstagram className="h-6 w-6" /> {/* Increased icon size */}
            </a>
            <a href="#" className="hover:text-blue-200 transition-colors duration-200">
              <FaWhatsapp className="h-6 w-6" /> {/* Increased icon size */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}