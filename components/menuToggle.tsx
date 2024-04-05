/* eslint-disable unused-imports/no-unused-vars */
import type { SVGMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import React from 'react';

import Cursor from './jqueryTest';

const circle = {
  close: {
    scale: 1,
    transition: { duration: 0.4 },
  },
  open: {
    scale: 0.8745,
    transition: { duration: 0.4 },
  },
};

const Path = (
  props: React.JSX.IntrinsicAttributes &
    SVGMotionProps<SVGPathElement> &
    React.RefAttributes<SVGPathElement>,
) => (
  <motion.path
    fill="transparent"
    strokeWidth="2.875"
    strokeLinecap="round"
    {...props}
  />
);

function MenuToggle({ toggle, isOpen }: any) {
  return (
    <motion.div
      className="z-[999] -mr-6 -mt-4 flex size-20 flex-col justify-center rounded-full border-2 border-dark dark:border-light md:-mr-8 md:-mt-6 md:size-32 lg:-mt-12 lg:size-48"
      variants={circle}
    >
      <Cursor toggleState={toggle} />
      {/* Pass the toggle state to the Cursor component */}
      <motion.button className="trigger size-1/2 self-center" onClick={toggle}>
        <svg className="" height={'100%'} width={'100%'} viewBox="0 0 100 100">
          <Path
            className="stroke-dark dark:stroke-light"
            variants={{
              close: { d: 'M 20 40 L 80 40' },
              open: { d: 'M 20 30 L 80 70' },
            }}
          />
          <Path
            className="stroke-dark dark:stroke-light"
            variants={{
              close: { d: 'M 20 60 L 80 60' },
              open: { d: 'M 20 70 L 80 30' },
            }}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}

export default MenuToggle;
