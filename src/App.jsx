import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ResourceSection from './components/ResourceSection';
import BigHeading from './components/BigHeading';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <>
      <div className="bg-lines">
        <Navbar />
        <HeroSection />
      </div>
      <ResourceSection />
      <BigHeading />
      <Footer />
    </>
  );
}

export default App;
