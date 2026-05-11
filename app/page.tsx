import Hero from './components/Hero';
import Events from './components/Events';
import JourneyMap from './components/JourneyMap';
import Travel from './components/Travel';
import DressCode from './components/DressCode';
import RSVP from './components/RSVP';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      
      <section id="home">
        <Hero />
      </section>
      
      <section id="events">
        <Events />
      </section>
      
      <section id="journey">
        <JourneyMap />
      </section>
      
      <section id="travel">
        <Travel />
      </section>
      
      <section id="dress-code">
        <DressCode />
      </section>
      
      <section id="rsvp">
        <RSVP />
      </section>
      
      <section id="contact">
        <Contact />
      </section>
      
      <Footer />
    </main>
  );
}
