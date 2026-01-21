import { motion } from 'framer-motion';
import { links } from '../../../data';

import './Links.scss';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  return (
    <motion.div variants={variants} className='links'>
      {links.map((link) => {
        const { id, label } = link;
        return (
          <motion.a
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            key={id}
            href={`#${label}`}
          >
            {label}
          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default Links;
