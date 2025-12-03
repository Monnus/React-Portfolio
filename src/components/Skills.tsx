
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface Skill {
  category: string;
  items: {
    name: string;
    level: number;
  }[];
}

const skills: Skill[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 90 },
      { name: "Vue.js", level: 75 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 30 },
      { name: "Express", level: 40 },
      { name: "Python", level: 30 },
  
    ]
  },
  {
    category: "Database & DevOps",
    items: [
      { name: "MongoDB", level: 53 },
      { name: "PostgreSQL", level: 80 },
      { name: "Docker", level: 20 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 75 }
    ]
  }
];

export const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100');
            entry.target.classList.add('translate-y-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    skillRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      
      skillRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  
  return (
    <section 
      id="skills" 
      className="py-24 px-6 bg-white"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 opacity-0 translate-y-4 transition-all duration-700">
          <span className="text-sm font-medium bg-secondary text-primary/90 px-4 py-1.5 rounded-full inline-block mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Technical Skills</h2>
          <p className="text-lg text-foreground/70">
            A comprehensive overview of my technical stack and proficiency level
            across frontend, backend, and DevOps technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={skillCategory.category}
              ref={(el) => (skillRefs.current[categoryIndex] = el)}
              className="opacity-0 translate-y-8 transition-all duration-700"
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              <div className="bg-secondary/30 rounded-2xl p-6 h-full">
                <h3 className="text-xl font-semibold mb-6 pb-4 border-b border-border/40">
                  {skillCategory.category}
                </h3>
                <div className="space-y-6">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-foreground/60">{skill.level}%</span>
                      </div>
                      <div className="progress-bar" style={{ animationDelay: `${skillIndex * 300}ms` }}>
                        <div 
                          className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: `${skill.level}%`,
                            transitionDelay: `${(categoryIndex * skillCategory.items.length + skillIndex) * 100}ms`
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid md:grid-cols-2 gap-8">
          <div 
            className="bg-white border border-border/40 rounded-2xl p-8 opacity-0 translate-y-8 transition-all duration-700 delay-300"
            ref={(el) => (skillRefs.current[skills.length] = el)}
          >
            <h3 className="text-xl font-semibold mb-6">Tools & Environment</h3>
            <div className="flex flex-wrap gap-3">
              {["Git", "VS Code", "Postman", "Figma", "Docker", "Webpack", "GitHub Actions", "Slack"].map((tool) => (
                <span 
                  key={tool}
                  className="px-3 py-1.5 bg-secondary text-foreground/80 rounded-lg text-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
          
          <div 
            className="bg-white border border-border/40 rounded-2xl p-8 opacity-0 translate-y-8 transition-all duration-700 delay-500"
            ref={(el) => (skillRefs.current[skills.length + 1] = el)}
          >
            <h3 className="text-xl font-semibold mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3">
              {["Problem Solving", "Team Collaboration", "Communication", "Time Management", "Critical Thinking", "Adaptability", "Leadership", "Creativity"].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-foreground/80 rounded-lg text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
