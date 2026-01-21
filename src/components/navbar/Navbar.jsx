import { motion } from 'framer-motion';

import Sidebar from './../sidebar/Sidebar';
import { socials } from '../../data/index';

import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <Sidebar />
      <div className='navbar__wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className='navbar__logo'
        >
          Dev Ayo
        </motion.span>

        <div className='navbar__social'>
          {socials.map((social) => {
            const { id, alt, url, imgSrc } = social;
            return (
              <a key={id} href={url} className='navbar__link'>
                <img src={imgSrc} alt={alt} className='navbar__link--icon' />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
