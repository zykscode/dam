'use client';

import { AnimatePresence, motion, useCycle } from 'framer-motion';
import React from 'react';

import { useLockBody } from '@/lib/use-lock-body';

import DropdownNav from './dropdownNav';
import Logo from './logo';
import MenuToggle from './menuToggle';

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
        <AnimatePresence mode="wait">
          {isOpen && <DropdownNav isOpen={isOpen} />}
        </AnimatePresence>
        <div className="z-[200] flex items-center justify-between">
          <Logo isOpen={isOpen} />
          <MenuToggle isOpen={isOpen} toggle={handleClick} />
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
