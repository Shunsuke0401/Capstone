
import React from 'react';
import { Card } from '@/components/ui/card';

const passions = [
  {
    image: '/lovable-uploads/0591a23d-284a-46d4-a2e7-cac5ce5b04b7.png',
    alt: 'Technology',
  },
  {
    image: '/lovable-uploads/1f715b02-36a8-488e-be8a-e3663f0657f0.png',
    alt: 'Sports',
  },
  {
    image: '/lovable-uploads/49d918bc-a2c0-47db-81a4-1b60d0df97db.png',
    alt: 'Entrepreneurship',
  },
  {
    image: '/lovable-uploads/e4442e61-4d12-4975-9818-d8ef351b4b12.png',
    alt: 'Having fun with friends at boarding school',
  },
];

const Passions = () => {
  return (
    <section id="passions" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {passions.map((p, idx) => (
              <Card key={idx} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
                <div className="relative aspect-[4/3]">
                  <img
                    src={p.image}
                    alt={p.alt}
                    className="w-full h-full object-cover"
                  />
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
