/* eslint-disable no-restricted-globals */
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import { homepageNavs } from '@/config/homepage';

import Body from './nav';
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
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  return (
    <motion.div
      variants={variants}
      className={`absolute flex h-screen w-screen flex-col justify-between`}
    >
      <div className=" -mb-1 flex h-full items-center justify-center bg-dark">
        <motion.div variants={menu}>
          <motion.div className="mx-auto block w-full justify-center bg-slate-300 ">
            <div className="flex flex-col pl-[4.06em]">
              <Body
                links={homepageNavs.mainNavs}
                selectedLink={selectedLink}
                setSelectedLink={setSelectedLink}
              />
            </div>
            <div className="w-full bg-blue-600"></div>
          </motion.div>
        </motion.div>
      </div>
      <Wave isOpen={isOpen} />
    </motion.div>
  );
};

export default DropdownNav;
