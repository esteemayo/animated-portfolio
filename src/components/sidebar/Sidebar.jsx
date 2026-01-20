import { useState } from 'react';
import { motion } from 'framer-motion';

import Links from './links/Links';
import ToggleButton from './toggleButton/ToggleButton';

import './Sidebar.scss';

const variants = {
  initial: {},
  animate: {},
};

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className='sidebar'>
      <motion.div
        variants={variants}
        animate={isOpen ? 'animate' : 'initial'}
        className='sidebar__background'
      >
        <Links />
      </motion.div>
      <ToggleButton />
    </aside>
  );
};

export default Sidebar;
