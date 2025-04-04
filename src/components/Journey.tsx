
import React from 'react';
import { BookOpen, Award, Briefcase, GraduationCap } from 'lucide-react';

const Journey = () => {
  const journeyItems = [
    {
      icon: BookOpen,
      title: 'Started Learning',
      date: '2019',
      description: 'Began my journey in [your field] by learning the fundamentals through online courses and self-study.'
    },
    {
      icon: GraduationCap,
      title: 'Formal Education',
      date: '2020',
      description: 'Completed my [degree/certification] in [field], enhancing my theoretical foundation.'
    },
    {
      icon: Briefcase,
      title: 'First Project',
      date: '2021',
      description: 'Worked on my first major project, where I [accomplished something significant] and learned valuable practical skills.'
    },
    {
      icon: Award,
      title: 'Achievement',
      date: '2022',
      description: 'Recognized for [your achievement or milestone], which validated my growth and expertise in the field.'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">My Learning Journey</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-600 dark:bg-blue-500"></div>
            
            {/* Journey items */}
            {journeyItems.map((item, index) => (
              <div 
                key={index} 
                className={`relative flex md:items-center mb-12 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className={`bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg animate-fade-in ${
                    index % 2 === 0 ? 'animate-slide-in-right' : 'animate-slide-up'
                  }`}>
                    <div className="flex items-center mb-3 gap-2">
                      <div className={`md:hidden p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400`}>
                        <item.icon size={16} />
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-blue-600 dark:text-blue-400 mb-2">{item.date}</p>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                {/* Icon for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Empty div for layout balance */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
