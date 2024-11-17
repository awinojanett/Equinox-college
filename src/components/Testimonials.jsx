import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    name: "Sarah Atieno",
    role: "Certified Caregiver",
    image: "/mitch.webp",
    quote: "The training I received at Equinox was exceptional. The hands-on experience prepared me well for my career in healthcare."
  },
  {
    name: "Michael Wamalwa",
    role: "Emergency Response Graduate",
    image: "/male.webp",
    quote: "The emergency response program gave me the confidence and skills I needed to handle critical situations effectively."
  },
  {
    name: "Emily Kemunto",
    role: "Healthcare Professional",
    image: "/mitch.webp",
    quote: "Equinox's equipment training program helped me stay current with the latest medical technologies."
  }
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            What Our Students Say
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Hear from our graduates and healthcare professionals
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-6">
                <img
                  className="h-12 w-12 rounded-full object-cover"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div className="ml-4">
                  <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <blockquote>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}