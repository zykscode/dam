'use client';

import { useEffect, useState } from 'react';

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className=" pointer-events-none bg-green-500"
      style={{
        position: 'fixed',
        left: mousePosition.x - 16,
        top: mousePosition.y - 16,
        transform: 'translate(-50%, -50%)',
        zIndex: 999,
      }}
    >
      <div className=" absolute size-3 rounded-full bg-white" />
      <div className="border-500 absolute flex size-12 items-center justify-center rounded-full border-2">
        <p className="cursor__text text-white transition duration-700 ease-in"></p>
      </div>
    </div>
  );
};

export default Cursor;
