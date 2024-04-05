/* eslint-disable no-return-assign */

'use client';

import { useLayoutEffect, useState } from 'react';

// @see https://usehooks.com/useLockBodyScroll
export function useLockBody() {
  const [isLocked, setIsLocked] = useState(false);

  useLayoutEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = isLocked ? 'hidden' : originalStyle;

    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isLocked]);

  const lockBody = () => setIsLocked(true);
  const unlockBody = () => setIsLocked(false);

  return [isLocked, lockBody, unlockBody] as const;
}
