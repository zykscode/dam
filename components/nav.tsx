import { motion } from 'framer-motion';
import Link from 'next/link';
import type { JSX } from 'react';

const blur = {
  initial: {
    filter: 'blur(0px)',
    opacity: 1,
  },
  open: {
    filter: 'blur(4px)',
    opacity: 0.6,
    transition: { duration: 0.3 },
  },
  close: {
    filter: 'blur(0px)',
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const translate = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  open: (i) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  close: (i) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

export default function Body({ links, selectedLink, setSelectedLink }: any) {
  const getChars = (word: string) => {
    const chars: JSX.Element[] = [];
    word.split('').forEach(
      (
        char: string,

        i: number,
      ) => {
        chars.push(
          <motion.span
            custom={[i * 0.02, (word.length - i) * 0.01]}
            variants={translate}
            initial="initial"
            animate="open"
            exit="close"
            key={char + i}
          >
            {char}
          </motion.span>,
        );
      },
    );
    console.log(chars);
    return chars;
  };

  return (
    <div
      className={`flex w-full flex-col justify-start gap-4  text-4xl capitalize md:justify-end md:text-7xl`}
    >
      {links.map(
        (link: { title: string; href: string; src: string }, index: number) => {
          const { title, href } = link;
          return (
            <Link
              className="group mb-8 flex h-full items-center justify-center align-middle md:mr-10 md:justify-end"
              key={`l_${index}`}
              href={href}
              onMouseOver={() => {
                setSelectedLink({ isActive: true, index });
              }}
              onMouseLeave={() => {
                setSelectedLink({ isActive: false, index });
              }}
            >
              <div className="h-[3px] w-0 bg-light transition duration-700 ease-in group-hover:w-10"></div>
              <motion.p
                className="text-10 text-light  transition-all duration-1000 group-hover:italic"
                variants={blur}
                animate={
                  selectedLink.isActive && selectedLink.index !== index
                    ? 'open'
                    : 'close'
                }
              >
                {getChars(title)}
              </motion.p>
            </Link>
          );
        },
      )}
    </div>
  );
}
