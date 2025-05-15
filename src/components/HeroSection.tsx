import React from 'react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onFindMyPhone: () => void;
  onComparePhones: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onFindMyPhone, onComparePhones }) => {
  return (
    <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Smartphone
            </h1>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              Get personalized recommendations from India's largest smartphone comparison platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <button 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition-all transform hover:scale-105 shadow-lg"
                onClick={onFindMyPhone}
              >
                Find My Phone
              </button>
              <button 
                className="bg-transparent hover:bg-white/10 border border-white text-white font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center"
                onClick={onComparePhones}
              >
                Compare Phones <ChevronRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="text-blue-100 text-sm">
              Trusted by over 1 million users across India
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 flex justify-center md:justify-end items-center">
              <img 
                src="https://img.freepik.com/free-photo/social-media-audience-crowd-filming-through-smartphones-remixed-media_53876-128943.jpg?t=st=1746119080~exp=1746122680~hmac=4c84c512c7f944b4168c6589c259a50a1d01ede2d0f4602b118d1e44b7eaa7c3&w=1380" 
                alt="Smartphones" 
                className="rounded-xl shadow-2xl max-w-full h-auto transform translate-y-4 hover:-translate-y-2 transition-transform duration-500"
              />
            </div>
            <div className="absolute top-1/4 -left-4 md:-left-8 w-24 h-24 bg-orange-500 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute bottom-1/3 right-0 w-32 h-32 bg-blue-400 rounded-full blur-3xl opacity-30"></div>
          </div>
        </div>
      </div>
      <div className="bg-blue-950 py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center md:justify-between items-center gap-8 text-sm text-blue-200">
            <div className="flex items-center">
              <span className="font-semibold mr-2">12,000+</span> Phones Compared
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">50+</span> Brands
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Updated</span> Daily
            </div>
            <div className="flex items-center">
              <span className="font-semibold mr-2">Expert</span> Reviews
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;