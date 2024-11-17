import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ContactBar from './components/ContactBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Enroll from './pages/Enroll';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <div className="fixed top-0 left-0 right-0 z-50">
          <ContactBar />
          <Navbar />
        </div>
        <main className="flex-grow mt-[112px]"> {/* Adjusted margin-top to account for increased header height */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/products" element={<Products />} />
            <Route path="/enroll" element={<Enroll />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;