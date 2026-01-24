import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Parallax from './components/parallax/Parallax';
import Navbar from './components/navbar/Navbar';
import Services from './components/services/Services';
import Cursor from './components/cursor/Cursor';
import Portfolio from './components/portfolio/Portfolio';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
      <Cursor />
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
