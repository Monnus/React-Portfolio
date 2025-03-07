import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100");
            entry.target.classList.add("translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    contentRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }

      contentRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id="about" className="py-24 px-6 bg-secondary/10" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className="opacity-0 translate-y-8 transition-all duration-700"
            ref={(el) => (contentRefs.current[0] = el)}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
                  alt="Developer coding"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center px-3 py-2">
                    <div className="text-3xl font-bold text-primary">5+</div>
                    <div className="text-sm text-foreground/70">
                      Years of Experience
                    </div>
                  </div>
                  <div className="text-center px-3 py-2">
                    <div className="text-3xl font-bold text-primary">12+</div>
                    <div className="text-sm text-foreground/70">
                      Projects Completed
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="opacity-0 translate-y-8 transition-all duration-700 delay-300"
            ref={(el) => (contentRefs.current[1] = el)}
          >
            <span className="text-sm font-medium bg-secondary text-primary/90 px-4 py-1.5 rounded-full inline-block mb-6">
              About Me
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Passionate Full-Stack Developer with a love for clean code
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p>
                I am a dedicated Software Developer with a passion for building
                engaging digital experiences through clean, efficient code.
                Skilled in developing user-friendly interfaces using React and
                React Native, I am proficient in creating both web and mobile
                applications. I have strong expertise in modern JavaScript
                (ES6+) and TypeScript, allowing me to write scalable,
                maintainable code while catching potential issues early in the
                development process. With a strong technical foundation and a
                commitment to continuous learning, I bring valuable
                contributions to any development team.
              </p>
              <p>
                I specialize in React, Node.js, and modern JavaScript, with
                experience in building everything from small business websites
                to complex enterprise applications. My approach combines
                technical expertise with a deep understanding of user needs.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, or mentoring junior
                developers. I believe in continuous learning and staying ahead
                of industry trends.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="font-medium">Location</div>
                <div className="text-foreground/70">Gauteng, Randfontein</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Email</div>
                <div className="text-foreground/70">maun2velsket@gmail.com</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Availability</div>
                <div className="text-foreground/70">Freelance & Full-time</div>
              </div>
              <div className="space-y-1">
                <div className="font-medium">Experience</div>
                <div className="text-foreground/70">5+ Years</div>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center h-12 px-6 font-medium bg-primary text-white rounded-lg transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Get In Touch
              </a>
              <a
                href="https://drive.google.com/file/d/1Yj5Bim-qRy2z94NXXXGOt-AsM2xxendN/view?usp=sharing"
                className="inline-flex items-center justify-center h-12 px-6 font-medium border border-primary/20 text-primary rounded-lg transition-all hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
             download="Resume" >
                Download CV
              </a>
            </div>
          </div>
        </div>

        <div
          className="mt-24 opacity-0 translate-y-8 transition-all duration-700 delay-500"
          ref={(el) => (contentRefs.current[2] = el)}
        >
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Professional Journey
            </h2>
            <p className="text-foreground/70">
              A brief overview of my professional experience and education.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-border/40">
                Work Experience
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full before:-ml-1.5 before:ring-4 before:ring-secondary">
                  <div className="font-semibold">
                    Senior Full-Stack Developer
                  </div>
                  <div className="text-primary/80 font-medium mb-2">
                    OpenLearn JS developer. • 2019 - Present
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Lead development of enterprise web applications, manage a
                    team of 5 developers, implemented CI/CD pipelines, and
                    reduced app loading time by 40%.
                  </p>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary/80 before:rounded-full before:-ml-1.5 before:ring-4 before:ring-secondary">
                  <div className="font-semibold">Full-Stack Developer</div>
                  <div className="text-primary/80 font-medium mb-2">
                    CodeTribe, Soweto• 2022 - 2023
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Developed responsive web applications using React and
                    Firebase.js, React-Native(expo), collaborated with design and product teams, and
                    improved API performance and consistent practical code.
                  </p>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary/60 before:rounded-full before:-ml-1.5 before:ring-4 before:ring-secondary">
                  <div className="font-semibold">Frontend Developer</div>
                  <div className="text-primary/80 font-medium mb-2">
                    Creative Digital • 2016 - 2018
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Built interactive UI components for client websites,
                    implemented responsive designs, and optimized website
                    performance and accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 pb-2 border-b border-border/40">
                Education & Certifications
              </h3>
              <div className="space-y-8">
                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary before:rounded-full before:-ml-1.5 before:ring-4 before:ring-secondary">
                  <div className="font-semibold">AWS Certified Developer</div>
                  <div className="text-primary/80 font-medium mb-2">
                    Amazon Web Services • 2024
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Specialized in deploying, managing, and scaling applications
                    on AWS platform.
                  </p>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary/80 before:rounded-full before:-ml-1.5 before:ring-4 before:ring-secondary">
                  <div className="font-semibold">FreeCode Camp</div>
                  <div className="text-primary/80 font-medium mb-2">
                     • 2021 - 2022
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Specialized in web technologies and distributed systems.
                    Thesis on scalable real-time applications, responsive design
                  </p>
                </div>

                <div className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-3 before:h-3 before:bg-primary/60 before:rounded-full before:-ml-1.5 before:ring-4 before:ring-secondary">
                  <div className="font-semibold">
                  Microsoft azure
                  </div>
                  <div className="text-primary/80 font-medium mb-2">
                    - 2023 
                  </div>
                  <p className="text-foreground/70 text-sm">
                    Graduated fundementals of Gen AI. Focus on basic knowlegde and understanding
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
