
import React from 'react';
import { Flower, Plane, Waves, Rocket, Mic, Briefcase } from 'lucide-react';

const Journey = () => {
  const journeyItems = [
    {
      icon: Flower,
      title: '2007 – Beginnings',
      emoji: '🌸',
      description: 'April 1st – Born in Osaka, Japan around 4 PM, under the cherry blossoms. A spring beginning full of potential.'
    },
    {
      icon: Plane,
      title: '2021 – A New Chapter',
      emoji: '✈️',
      description: 'Moved from Tokyo to Canada to study at Brentwood College School. Entered the blockchain world, buying my first NFT — the start of my tech journey.'
    },
    {
      icon: Waves,
      title: '2022 – Overcoming Struggles',
      emoji: '🌊',
      description: 'Faced challenges with English, but kept pushing. Saw major improvements in my language skills and confidence.'
    },
    {
      icon: Rocket,
      title: '2023 – Growth & Connection',
      emoji: '🚀',
      description: 'My grades improved in Grade 10. Found a mentor through the NFT community. Became deeply immersed in the NFT world — learning by doing.'
    },
    {
      icon: Mic,
      title: '2024 – Sharing Your Voice',
      emoji: '🎤',
      description: 'Gave a TED Talk on NFTs, inspiring others and making digital art fun again. Took leadership roles and continued building Iris DAO.'
    },
    {
      icon: Briefcase,
      title: '2025 – Looking Ahead',
      emoji: '💼',
      description: 'At Career Day, had meaningful conversations with professionals in the crypto and tech industries. Gained valuable insights for my future path.'
    }
  ];

  return (
    <section id="journey" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">My Life Journey</h2>
          
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
                      <h3 className="text-xl font-bold flex items-center gap-2">
                        <span className="md:hidden">{item.emoji}</span>
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                {/* Icon for desktop */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-blue-600 dark:bg-blue-500 flex items-center justify-center z-10">
                    <span className="text-lg">{item.emoji}</span>
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
