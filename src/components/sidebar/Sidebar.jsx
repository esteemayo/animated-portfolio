import { useState } from 'react';
import { motion } from 'framer-motion';

import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';

import './Sidebar.scss';

const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 20,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <motion.aside
      variants={variants}
      animate={isOpen ? 'open' : 'closed'}
      className='sidebar'
    >
      <motion.div
        variants={variants}
        animate={isOpen ? 'open' : 'closed'}
        className='sidebar__background'
      >
        <Links />
      </motion.div>

      <ToggleButton onToggle={handleToggle} />
    </motion.aside>
  );
};

export default Sidebar;
