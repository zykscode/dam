'use client';

import { motion } from 'framer-motion';
import React from 'react';

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
    transition: { duration: 0.5 },
  },
};
const DropdownNav = () => {
  return (
    <motion.div
      variants={variants}
      className={`absolute  h-screen w-screen bg-yellow-200`}
    >
      <motion.div
        variants={menu}
        className="relative flex h-screen items-center bg-green-500 "
      >
        {' '}
        <motion.div className=""></motion.div>
        menuue{' '}
      </motion.div>
    </motion.div>
  );
};

export default DropdownNav;
