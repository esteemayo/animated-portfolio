import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import './Single.scss';

const Single = ({ img, desc, title }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ['start start', 'end end'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section className='single'>
      <article className='single__container'>
        <div className='single__wrapper'>
          <div ref={ref} className='single__image'>
            <img src={img} alt={title} className='single__image--img' />
          </div>

          <motion.div style={{ y }} className='single__box'>
            <h2 className='single__box--title'>{title}</h2>
            <p className='single__box--desc'>{desc}</p>

            <button type='button' className='single__box--btn'>
              See demo
            </button>
          </motion.div>
        </div>
      </article>
    </section>
  );
};

export default Single;
