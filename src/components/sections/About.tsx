import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Target, Rocket, Heart, Code, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const highlights = [
  { icon: Code, label: 'Angular & ASP .NET' },
  { icon: Target, label: 'PHP & Laravel' },
  { icon: Rocket, label: 'Full-Stack Development' },
  { icon: Heart, label: 'Problem Solver' },
];

const About = () => {
  const { ref, isVisible } = useScrollReveal();
  const resumeUrl = `${import.meta.env.BASE_URL}resume/RutulSuthar_Resume.pdf`;

  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-[200px] blur-3xl" />

      <div className="section-container relative" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Image/Visual */}
          <div 
            className={`relative transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            }`}
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 blur-2xl animate-pulse-glow" />
              
              {/* Main card */}
              <div className="relative glass-card p-8 h-full flex flex-col justify-center items-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-glow-secondary mb-6 flex items-center justify-center">
                  <span className="text-5xl">👨‍💻</span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 gradient-text">Rutul Suthar</h3>
                <p className="text-muted-foreground text-center font-mono text-sm">
                  Software Engineer
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8 w-full">
                  {highlights.map((item, index) => (
                    <div 
                      key={item.label}
                      className="flex items-center gap-2 p-3 rounded-lg bg-secondary/50"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <item.icon className="text-primary" size={18} />
                      <span className="text-xs text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 rounded-xl bg-primary/20 backdrop-blur-sm border border-primary/30 flex items-center justify-center animate-float">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-xl bg-glow-secondary/20 backdrop-blur-sm border border-glow-secondary/30 flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-2xl">🚀</span>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-16'
            }`}
          >
            <span className="text-primary font-mono text-sm mb-4 block">// About Me</span>
            <h2 className="section-title">
              Crafting Digital <span className="gradient-text">Excellence</span>
            </h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate <span className="text-foreground font-medium">Full-Stack Developer</span> with 
                experience in Angular, ASP .NET, PHP, and Laravel. I specialize in 
                creating dynamic web applications and admin panels with efficient data management.
              </p>
              
              <p>
                My journey in software development includes internships at Kpyxal Solutions LLP and Avichal Techno Labs, 
                where I built scalable admin panels and implemented CRUD operations with role-based access control. 
                Currently working at Flow Rocket LLC using Angular and ASP .NET.
              </p>
              
              <p>
                I believe in writing <span className="text-primary"> clean, maintainable code</span> and 
                enhancing data accuracy through real-time validation and error handling. I'm always eager to 
                take on new challenges and learn new technologies.
              </p>
            </div>

            <div className="mt-8 flex">
              <Button asChild size="lg" className="w-full sm:w-auto shadow-lg shadow-primary/20">
                <a
                  href={resumeUrl}
                  download="RutulSuthar_Resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Download Rutul Suthar resume"
                >
                  <Download size={18} />
                  Download Resume
                </a>
              </Button>
            </div>

            {/* Philosophy card */}
            <div className="mt-8 p-6 rounded-xl bg-gradient-to-r from-primary/10 to-transparent border-l-4 border-primary">
              <p className="text-foreground italic">
                "Great software is not just about functionality—it's about creating experiences that 
                delight users and solve real problems."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
