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
  enter: (i: any) => ({
    y: 0,
    opacity: 1,
    transition: { duration: 1, ease: [0.76, 0, 0.24, 1], delay: i[0] },
  }),
  exit: (i: any) => ({
    y: '100%',
    opacity: 0,
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: i[1] },
  }),
};

export default function Body({ links, selectedLink, setSelectedLink }: any) {
  console.log(selectedLink, selectedLink.index);
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
            animate="enter"
            exit="exit"
            key={char + i}
          >
            {char}
          </motion.span>,
        );
      },
    );
    return chars;
  };

  return (
    <div className={``}>
      {links.map(
        (link: { title: string; href: string; src: string }, index: number) => {
          const { title, href } = link;
          return (
            <Link key={`l_${index}`} href={href}>
              <motion.p
                className="text-10"
                onMouseOver={() => {
                  setSelectedLink({ isActive: true, index });
                }}
                onMouseLeave={() => {
                  setSelectedLink({ isActive: false, index });
                }}
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
