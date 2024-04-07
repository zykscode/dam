import { motion } from 'framer-motion';
import React from 'react';

import Wave from './wave';

const variants = {
  open: {
    y: '0%',
    transition: { when: 'beforeChildren', duration: 0.5 },
  },
  close: {
    y: '-100%',
    transition: { when: 'afterChidren', duration: 0.5 },
  },
};

const menu = {
  open: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
  close: {
    opacity: 0,
    transition: { duration: 0.3 },
  },
};
const DropdownNav = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <motion.div
      variants={variants}
      className={`absolute flex h-screen w-screen flex-col justify-between`}
    >
      <div className="relative flex h-full items-center bg-dark">
        <motion.div variants={menu}>
          <motion.div className=""></motion.div>
          menuue
        </motion.div>
      </div>
      <Wave isOpen={isOpen} />
    </motion.div>
  );
};

export default DropdownNav;
