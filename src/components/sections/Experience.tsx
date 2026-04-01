import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, GraduationCap } from 'lucide-react';

const experiences = [
  {
    type: 'work',
    title: 'Angular- ASP .NET Developer',
    company: 'Flow Rocket LLC- Ahmedabad (On-site)',
    period: 'November 2025 - Present',
    description: 'Developing applications using Angular and ASP .NET technologies.',
    achievements: [],
  },
  {
    type: 'work',
    title: 'PHP- LARAVEL INTERN',
    company: 'Kpyxal Solutions LLP- Gandhinagar, Gujarat (On-site)',
    period: 'June 2025 - September 2025',
    description: 'Designed and developed a scalable admin panel to streamline day-to-day operations for a pharmaceutical company.',
    achievements: [
      'Implemented import/export functionality Excel/CSV/PDF, enabling quick bulk data uploads/exports that reduced manual entry time by 70%',
      'Built multiple dynamic modules (Users, Roles, Products, Orders, Inventory) with CRUD operations, validation, and role-based access control',
      'Enhanced data accuracy and compliance by integrating real-time validation, error handling'
    ],
  },
  {
    type: 'work',
    title: 'PHP- LARAVEL INTERN',
    company: 'Avichal Techno Labs- Jaipur Rajasthan (Remote)',
    period: 'June 2025 - September 2025',
    description: 'Developed a dynamic admin panel for a car rental platform to manage cars, categories, and tourist destinations (places) efficiently.',
    achievements: [
      'Familiarized with and adapted to a new codebase structure, ensuring smooth onboarding and efficient navigation through existing projects',
      'Implemented enquiry/contact module to capture and manage customer queries in real-time, improving client communication',
      'Built settings module including company and footer settings, enabling non-technical users to update content dynamically without developer support'
    ],
  },
  {
    type: 'education',
    title: 'B.Tech in Computer Engineering',
    company: 'Ganpat University',
    period: '2021 - 2025',
    description: 'Graduated with CGPA: 6.88/10.0. Focused on software engineering and web development.',
    achievements: ['CGPA: 6.88/10.0'],
  },
  {
    type: 'education',
    title: 'Higher Secondary Education',
    company: 'Shree Ram Vidhyalaya, Palanpur, GHSEB',
    period: '2019 - 2021',
    description: 'Completed higher secondary education.',
    achievements: ['Percentage: 75'],
  },
  {
    type: 'education',
    title: 'Secondary School Education',
    company: 'Shree K.K. Gothi Highschool, Palanpur, GSEB',
    period: '2018 - 2019',
    description: 'Completed secondary school education.',
    achievements: ['Percentage: 75'],
  },
];

const Experience = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="section-container relative" ref={ref}>
        {/* Header */}
        <div className="text-center mb-16">
          <span 
            className={`text-primary font-mono text-sm mb-4 block transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            // My Journey
          </span>
          <h2 
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Experience & <span className="gradient-text">Education</span>
          </h2>
          <p 
            className={`section-subtitle max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            My professional journey and academic background that shaped my expertise.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="timeline-line" />

          {experiences.map((exp, index) => (
            <div
              key={`${exp.title}-${index}`}
              className={`relative pl-12 md:pl-0 mb-12 last:mb-0 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Timeline dot */}
              <div 
                className="timeline-dot"
                style={{ top: '24px' }}
              >
                <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-30" />
              </div>

              {/* Content card */}
              <div className={`md:ml-8 glass-card p-6 group ${index % 2 === 0 ? 'md:ml-8' : 'md:mr-8'}`}>
                {/* Icon and type */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    {exp.type === 'work' ? (
                      <Briefcase className="text-primary" size={20} />
                    ) : (
                      <GraduationCap className="text-primary" size={20} />
                    )}
                  </div>
                  <span className="text-xs text-primary font-mono uppercase tracking-wider">
                    {exp.type === 'work' ? 'Work Experience' : 'Education'}
                  </span>
                </div>

                {/* Title and company */}
                <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="text-primary font-medium">{exp.company}</span>
                  <span className="text-muted-foreground">•</span>
                  <span className="text-muted-foreground text-sm font-mono">{exp.period}</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="flex flex-wrap gap-2">
                  {exp.achievements.map((achievement) => (
                    <span
                      key={achievement}
                      className="px-3 py-1 rounded-full bg-secondary/50 text-muted-foreground text-xs"
                    >
                      ✓ {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
