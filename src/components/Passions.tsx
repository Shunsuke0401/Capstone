
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Code, Video, Lightbulb } from 'lucide-react';

const Passions = () => {
  const passions = [
    {
      icon: Code,
      title: 'Technology & Innovation',
      description: 'I'm fascinated by the ways technology can solve real-world problems and create meaningful experiences. I enjoy exploring new tools and frameworks to build creative solutions.'
    },
    {
      icon: Video,
      title: 'Digital Storytelling',
      description: 'Creating compelling narratives through video editing and digital content is one of my favorite creative outlets. I love how visual stories can communicate complex ideas and emotions.'
    },
    {
      icon: Lightbulb,
      title: 'Entrepreneurship',
      description: 'Building something from nothing and seeing ideas come to life energizes me. I'm drawn to the process of identifying opportunities and developing innovative solutions.'
    },
    {
      icon: Heart,
      title: 'Rugby & Team Sports',
      description: 'Beyond the digital world, I find joy in physical activity and team sports, especially rugby. The camaraderie and strategic elements parallel many of the collaborative aspects I love in my professional work.'
    }
  ];

  return (
    <section id="passions" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">My Passions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {passions.map((passion, index) => (
              <Card key={index} className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                    <passion.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold mb-2">{passion.title}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{passion.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Passions;
