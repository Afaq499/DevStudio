import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Outstanding work! The website exceeded our expectations and significantly improved our online presence. Highly professional and delivered on time.'
    },
    {
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthCo',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'The e-commerce platform they built for us has increased our sales by 40%. The attention to detail and user experience is remarkable.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Founder, Creative Studio',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300',
      rating: 5,
      text: 'Incredible design skills and technical expertise. They transformed our vision into a beautiful, functional website that our clients love.'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-900 to-cyan-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            What Clients Say
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 hover:bg-white/15 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-cyan-400 mb-4" />
              
              <p className="text-white mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-blue-200 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mt-4">
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <Star key={starIndex} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;