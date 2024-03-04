import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TabLinks from './components/TabLinks';
import Card from './components/Card';
import BigHeading from './components/BigHeading';

import './App.css';

function App() {
  return (
    <>
      <div className="bg-lines">
        <Navbar />
        <HeroSection />
      </div>
      <TabLinks />
      <Card />
      <BigHeading />
    </>
  );
}

export default App;
