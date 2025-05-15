import React from 'react';
import { Star, Heart, BarChart4 } from 'lucide-react';
import { Smartphone } from '../types';

interface PhoneCardProps {
  phone: Smartphone;
  onCompare: (phone: Smartphone) => void;
  isCompared: boolean;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ phone, onCompare, isCompared }) => {
  // Format price with commas for Indian currency format
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1">
      <div className="relative">
        <img 
          src={phone.image} 
          alt={phone.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <button className="bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Heart className="h-5 w-5 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>
        {phone.popular && (
          <div className="absolute top-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
            Popular
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-1">{phone.name}</h3>
            <p className="text-sm text-gray-500 mb-2">{phone.brand}</p>
          </div>
          <div className="flex items-center bg-blue-50 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-500 mr-1" fill="currentColor" />
            <span className="text-sm font-medium">{phone.rating}</span>
          </div>
        </div>
        
        <div className="mt-3 space-y-2">
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-500">Processor</span>
              <span className="font-medium text-gray-800 truncate" title={phone.processor}>
                {phone.processor}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">RAM</span>
              <span className="font-medium text-gray-800">
                {phone.ram.join(', ')}
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex flex-col">
              <span className="text-gray-500">Camera</span>
              <span className="font-medium text-gray-800">{phone.camera}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-gray-500">Battery</span>
              <span className="font-medium text-gray-800">{phone.battery}</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <p className="text-xs text-gray-500">Starting from</p>
            <p className="text-xl font-bold text-blue-900">₹{formatPrice(phone.price)}</p>
          </div>
          <button 
            className={`flex items-center px-3 py-2 rounded-lg transition-colors ${
              isCompared 
                ? 'bg-blue-100 text-blue-800' 
                : 'bg-blue-800 text-white hover:bg-blue-700'
            }`}
            onClick={() => onCompare(phone)}
          >
            <BarChart4 className="h-4 w-4 mr-1" />
            {isCompared ? 'Added' : 'Compare'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;