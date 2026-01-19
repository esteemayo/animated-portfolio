import Parallax from './components/parallax/Parallax';
import Hero from './components/hero/Hero';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Portfolio from './components/portfolio/Portfolio';

import './App.scss';

const App = () => {
  return (
    <div className='app'>
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
