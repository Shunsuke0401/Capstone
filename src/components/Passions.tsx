
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Rugby, Rocket, Users } from 'lucide-react';

const Passions = () => {
  const passions = [
    {
      icon: Code,
      title: 'Technology (Blockchain)',
      emoji: '💻',
      description: "I'm passionate about using technology to create impact, especially through blockchain. It's more than just code or finance — it's a tool to empower underrepresented voices. I entered the NFT space when I was just a teenager, and since then, I've been building projects that support diverse artists and challenge the status quo. Technology is where I can turn ideas into action."
    },
    {
      icon: Rugby,
      title: 'Sports (Rugby and Soccer)',
      emoji: '🏉',
      description: "Rugby and soccer have shaped who I am. They've taught me about teamwork, discipline, and pushing through limits. Whether I'm in a rugby scrum or chasing the ball on the soccer field, I learn how to lead, trust others, and keep growing. Sports also give me balance — they keep me grounded, sharp, and focused, even when life gets intense."
    },
    {
      icon: Rocket,
      title: 'Entrepreneurship (Starting My Own Company)',
      emoji: '🚀',
      description: "I started my first company because I saw problems and wanted to be part of the solution. Entrepreneurship gives me the freedom to build what matters — from creating a DAO to launching NFT collections with meaning. It's not always easy, especially being young, but every challenge pushes me to grow faster and think bigger."
    },
    {
      icon: Users,
      title: 'Having Fun with Friends at Boarding School',
      emoji: '🎉',
      description: "Living in a boarding school has been one of the most fun and meaningful parts of my life. Late-night talks, dorm pranks, shared meals — it's where I've built lifelong friendships. These moments remind me that success isn't just about working hard — it's also about enjoying the ride with the people around me."
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
                    <div className="text-2xl">{passion.emoji}</div>
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
