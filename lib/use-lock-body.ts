/* eslint-disable consistent-return */

import { useLayoutEffect } from 'react';

export function useLockBody(isOpen: boolean) {
  useLayoutEffect(() => {
    if (isOpen) {
      const originalStyle = window.getComputedStyle(
        document.documentElement,
      ).overflow; // Change: Target html element
      document.documentElement.style.overflow = 'hidden';

      return () => {
        document.documentElement.style.overflow = originalStyle; // Change: Restore html element's style
      };
    }
  }, [isOpen]);
}
