import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Monitor, 
  Server, 
  Smartphone, 
  Palette, 
  Zap, 
  Shield 
} from 'lucide-react';

const services = [
  {
    icon: Monitor,
    title: 'Web Development',
    description: 'Building responsive, performant web applications with modern frameworks like React, Next.js, and Vue.',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'Designing robust APIs and server-side logic with Node.js, Python, and scalable database architectures.',
  },
  {
    icon: Smartphone,
    title: 'Mobile-First Design',
    description: 'Creating seamless experiences across all devices with responsive design and progressive web apps.',
  },
  {
    icon: Palette,
    title: 'UI/UX Implementation',
    description: 'Transforming designs into pixel-perfect interfaces with attention to user experience and accessibility.',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Enhancing application speed and efficiency through code optimization, caching, and best practices.',
  },
  {
    icon: Shield,
    title: 'Security & Best Practices',
    description: 'Implementing secure coding practices, authentication systems, and data protection measures.',
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="services" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-primary/5 rounded-l-full blur-3xl -translate-y-1/2" />

      <div className="section-container relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className={`text-primary font-mono text-sm mb-4 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            // What I Do
          </span>
          <h2 
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            My <span className="gradient-text">Services</span>
          </h2>
          <p 
            className={`section-subtitle max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            I offer comprehensive development services to bring your ideas to life 
            with quality and precision.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`glass-card p-8 group cursor-default transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-glow-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                <service.icon className="text-primary" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Hover indicator */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-sm font-medium">Learn more</span>
                <span className="text-lg">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
