import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Download } from 'phosphor-react';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 3 }); // Wait for preloader to finish

    // Set initial states
    gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current, splineRef.current], {
      opacity: 0,
      y: 50,
      filter: 'blur(10px)'
    });

    // Animate elements
    tl.to(headlineRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.2,
      ease: "power2.out"
    })
    .to(subtitleRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: "power2.out"
    }, "-=0.8")
    .to(ctaRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1,
      ease: "power2.out"
    }, "-=0.6")
    .to(splineRef.current, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 1.5,
      ease: "power2.out"
    }, "-=1.2");

    // CTA hover animation
    const ctaButton = ctaRef.current;
    if (ctaButton) {
      ctaButton.addEventListener('mouseenter', () => {
        gsap.to(ctaButton, {
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out"
        });
      });

      ctaButton.addEventListener('mouseleave', () => {
        gsap.to(ctaButton, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out"
        });
      });
    }

  }, []);

  return (
    <section id="home" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Spline 3D */}
      <div ref={splineRef} className="absolute inset-0 z-0">
        <iframe 
          src='https://my.spline.design/worldplanet-Kzf9TpfJUWjI7vVUOIa3uEd6/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Floating Glow Orbs */}
      <div className="glow-orb w-32 h-32 top-20 left-20" />
      <div className="glow-orb w-24 h-24 top-40 right-32" style={{ animationDelay: '-2s' }} />
      <div className="glow-orb w-40 h-40 bottom-32 right-20" style={{ animationDelay: '-4s' }} />
      <div className="glow-orb w-20 h-20 bottom-20 left-1/4" style={{ animationDelay: '-6s' }} />
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 
          ref={headlineRef}
          className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 text-glow leading-tight"
        >
          Hi, I'm <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Azka</span>
          <br />
          Web Developer
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Crafting immersive digital experiences with cutting-edge technologies and innovative design solutions
        </p>
        
        <button 
          ref={ctaRef}
          className="glow-button inline-flex items-center space-x-3 text-lg font-semibold"
        >
          <Download size={24} />
          <span>Download CV</span>
        </button>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;