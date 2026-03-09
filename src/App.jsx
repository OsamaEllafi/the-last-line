import { Routes, Route } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import Services from './pages/Services';
import Resources from './pages/Resources';
import BookAppointment from './pages/BookAppointment';
import About from './pages/About';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <SmoothScroll>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </SmoothScroll>
  );
}

export default App;
