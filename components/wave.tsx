import lottie from 'lottie-web';
import { useEffect, useRef, useState } from 'react';

import { wave } from '@/lib/wave';

const Wave = ({ isOpen }: { isOpen: boolean }) => {
  const containerRef = useRef(null);
  console.log(isOpen);
  const [isPaused, setIsPaused] = useState(false);
  const [animationProgress, setAnimationProgress] = useState(0);
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
      if (!isOpen && !isPaused) {
        lottieInstance.playSegments([wave.op / 2, wave.op], true); // Play to completion
        setAnimationProgress(1); // Mark as complete
      } else if (isOpen && !isPaused) {
        lottieInstance.playSegments([0.5, animationProgress * wave.op], true); // Play remaining half
        setAnimationProgress(0.5); // Mark as halfway
      }
    };

    controlAnimation(); // Initial call

    // Event listener (or similar) to respond to changes in isOpen
    window.addEventListener('isOpenChange', controlAnimation);

    return () => {
      lottieInstance.destroy();
      window.removeEventListener('isOpenChange', controlAnimation);
    };
  }, [isOpen, isPaused, animationProgress]);

  return <div className="bg-green-500" ref={containerRef} />;
};

export default Wave;
