import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import TechStack from './components/sections/TechStack';
import FruitJourney from './components/sections/FruitJourney';
import Infrastructure from './components/sections/Infrastructure';
import VideoShowcase from './components/sections/VideoShowcase';
import AptaMillMap from './components/sections/AptaMillMap';
import { CTA, Footer } from './components/sections/FooterCTA';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <FruitJourney />
        <Infrastructure />
        <VideoShowcase />
        <AptaMillMap />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

export default App
