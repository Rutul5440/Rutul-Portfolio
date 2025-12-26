import { useScrollReveal } from '@/hooks/useScrollReveal';
import { ExternalLink, Github, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with real-time inventory management, payment processing, and analytics dashboard.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'Collaborative project management tool with real-time updates, drag-and-drop functionality, and team workspaces.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'Socket.io'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'AI Content Generator',
    description: 'An AI-powered content creation platform leveraging GPT models for generating marketing copy and blog posts.',
    tech: ['React', 'Python', 'FastAPI', 'OpenAI'],
    github: '#',
    live: '#',
    featured: true,
  },
  {
    title: 'Real-time Chat App',
    description: 'Scalable messaging platform with end-to-end encryption, media sharing, and group conversations.',
    tech: ['React', 'Firebase', 'WebRTC'],
    github: '#',
    featured: false,
  },
  {
    title: 'Portfolio Generator',
    description: 'Dynamic portfolio builder for developers with customizable themes and GitHub integration.',
    tech: ['Next.js', 'MDX', 'Tailwind'],
    github: '#',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Beautiful weather app with 7-day forecasts, location-based data, and animated visualizations.',
    tech: ['React', 'Chart.js', 'OpenWeather API'],
    github: '#',
    featured: false,
  },
];

const Projects = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-glow-secondary/5 rounded-tr-[200px] blur-3xl" />

      <div className="section-container relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className={`text-primary font-mono text-sm mb-4 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            // My Work
          </span>
          <h2 
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p 
            className={`section-subtitle max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            A selection of projects that showcase my skills and passion for building 
            exceptional digital experiences.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <div
              key={project.title}
              className={`glass-card p-8 group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              <div className="flex flex-col lg:flex-row gap-6 items-start">
                {/* Project Icon */}
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Folder className="text-primary" size={28} />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <div className="flex gap-3">
                      {project.github && (
                        <a 
                          href={project.github} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View GitHub"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a 
                          href={project.live} 
                          className="text-muted-foreground hover:text-primary transition-colors"
                          aria-label="View live site"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <h3 
          className={`text-xl font-bold text-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          Other Noteworthy Projects
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <div
              key={project.title}
              className={`glass-card p-6 hover-lift group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="flex justify-between items-start mb-4">
                <Folder className="text-primary" size={24} />
                <div className="flex gap-2">
                  {project.github && (
                    <a 
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={18} />
                    </a>
                  )}
                </div>
              </div>
              
              <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground font-mono">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
