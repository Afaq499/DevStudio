import React from 'react';
import { Users, Award, Clock, Zap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '150+' },
    { icon: Award, label: 'Projects Completed', value: '200+' },
    { icon: Clock, label: 'Years Experience', value: '5+' },
    { icon: Zap, label: 'Technologies Mastered', value: '20+' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Building the Future of Web
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate web developer with over 5 years of experience creating 
              exceptional digital experiences. I specialize in modern web technologies 
              and frameworks to deliver fast, scalable, and user-friendly applications.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              My approach combines technical expertise with creative problem-solving 
              to help businesses establish a strong online presence and achieve their 
              digital goals.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50 hover:shadow-md transition-shadow duration-300">
                  <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Developer workspace"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-full h-full bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;