
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Rocket, Users } from 'lucide-react';

const Future = () => {
  return (
    <section id="future" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">Looking Forward</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">My Direction</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  As I move into university, I'm excited to dive deeper into computer science, the field I love. I want to brush up my skills, learn from great minds, and keep building projects that challenge me to think differently.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">My Goals</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I aim to start a company that blends technology and creativity to solve real-world problems. Along the way, I want to keep leveling up my technical skills, while becoming a stronger, more empathetic leader.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">My Aspirations</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I aspire to build tools that empower people — whether it's artists finding a voice through Web3, or everyday users benefitting from simple yet powerful tech. I want to leave a mark not just by creating cool things, but by making lives better and more inclusive through innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Future;
