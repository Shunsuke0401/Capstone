
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Compass, Target, Rocket } from 'lucide-react';

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
                  <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">My Direction</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I'm moving toward deeper expertise in interactive digital experiences, combining my technical skills with storytelling to create meaningful connections.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">My Goals</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  I aim to develop projects that blend technology and creativity to solve real problems while continuing to grow my technical and leadership skills.
                </p>
              </CardContent>
            </Card>
            
            <Card className="animate-fade-in border-none shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <Rocket className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h4 className="text-xl font-bold mb-2">My Aspirations</h4>
                <p className="text-gray-600 dark:text-gray-400">
                  Long-term, I aspire to build a community or platform that empowers others to pursue their creative and technical passions, fostering innovation and positive impact.
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
