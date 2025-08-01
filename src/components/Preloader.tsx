import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete
    });

    // Initial state
    gsap.set([logoRef.current, progressBarRef.current], {
      opacity: 0,
      y: 50
    });

    // Animate in logo and progress bar
    tl.to([logoRef.current, progressBarRef.current], {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      stagger: 0.2
    })
    // Animate progress bar
    .to(progressBarRef.current, {
      width: "100%",
      duration: 2,
      ease: "power2.out"
    }, "-=0.5")
    // Hold for a moment
    .to({}, { duration: 0.5 })
    // Fade out everything
    .to(preloaderRef.current, {
      opacity: 0,
      scale: 0.9,
      duration: 1,
      ease: "power2.inOut"
    });

  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="text-center">
        {/* Animated Logo */}
        <div ref={logoRef} className="mb-12">
          <h1 className="text-6xl md:text-8xl font-bold text-glow">
            Azka
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mt-4">
            Web Developer
          </p>
        </div>
        
        {/* Progress Bar Container */}
        <div className="w-80 h-2 bg-muted rounded-full mx-auto overflow-hidden">
          <div 
            ref={progressBarRef}
            className="progress-bar w-0 h-full"
          />
        </div>
        
        {/* Loading Text */}
        <p className="text-muted-foreground mt-6 text-sm tracking-widest">
          LOADING EXPERIENCE...
        </p>
      </div>
      
      {/* Background Glow Orbs */}
      <div className="glow-orb w-32 h-32 top-1/4 left-1/4" />
      <div className="glow-orb w-24 h-24 top-3/4 right-1/4" style={{ animationDelay: '-2s' }} />
      <div className="glow-orb w-40 h-40 bottom-1/4 left-1/2" style={{ animationDelay: '-4s' }} />
    </div>
  );
};

export default Preloader;