import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Globe, Rocket } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'HTML5', icon: Code, level: 95 },
    { name: 'CSS3', icon: Palette, level: 92 },
    { name: 'JavaScript', icon: Code, level: 88 },
    { name: 'React', icon: Globe, level: 90 },
    { name: 'GSAP', icon: Rocket, level: 85 },
    { name: 'Node.js', icon: Code, level: 82 }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 100, filter: 'blur(10px)' },
        { 
          opacity: 1, 
          y: 0, 
          filter: 'blur(0px)',
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Image animation
      gsap.fromTo(imageRef.current,
        { x: -100, opacity: 0, rotationY: -15 },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Content animation
      gsap.fromTo(contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Skills stagger animation
      gsap.fromTo('.skill-item',
        { y: 50, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            About <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating digital experiences that push the boundaries of what's possible
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Profile Image */}
          <div ref={imageRef} className="text-center lg:text-left">
            <div className="relative inline-block">
              <div className="w-80 h-80 rounded-full overflow-hidden glass-card p-2 mx-auto lg:mx-0">
                <img 
                  src="/lovable-uploads/ca92a246-65ca-4241-a798-328f320b61b3.png"
                  alt="Azka - Web Developer"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-xl" />
            </div>
          </div>

          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-4 text-glow">
                Creative Developer & Digital Craftsman
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                With over 5 years of experience in web development, I specialize in creating immersive digital experiences using cutting-edge technologies. My passion lies in transforming complex ideas into elegant, user-friendly solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I believe in the power of clean code, innovative design, and seamless user experiences. Every project is an opportunity to push creative boundaries and deliver something extraordinary.
              </p>
            </div>

            {/* Skills Grid */}
            <div ref={skillsRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => {
                const IconComponent = skill.icon;
                return (
                  <div key={skill.name} className="skill-item glass-card p-6 text-center group hover:scale-105 transition-transform duration-300">
                    <IconComponent size={40} className="mx-auto mb-3 text-primary group-hover:text-secondary transition-colors duration-300" />
                    <h4 className="font-semibold mb-2">{skill.name}</h4>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-secondary"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground mt-1 block">{skill.level}%</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;