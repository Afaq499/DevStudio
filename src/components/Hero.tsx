import React from 'react';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900"></div>
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-10"></div>
      
      {/* Animated circles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full animate-pulse delay-1000"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Crafting Digital
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Experiences</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Professional web developer specializing in modern, responsive websites and web applications that drive results for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button 
              onClick={() => document.querySelector('#portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white/30 hover:border-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-white/10"
            >
              View My Work
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a href="https://github.com/" className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/afaqkhan301/" className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:thedevstudio71@gmail.com" className="text-white/70 hover:text-cyan-400 transition-colors duration-200">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;