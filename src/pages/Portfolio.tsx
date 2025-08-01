import { useState, useEffect, useRef } from 'react';
import Preloader from '../components/Preloader';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Portfolio = () => {
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize Locomotive Scroll after loading completes
    if (!isLoading && scrollRef.current) {
      import('locomotive-scroll').then((LocomotiveScroll) => {
        const scroll = new LocomotiveScroll.default({
          el: scrollRef.current!,
          smooth: true,
          multiplier: 1,
          class: 'is-reveal',
          smartphone: {
            smooth: true
          },
          tablet: {
            smooth: true
          }
        });

        // Clean up on unmount
        return () => {
          if (scroll) scroll.destroy();
        };
      });
    }
  }, [isLoading]);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}
      
      {!isLoading && (
        <>
          <Navigation />
          <div ref={scrollRef} data-scroll-container>
            <main>
              <div data-scroll-section>
                <HeroSection />
              </div>
              
              <div data-scroll-section>
                <AboutSection />
              </div>
              
              <div data-scroll-section>
                <ProjectsSection />
              </div>
              
              <div data-scroll-section>
                <ContactSection />
              </div>
              
              <div data-scroll-section>
                <Footer />
              </div>
            </main>
          </div>
        </>
      )}
    </div>
  );
};

export default Portfolio;