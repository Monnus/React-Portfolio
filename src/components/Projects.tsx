import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Forkify Eats",
    description: `Forkify is a recipe web app using the Forkify API to allow users to search, view, modify, bookmark and add recipes.
     It allows users to freely lookup dishes that any users prepher to cook themselves.`,
    tags: ["CSS", "HTML", "sass", "api", "babel", "JS", "Vercel-deplloyment"],
    image: "https://images.unsplash.com/photo-1577308856961-8e9ec50d0c67",
    link: "https://forkify-project-nine.vercel.app/",
  },
  {
    id: 2,
    title: "Pig Game",
    description: `Pig game is the first ever game i complete from the jonas.io cource it is a game designed to alternate between 2pplayers ,
     to see who is the first to reach 100. roll the dice and the values get add to a counter up till hundred/100 , roll a on1(1); and you lose you points,
     which than switched to next player.`,
    tags: ["JS", "CSS", "Tailwind CSS", "Dom minipulation"],
    image: "https://images.unsplash.com/photo-1584022438821-9c8775205f0c",
    link: "https://monnus.github.io/Pig-game/",
  },
  {
    id: 3,
    title: "BankestApp",
    description: `Bankest" is a simplified banking application wrinten in TypeScript.It imitates bringing the power of financial management right to your fingertips. 
    As soon as you log in, you'll step into a virtual realm that emulates online login security of a real bank account.`,
    tags: ["TypeScript", "CSS"],
    image: "http://images.unsplash.com/photo-1666771621396-0160a92fd024",
    link: "https://monnus.github.io/BankestTS/",
  },
  {
    id: 4,
    title: "LabelLens",
    description: `LabelLens is a serverless image recognition web application built using AWS Rekognition. 
    It helps users identify product labels from uploaded images, making it perfect for inventory management or cataloging tasks. 
    The app supports both authenticated and unauthenticated users—unauthenticated users can instantly upload and analyze images, 
    while authenticated users can access history tracking for all their uploads.`,
    tags: ["TypeScript", "CSS","Awe","Dynamodb", "Cognito","S3-storage","Amplify","Rekognition"],
    image: "https://www.electronics-lab.com/wp-content/uploads/2022/03/Computer-Vision-Applications.jpg",
    link: "https://main.d3597sr9908kji.amplifyapp.com",
  },
];

export const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
          }
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  return (
    <section 
      id="projects" 
      className="py-24 px-6 bg-secondary/30"
      ref={sectionRef}
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-16 opacity-0 translate-y-4 transition-all duration-700"
             style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(4px)' }}>
          <span className="text-sm font-medium bg-secondary text-primary/90 px-4 py-1.5 rounded-full inline-block mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Featured Projects</h2>
          <p className="text-lg text-foreground/70">
            A collection of my recent work across various technologies and domains. 
            Each project represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "card-hover opacity-0 translate-y-8 transition-all duration-700",
              )}
              style={{ 
                opacity: isVisible ? 1 : 0, 
                transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
                transitionDelay: `${index * 100}ms`
              }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                <div className="relative overflow-hidden aspect-video">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                    style={{
                      transform: activeProject === project.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-white text-xl font-semibold">{project.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag}
                            className="text-xs font-medium bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-foreground/70 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs font-medium bg-secondary text-primary/80 px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a 
                    href={project.link}
                    className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center"
                  >
                    View Project
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M14 5l7 7m0 0l-7 7m7-7H3" 
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 opacity-0 translate-y-4 transition-all duration-700 delay-500"
             style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(4px)' }}>
          <a 
            href="#"
            className="inline-flex items-center justify-center h-12 px-6 font-medium border border-primary/20 text-primary rounded-lg transition-all hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};