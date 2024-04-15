import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

import { wave } from '@/lib/wave';

const Wave = ({ isOpen }: { isOpen: boolean }) => {
  console.log(isOpen)
  const containerRef = useRef(null);
  useEffect(() => {
    const lottieInstance = lottie.loadAnimation({
      container: containerRef.current!,
      animationData: wave,
      loop: false,
      autoplay: false, // Start the animation paused
      renderer: 'svg',
    });

    // Function for animation playback control
    const controlAnimation = () => {
      if (!isOpen) {
        lottieInstance.playSegments([wave.op / 1.8, wave.op], true); // Play to completion
      } else if (isOpen) {
        lottieInstance.playSegments([0, wave.op / 2], true); // Play remaining half
      }
    };

    controlAnimation(); // Initial call

    // Event listener (or similar) to respond to changes in isOpen
    window.addEventListener('isOpenChange', controlAnimation);

    return () => {
      lottieInstance.destroy();
      window.removeEventListener('isOpenChange', controlAnimation);
    };
  }, [isOpen]);

  return <div className="" ref={containerRef} />;
};

export default Wave;
