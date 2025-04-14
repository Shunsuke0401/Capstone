
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Brain } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading text-center mb-16">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div className="animate-fade-in">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600 to-teal-500 shadow-xl">
                  <img 
                    src="/lovable-uploads/21d6e9a9-a797-41f6-86d8-e2571940c6fc.png" 
                    alt="Shunsuke Nakatani"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-80 blur-xl"></div>
              </div>
            </div>
            
            <div className="animate-slide-in-right">
              <h3 className="text-2xl font-bold mb-4">Who I Am</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">Hi, I'm Shunsuke — a Grade 12 student from Ellis House at Brentwood College School. I'm someone who really enjoys learning and trying new things. I have a background in entrepreneurship, digital art, and technology, which helps me see challenges in creative and meaningful ways.

At the beginning of Grade 9, I became interested in blockchain technology. Since then, I've fallen in love with it and have been working on projects outside of school almost every day. I've also attended many conferences and had the chance to speak at a few of them.

When I'm not working on new ideas or building something, you'll probably find me playing rugby, editing videos, or having deep conversations with people who inspire me.</p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};

export default About;
