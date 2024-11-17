import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const images = [
  {
    src: "/three.jpeg",
    alt: "Medical Training",
    title: "Hands-on Training"
  },
  {
    src: "/seven.jpeg",
    alt: "Emergency Response",
    title: "Emergency Response"
  },
  {
    src: "/ten2.jpeg",
    alt: "Medical Equipment",
    title: "State-of-the-art Equipment"
  },
  {
    src: "/ten1.jpeg",
    alt: "Laboratory Training",
    title: "Laboratory Practice"
  },
  {
    src: "/six.jpeg",
    alt: "Classroom Learning",
    title: "Interactive Learning"
  },
  {
    src: "/ten3.jpeg",
    alt: "Medical Devices",
    title: "Medical Technology"
  },
];

export default function Gallery() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-16 bg-gray-50" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Facility
          </h2>
          <p className="mt-4 text-xl text-gray-500">
            Take a look at our state-of-the-art facilities and equipment
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}