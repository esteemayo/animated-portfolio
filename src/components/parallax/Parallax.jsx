import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import './Parallax.scss';

const Parallax = ({ type }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
  const yBcg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div
      ref={ref}
      className='parallax'
      style={{
        backgroundImage:
          type === 'services'
            ? 'linear-gradient(180deg, #111132, #0c0c1d)'
            : 'linear-gradient(180deg, #111132, #505064)',
      }}
    >
      <motion.h1 style={{ y: yText }} className='parallax__heading'>
        {type === 'services' ? 'What we do?' : 'What we did?'}
      </motion.h1>

      <motion.div style={{ y: yBcg }} className='parallax__mountains' />

      <motion.div
        style={{
          x: yBcg,
          backgroundImage: `url(${
            type === 'services' ? '/planets.png' : '/sun.png'
          })`,
        }}
        className='parallax__planets'
      />

      <motion.div className='parallax__stars' />
    </div>
  );
};

export default Parallax;
