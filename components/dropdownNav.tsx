/* eslint-disable no-restricted-globals */
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { homepageNavs } from '@/config/homepage';

import Body from './nav';

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.35 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.35 },
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
const DropdownNav = () => {
  const [selectedLink, setSelectedLink] = useState({
    isActive: false,
    index: 0,
  });
  const links = homepageNavs.mainNavs;

  return (
    <motion.div className=" -mb-1 flex h-full items-center justify-center bg-dark">
      <motion.div className="size-full" variants={menu}>
        <motion.div className=" flex h-full flex-col-reverse justify-items-end md:flex md:flex-row md:justify-center ">
          <Body
            links={links}
            selectedLink={selectedLink}
            setSelectedLink={setSelectedLink}
          />

          <motion.div
            variants={opacity}
            initial="initial"
            animate={selectedLink.isActive ? 'open' : 'closed'}
            className={`  hidden w-full bg-green-200  md:block`}
          >
            <Image
              src={`/assets/images/${links[selectedLink.index].src}`}
              alt="image"
              width={100}
              height={100}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default DropdownNav;
