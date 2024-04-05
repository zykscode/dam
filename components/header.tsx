'use client';

import { motion, useCycle } from 'framer-motion';
import { useEffect } from 'react';

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

const Header = () => {
  // const [isLocked, lockBody, unlockBody] = useLockBody();
  const [isOpen, toggleOpen] = useCycle(false, true);

  // useEffect(() => {
  //   lockBody();
  // }, [lockBody]);

  const handleClick = () => {
    toggleOpen();
    // if (isLocked) {
    //   unlockBody();
    // } else {
    //   lockBody();
    // }
  };

  return (
    <header
      className={`sticky top-0 z-[900] backdrop-blur-sm ${
        isOpen ? 'open' : ''
      }`}
    >
      <motion.nav
        initial={'close'}
        animate={isOpen ? 'open' : 'close'}
        variants={container}
        className="flex items-center justify-between py-[20px]"
      >
        <DropdownNav />
        <div className="z-20 flex items-center justify-between">
          <Logo />
          <MenuToggle isOpen={isOpen} toggle={handleClick} />
        </div>
      </motion.nav>
    </header>
  );
};

export default Header;
