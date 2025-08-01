import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, GithubLogo } from 'phosphor-react';

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "3D Portfolio Website",
      description: "An immersive portfolio experience with Three.js integration and advanced animations.",
      image: "/lovable-uploads/b216330f-3e1f-4905-af0c-3f2834f329f4.png",
      tags: ["React", "Three.js", "GSAP", "TypeScript"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 2,
      title: "Gaming Platform UI",
      description: "Next-generation gaming interface with smooth animations and responsive design.",
      image: "/lovable-uploads/c9f5845c-c5cb-4731-a999-5acadf090f6f.png",
      tags: ["Vue.js", "GSAP", "WebGL", "Sass"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 3,
      title: "Web Animation Tools",
      description: "Interactive learning platform for modern web animation techniques.",
      image: "/lovable-uploads/ee1d16c5-7138-4118-90bf-4cf8894fb312.png",
      tags: ["React", "GSAP", "CSS3", "Node.js"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 4,
      title: "Developer Portfolio",
      description: "Clean and modern portfolio website with smooth scrolling and transitions.",
      image: "/lovable-uploads/5be25814-1014-4057-9062-cdcb78c0c8c6.png",
      tags: ["Next.js", "Framer Motion", "TypeScript", "Tailwind"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 5,
      title: "Authentication System",
      description: "Secure and elegant authentication interface with modern design patterns.",
      image: "/lovable-uploads/fdc05924-753f-42c0-9ed2-5f93e2df6d47.png",
      tags: ["React", "Node.js", "MongoDB", "JWT"],
      github: "https://github.com",
      live: "https://demo.com"
    },
    {
      id: 6,
      title: "3D Web Experience",
      description: "Interactive 3D web application with real-time rendering and physics.",
      image: "/lovable-uploads/cb6cf926-17ad-46d5-949a-fcbf08faee5c.png",
      tags: ["Three.js", "React", "WebGL", "GLSL"],
      github: "https://github.com",
      live: "https://demo.com"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section fade in
      gsap.fromTo(sectionRef.current, 
        { opacity: 0, y: 100 },
        { 
          opacity: 1, 
          y: 0,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Projects stagger animation
      gsap.fromTo('.project-card',
        { y: 100, opacity: 0, scale: 0.8, rotationX: 45 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotationX: 0,
          duration: 1,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: projectsRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-glow">
            Featured <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative web experiences and cutting-edge development
          </p>
        </div>

        {/* Projects Grid */}
        <div ref={projectsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="project-card glass-card overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-500"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Overlay Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-background transition-colors duration-300"
                  >
                    <GithubLogo size={20} />
                  </a>
                  <a 
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-primary hover:text-background transition-colors duration-300"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="glow-button">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;