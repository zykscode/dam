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
      <div className="relative flex h-full items-center  bg-yellow-300">
        <motion.div variants={menu}>
          <motion.div className="block justify-between md:flex">
            <div className="flex flex-col bg-green-100 pl-[4.06em]"></div>
          </motion.div>
        </motion.div>
      </div>
      <Wave isOpen={isOpen} />
    </motion.div>
  );
};

export default DropdownNav;
