import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Code, Database, Wrench, Cloud } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: [
      { name: 'Angular', level: 90 },
      { name: 'JavaScript', level: 90 },
      { name: 'SQL', level: 90 },
      { name: 'Python', level: 90 },
      { name: 'PHP', level: 90 },
      { name: 'HTML/CSS', level: 90 },
    ],
  },
  {
    title: 'Frameworks/Libraries',
    icon: Database,
    skills: [
      { name: 'ASP .Net', level: 90 },
      { name: 'Laravel', level: 90 },
      { name: 'TailwindCSS', level: 90 },
    ],
  },
  {
    title: 'Databases',
    icon: Wrench,
    skills: [
      { name: 'MySQL', level: 90 },
    ],
  },
  {
    title: 'Tools & Technologies',
    icon: Cloud,
    skills: [
      { name: 'SSMS', level: 90 },
      { name: 'Visual Studio', level: 90 },
      { name: 'Visual Studio Code', level: 90 },
      { name: 'Git', level: 90 },
      { name: 'GitHub', level: 90 },
    ],
  },
];

const Skills = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
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
            // My Skills
          </span>
          <h2 
            className={`section-title transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p 
            className={`section-subtitle max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            I've worked with a variety of technologies across the full stack, 
            always staying up-to-date with the latest trends and best practices.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`glass-card p-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${300 + categoryIndex * 150}ms` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                  <category.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted-foreground font-medium">{skill.name}</span>
                      <span className="text-primary font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${500 + categoryIndex * 150 + skillIndex * 100}ms`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Tags */}
        <div 
          className={`mt-12 text-center transition-all duration-700 delay-[800ms] ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-muted-foreground mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['REST APIs', 'Redis', 'MongoDB', 'Jest', 'Cypress', 'Figma', 'Agile', 'WebSocket'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-secondary/50 text-muted-foreground text-sm hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
