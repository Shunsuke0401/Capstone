
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';

const About = () => {
  return <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-teal-500 shadow-xl">
                  <div className="absolute inset-2 bg-white dark:bg-gray-800 rounded-xl flex items-center justify-center">
                    <p className="text-lg font-medium text-center px-4">Your Profile Image Here</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-80 blur-xl"></div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Hi, I'm Shunsuke — a passionate individual dedicated to continuous growth and learning. With a background in entrepreneurship, digital art, and technology, I've developed a unique perspective that helps me approach challenges with creativity and purpose.

My journey has been driven by curiosity and a desire to create meaningful work that leaves a positive impact. I believe in the power of inclusivity and innovation, and I aim to bring those values into everything I do.

When I'm not exploring new ideas or working on projects, you can find me on the rugby field, editing videos, or enjoying deep conversations with people who inspire me.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default About;
