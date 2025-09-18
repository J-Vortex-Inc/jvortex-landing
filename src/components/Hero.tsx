import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {



  return (
    <div className="bg-white text-black font-sans">
      {/* Hero Section */}
      <section  className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000`}>
            <h1 className="text-5xl md:text-8xl font-light tracking-tight mb-8 leading-tight font-poppins">
              Shaping the Future
              <br />
              <span className="font-extrabold">Simply and Smartly</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              At J Vortex, we build and nurture innovative companies that harness technology to simplify everyday life, unlock opportunities, and create lasting value for communities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a href="#ventures">
                <button className="bg-black text-white px-8 py-4 rounded-md text-lg hover:bg-gray-800 transition-all duration-300 flex items-center justify-center group">
                  Discover Our Ventures
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </a>
              <a href="#about">
                <button className="border-2 border-black text-black px-8 py-4 rounded-md text-lg hover:bg-black hover:text-white transition-all duration-300">
                  Learn More
                </button>
              </a>
            </div>


          </div>
        </div>
      </section>
   

     
      {/* Custom Styles */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        
        /* Slide in animation styles */
        .slide-in-section {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.8s ease-out, transform 0.8s ease-out;
        }
        
        .slide-in-visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default Hero;