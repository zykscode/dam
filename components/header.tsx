'use client';

import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';

import { useLockBody } from '@/lib/use-lock-body';

import DropdownNav from './dropdownNav';
import Logo from './logo';
import MenuToggle from './menuToggle';
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

const container = {
  close: {
    transition: {
      when: 'afterChildren',
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      staggerDirection: 1,
    },
  },
};

const Header: React.FC = () => {
  // const [isLocked, lockBody, unlockBody] = useLockBody();
  const [isOpen, toggleOpen] = useCycle(false, true);
  useLockBody(isOpen);

  const handleClick = () => {
    toggleOpen();
  };

  return (
    <header className={`header z-40 backdrop-blur-sm ${isOpen ? 'open' : ''}`}>
      <motion.nav
        initial={'close'}
        animate={isOpen ? 'open' : 'close'}
        variants={container}
        className="pb-[20px]"
      >
        <motion.div
          variants={variants}
          className={`absolute flex h-screen w-screen flex-col justify-between`}
        >
          <AnimatePresence mode="wait">
            {isOpen && <DropdownNav />}
          </AnimatePresence>
          <Wave isOpen={isOpen} />
        </motion.div>
        <div className="z-[200] flex items-center justify-between">
          <Logo isOpen={isOpen} />
          <MenuToggle isOpen={isOpen} toggle={handleClick} />
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
