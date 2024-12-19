import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ResourceSection from './components/ResourceSection';
import BigHeading from './components/BigHeading';
import Footer from './components/Footer';
import AnimatedCursor from 'react-animated-cursor';

import './App.css';

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)',
          zIndex: 99999,
        }}
        outerStyle={{
          border: '3px solid var(--cursor-color)',
          zIndex: 99999,
        }}
      />
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
