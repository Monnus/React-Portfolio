
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    
    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center px-6 py-24 md:py-32"
    >
      <div 
        ref={containerRef} 
        className="max-w-4xl mx-auto text-center opacity-0 transition-opacity duration-1000"
      >
        <div className="relative inline-block mb-4">
          <span 
            className="text-sm font-medium bg-secondary/70 text-primary/90 px-4 py-1.5 rounded-full inline-block"
          >
            Full-Stack Developer
          </span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0 animate-slide-up animate-once animate-fill-forwards">
          Crafting digital experiences with <span className="text-primary relative">precision</span> and <span className="text-primary relative">passion</span>
        </h1>
        
        <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-10 opacity-0 animate-slide-up animate-delay-400 animate-once animate-fill-forwards">
          I build modern full-stack applications that solve real problems 
          with clean code and thoughtful user experiences.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-slide-up animate-delay-800 animate-once animate-fill-forwards">
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center h-12 px-6 font-medium bg-secondary text-primary rounded-lg transition-all hover:bg-secondary/70 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
          >
            Contact Me
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block opacity-0 animate-fade-in animate-delay-1200 animate-once animate-fill-forwards">
          <div className="flex flex-col items-center">
            <span className="text-sm text-foreground/60 mb-2">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-1.5">
              <div className="w-1.5 h-1.5 bg-foreground/40 rounded-full animate-float"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
