import Parallax from './components/parallax/Parallax';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Navbar from './components/navbar/Navbar';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <section>
        <Navbar />
      </section>
      <section>
        <Hero />
      </section>
      <section>
        <Parallax />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Parallax />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Portfolio />
      </section>
      <section>
        <Parallax />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default App;
