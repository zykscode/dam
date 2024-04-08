/* eslint-disable unused-imports/no-unused-vars */
import type { SVGMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import React from 'react';

import Cursor from './jqueryTest';

const circle = {
  close: {
    scale: 1,
    transition: { duration: 0.4, delay: 1 },
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
    strokeWidth="4"
    strokeLinecap="round"
    {...props}
    transition={{ duration: 1 }}
  />
);

function MenuToggle({ toggle, isOpen }: any) {
  return (
    <motion.div
      className={` -mr-6 -mt-4 flex size-20 flex-col justify-center rounded-full border-[3.25px] ${isOpen ? 'border-light' : 'border-dark'} transition-colors delay-300 duration-300 md:-mr-8 md:-mt-6 md:size-32 lg:-mt-12 lg:size-48`}
      variants={circle}
    >
      {Cursor(toggle)}
      {/* Pass the toggle state to the Cursor component */}
      <motion.button className="trigger size-1/2 self-center" onClick={toggle}>
        <svg className="" height={'100%'} width={'100%'} viewBox="0 0 100 100">
          <Path
            variants={{
              close: {
                transition: { duration: 0.4, delay: 1 },
                d: 'M 20 40 L 80 40',
                stroke: 'hsl(var(--drk))',
              },
              open: { d: 'M 20 30 L 80 70', stroke: 'hsl(var(--prm))' },
            }}
          />
          <Path
            variants={{
              close: {
                d: 'M 20 60 L 80 60',
                stroke: 'hsl(var(--drk))',
                transition: { duration: 0.4, delay: 1 },
              },
              open: { d: 'M 20 70 L 80 30', stroke: 'hsl(var(--prm))' },
            }}
          />
        </svg>
      </motion.button>
    </motion.div>
  );
}

export default MenuToggle;
