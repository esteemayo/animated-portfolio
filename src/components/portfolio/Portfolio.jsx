import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

import Single from './single/Single';
import { portfolios } from '../../data';

import './Portfolio.scss';

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['end end', 'start start'],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div ref={ref} className='portfolio'>
      <div className='portfolio__wrapper'>
        <h1 className='portfolio__heading'>Featured works</h1>
        <motion.div style={{ scaleX }} className='portfolio__progress-bar' />
      </div>

      {portfolios.map((portfolio) => {
        return <Single key={portfolio.id} {...portfolio} />;
      })}
    </div>
  );
};

export default Portfolio;
