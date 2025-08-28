import React from 'react';
import { Globe, Smartphone, Zap, Search, ShoppingCart, Palette } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Vue, and Node.js.',
      features: ['Responsive Design', 'Performance Optimization', 'Cross-browser Compatibility']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Progressive web apps and mobile-first designs that work seamlessly across all devices.',
      features: ['PWA Development', 'Mobile Optimization', 'Touch-friendly Interfaces']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Speed up your website with advanced optimization techniques and best practices.',
      features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting']
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings with technical SEO and performance enhancements.',
      features: ['Technical SEO', 'Meta Optimization', 'Schema Markup']
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Full-featured online stores with secure payment processing and inventory management.',
      features: ['Payment Integration', 'Inventory Management', 'Order Processing']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive interfaces that provide exceptional user experiences.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Services I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive web development solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">{service.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-500 flex items-center">
                    <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;