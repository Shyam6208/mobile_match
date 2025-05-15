import React, { useState } from 'react';
import { Menu, X, Smartphone, Search, User } from 'lucide-react';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 bg-white bg-opacity-95 backdrop-blur-sm shadow-sm z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Smartphone className="h-8 w-8 text-blue-800" />
          <h1 className="ml-2 text-2xl font-bold text-blue-900">Mobile Match</h1>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors">Home</a>
          <a href="#compare" className="text-gray-700 hover:text-blue-800 transition-colors">Compare</a>
          <a href="#top-picks" className="text-gray-700 hover:text-blue-800 transition-colors">Top Picks</a>
          <a href="#news" className="text-gray-700 hover:text-blue-800 transition-colors">News</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <Search className="h-5 w-5 text-gray-600" />
          </button>
          <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
            <User className="h-5 w-5 text-gray-600" />
          </button>
        </div>
        
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X className="h-6 w-6 text-blue-800" />
          ) : (
            <Menu className="h-6 w-6 text-blue-800" />
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden py-4 px-4 bg-white border-t">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="text-gray-700 hover:text-blue-800 transition-colors py-2">Home</a>
            <a href="#compare" className="text-gray-700 hover:text-blue-800 transition-colors py-2">Compare</a>
            <a href="#top-picks" className="text-gray-700 hover:text-blue-800 transition-colors py-2">Top Picks</a>
            <a href="#news" className="text-gray-700 hover:text-blue-800 transition-colors py-2">News</a>
            <div className="flex space-x-4 py-2">
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <Search className="h-5 w-5 text-gray-600" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
                <User className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;