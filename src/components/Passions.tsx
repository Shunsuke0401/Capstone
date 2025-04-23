
import React from 'react';
import { Card } from '@/components/ui/card';

const Passions = () => {
  const passions = [
    {
      title: 'Technology (Blockchain)',
      image: 'https://raw.githubusercontent.com/Shunsuke0401/img/refs/heads/main/git.png',
      alt: 'Speaking at NFT conference'
    },
    {
      title: 'Sports (Rugby and Soccer)',
      image: '/lovable-uploads/374fefa5-27e8-4487-9c32-bbf068ccfb19.png',
      alt: 'Playing rugby at Brentwood'
    },
    {
      title: 'Entrepreneurship',
      image: '/lovable-uploads/af064761-2c30-4780-b62f-62b035286628.png',
      alt: 'At VeeCon conference'
    },
    {
      title: 'Having Fun with Friends',
      image: '/lovable-uploads/cb7404ed-628b-4c83-83e1-895d3402dfc4.png',
      alt: 'With rugby team at Brentwood'
    }
  ];

  return (
    <section id="passions" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">My Passions</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {passions.map((passion, index) => (
              <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <img
                    src={passion.image}
                    alt={passion.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <h4 className="text-xl font-bold text-white">{passion.title}</h4>
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

export default Passions;

