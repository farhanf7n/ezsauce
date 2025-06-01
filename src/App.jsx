import Navbar from './components/Navbar';
import ResourceSection from './components/ResourceSection';
import Footer from './components/Footer';
import Hero from './components/Hero';

import './App.css';

function App() {
  return (
    <div className="font-relative">
      <Navbar />
      <Hero />
      <ResourceSection />
      <Footer />
    </div>
  );
}

export default App;
