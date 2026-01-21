import { motion } from 'framer-motion';

import './Hero.scss';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariant = {
  initial: {
    x: 0,
  },
  animate: {
    x: '-220%',
    transition: {
      repeat: Infinity,
      repeatType: 'mirror',
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <header className='hero'>
      <div className='hero__container'>
        <motion.div
          variants={textVariants}
          initial='initial'
          animate='animate'
          className='hero__text'
        >
          <motion.h2 variants={textVariants} className='hero__text--secondary'>
            Harvey Tyler
          </motion.h2>

          <motion.h1 variants={textVariants} className='hero__text--primary'>
            Web developer and UI designer
          </motion.h1>

          <motion.div variants={textVariants} className='hero__buttons'>
            <motion.button
              variants={textVariants}
              type='button'
              className='hero__buttons--work'
            >
              See the Latest Works
            </motion.button>

            <motion.button
              variants={textVariants}
              type='button'
              className='hero__buttons--contact'
            >
              Contact me
            </motion.button>
          </motion.div>

          <motion.img
            variants={textVariants}
            animate='scrollButton'
            src='/scroll.png'
            alt='scroll'
            className='hero__scroll'
          />
        </motion.div>
      </div>

      <motion.div
        variants={sliderVariant}
        initial='initial'
        animate='animate'
        className='hero__slider'
      >
        Writer Content Creator Influencer
      </motion.div>

      <div className='hero__image'>
        <img src='/hero.png' alt='hero' className='hero__image--img' />
      </div>
    </header>
  );
};

export default Hero;
