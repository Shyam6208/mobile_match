import React from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Smartphone } from '../types';

interface CompareBarProps {
  phones: Smartphone[];
  onRemove: (phone: Smartphone) => void;
  onClear: () => void;
  onCompare: () => void;
}

const CompareBar: React.FC<CompareBarProps> = ({ phones, onRemove, onClear, onCompare }) => {
  if (phones.length === 0) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-900 text-white shadow-lg z-40 transition-transform duration-300 transform animate-slideUp">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <h3 className="font-semibold mr-4">Compare Phones ({phones.length})</h3>
            <div className="hidden md:flex space-x-4">
              {phones.map((phone) => (
                <div key={phone.id} className="flex items-center bg-blue-800 rounded-lg px-3 py-2">
                  <img 
                    src={phone.image} 
                    alt={phone.name} 
                    className="w-8 h-8 object-cover rounded mr-2"
                  />
                  <span className="font-medium text-sm">{phone.name}</span>
                  <button 
                    className="ml-2 text-blue-300 hover:text-white transition-colors"
                    onClick={() => onRemove(phone)}
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <span className="bg-blue-800 rounded-lg px-3 py-2 text-sm">
                {phones.map(p => p.name).join(', ')}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button 
              className="text-blue-300 hover:text-white transition-colors text-sm font-medium"
              onClick={onClear}
            >
              Clear All
            </button>
            <button 
              className={`bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center ${phones.length < 2 ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={phones.length < 2}
              onClick={onCompare}
            >
              Compare <ArrowRight className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;