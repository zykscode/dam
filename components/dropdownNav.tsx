/* eslint-disable no-restricted-globals */
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useState } from 'react';

import { homepageNavs } from '@/config/homepage';

import Body from './nav';
import Wave from './wave';

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
  const links = homepageNavs.mainNavs;

  return (
    <motion.div
      variants={variants}
      className={`absolute flex h-screen w-screen flex-col justify-between`}
    >
      <div className=" -mb-1 flex h-full items-center justify-center bg-dark">
        <motion.div className="size-full" variants={menu}>
          <motion.div className=" block h-full md:flex md:flex-row md:justify-center ">
            <Body
              links={links}
              selectedLink={selectedLink}
              setSelectedLink={setSelectedLink}
            />

            <motion.div
              variants={opacity}
              initial="initial"
              animate={selectedLink.isActive ? 'open' : 'closed'}
              className={` w-full  bg-green-200`}
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
      </div>
      <Wave isOpen={isOpen} />
    </motion.div>
  );
};

export default DropdownNav;
