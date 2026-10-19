import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResourceSection from './components/ResourceSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#resources"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-black focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to resources
      </a>
      <Navbar />
      <main>
        <Hero />
        <ResourceSection />
      </main>
      <Footer />
    </>
  );
}
