import React from 'react';
import { Smartphone, Facebook, Twitter, Instagram, Youtube, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Smartphone className="h-8 w-8 text-orange-500" />
              <h2 className="ml-2 text-2xl font-bold">Mobile Match</h2>
            </div>
            <p className="text-blue-200 mb-6">
              India's most trusted smartphone comparison platform. We help you find the perfect smartphone that fits your needs and budget.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Compare Phones</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Top Picks</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Latest News</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Buying Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Top Brands</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Apple</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Samsung</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">OnePlus</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">Xiaomi</a></li>
              <li><a href="#" className="text-blue-200 hover:text-white transition-colors">View All Brands</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-orange-500 mr-2" />
                <span className="text-blue-200">support@mobilematch.in</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-orange-500 mr-2" />
                <span className="text-blue-200">+91 98765 43210</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-2">Subscribe to Newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="px-3 py-2 bg-blue-900 text-white placeholder-blue-300 border border-blue-800 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <button className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-r-lg transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-blue-900 text-center">
          <p className="text-blue-300 text-sm">
            © 2025 Mobile Match. All rights reserved. Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;