
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Star, Bookmark } from 'lucide-react';

const Reflections = () => {
  const reflections = [
    {
      title: "Learning Through Challenges",
      content: "The most valuable lessons in my journey have come from facing difficult challenges head-on. Each obstacle has been an opportunity to grow my resilience and problem-solving abilities.",
      icon: BookOpen
    },
    {
      title: "The Power of Community",
      content: "I've discovered that meaningful progress rarely happens in isolation. Collaborating with diverse communities has expanded my perspective and enriched my work in countless ways.",
      icon: Star
    },
    {
      title: "Embracing the Journey",
      content: "I've learned that growth isn't linear and success isn't a destination. By embracing the process and staying curious, I've found joy in continuous evolution rather than focusing solely on outcomes.",
      icon: Bookmark
    }
  ];

  return (
    <section id="reflections" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">Reflections</h2>
          
          <div className="space-y-8">
            {reflections.map((reflection, index) => (
              <Card 
                key={index} 
                className="overflow-hidden border-none shadow-lg animate-fade-in"
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center flex-shrink-0">
                      <reflection.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{reflection.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{reflection.content}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reflections;
