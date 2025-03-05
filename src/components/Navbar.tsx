
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const NavItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" }
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 10);
      
      // Determine active section based on scroll position
      const sections = NavItems.map(item => item.name.toLowerCase());
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6 md:px-8",
        scrolled 
          ? "bg-background/80 backdrop-blur-md border-b border-border/40 py-3" 
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a 
          href="#home" 
          className="text-xl font-medium transition-colors hover:text-primary/80"
          aria-label="Go to homepage"
        >
          dev<span className="text-primary font-semibold">folio</span>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "underline-animation text-sm font-medium transition-colors hover:text-primary",
                activeSection === item.name.toLowerCase() 
                  ? "text-primary" 
                  : "text-foreground/80"
              )}
            >
              {item.name}
            </a>
          ))}
        </nav>
        
        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2 rounded-md"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <div className="relative w-6 h-5">
            <span 
              className={cn(
                "absolute block h-0.5 bg-current transition-all duration-300 rounded-full",
                mobileMenuOpen ? "w-0 opacity-0" : "w-6 opacity-100"
              )}
              style={{ top: '50%', transform: 'translateY(-50%)' }}
            />
            <span 
              className={cn(
                "absolute block w-6 h-0.5 bg-current transition-all duration-300 rounded-full",
                mobileMenuOpen ? "top-2.5 rotate-45" : "top-0"
              )}
            />
            <span 
              className={cn(
                "absolute block w-6 h-0.5 bg-current transition-all duration-300 rounded-full",
                mobileMenuOpen ? "top-2.5 -rotate-45" : "bottom-0"
              )}
            />
          </div>
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={cn(
          "md:hidden fixed top-[60px] left-0 right-0 p-4 bg-background/95 backdrop-blur-lg border-b border-border/40 transition-all duration-300 transform",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8 pointer-events-none"
        )}
      >
        <nav className="flex flex-col space-y-4">
          {NavItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "py-2 px-4 text-base font-medium transition-colors rounded-lg",
                activeSection === item.name.toLowerCase() 
                  ? "bg-secondary text-primary" 
                  : "hover:bg-secondary/50"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
