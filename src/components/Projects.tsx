
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: 'Project One',
      description: 'A comprehensive application that demonstrates my skills in [technologies used]. This project allowed me to explore [concepts or techniques].',
      skills: ['React', 'TypeScript', 'Tailwind CSS'],
      image: '/placeholder.svg',
      demoLink: '#',
      repoLink: '#'
    },
    {
      title: 'Project Two',
      description: 'An innovative solution for [problem solved]. I implemented [key features] which significantly improved [metrics or outcomes].',
      skills: ['Node.js', 'Express', 'MongoDB'],
      image: '/placeholder.svg',
      demoLink: '#',
      repoLink: '#'
    },
    {
      title: 'Project Three',
      description: 'A creative project focused on [project focus]. I learned valuable lessons about [lessons learned] through the development process.',
      skills: ['Python', 'Django', 'PostgreSQL'],
      image: '/placeholder.svg',
      demoLink: '#',
      repoLink: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">Featured Projects</h2>
          
          <div className="grid gap-10">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow animate-fade-in"
              >
                <div className="md:grid md:grid-cols-2 gap-6">
                  <div className="aspect-video md:aspect-auto bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <CardContent className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, idx) => (
                        <span 
                          key={idx} 
                          className="inline-block px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mt-auto flex flex-wrap gap-4">
                      <Button asChild variant="default" size="sm" className="gap-2">
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          <ExternalLink size={16} />
                          Live Demo
                        </a>
                      </Button>
                      <Button asChild variant="outline" size="sm" className="gap-2">
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                          <Github size={16} />
                          View Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
