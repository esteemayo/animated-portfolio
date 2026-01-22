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
        <Hero />
      </section>
      <section id='Services'>
        <Parallax type='services' />
      </section>
      <section>
        <Services />
      </section>
      <section id='Portfolio'>
        <Parallax type='portfolio' />
      </section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
      </section>
    </div>
  );
};

export default App;
