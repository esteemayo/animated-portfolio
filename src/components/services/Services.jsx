import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import './Services.scss';

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      variants={variants}
      animate={isInView ? 'animate' : 'initial'}
      className='services'
    >
      <motion.div variants={variants} className='services__container'>
        <p className='services__container--text'>
          I focus on helping your brand grow
          <br /> and move forward
        </p>

        <hr />
      </motion.div>

      <motion.div variants={variants} className='services__wrapper'>
        <div className='services__title'>
          <img
            src='/people.webp'
            alt='image'
            className='services__title--img'
          />

          <h1 className='services__title--heading'>
            <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className='services__title'>
          <h1 className='services__title--heading'>
            <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b>{' '}
            Business.
          </h1>

          <button type='button' className='services__title--btn'>
            What we do?
          </button>
        </div>
      </motion.div>

      <motion.ul variants={variants} className='services__list'>
        {Array.from({ length: 4 }).map((_, index) => {
          return (
            <li key={index} className='services__item'>
              <motion.article
                whileHover={{
                  backgroundColor: 'lightgray',
                  color: 'black',
                }}
                className='services__box'
              >
                <h2 className='services__box--title'>Branding</h2>

                <p className='services__box--desc'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id
                  placeat pariatur magnam accusantium distinctio, consectetur
                  dolorum ipsam velit labore culpa ut rem iure quaerat libero
                  dolore sint.
                </p>

                <button type='button' className='services__box--btn'>
                  Go
                </button>
              </motion.article>
            </li>
          );
        })}
      </motion.ul>
    </motion.div>
  );
};

export default Services;
