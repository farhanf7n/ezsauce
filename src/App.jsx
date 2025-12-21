import ResourceSection from './components/ResourceSection';
import Footer from './components/Footer';

import './App.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white dark:bg-slate-950">
      {/* Background Grid & Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        <div
          className="
    absolute left-[-10%] top-[-10%]
    h-[500px] w-[500px] rounded-full
    bg-orange-100/50 blur-[120px]
    dark:bg-orange-300/10 dark:blur-[160px]
  "
        ></div>

        <div
          className="
    absolute right-[-10%] top-[10%]
    h-[500px] w-[500px] rounded-full
    bg-purple-100/50 blur-[120px]
    dark:bg-purple-300/10 dark:blur-[160px]
  "
        ></div>
      </div>

      <div className="relative z-10">
        <HeroSection />
        <ResourceSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
