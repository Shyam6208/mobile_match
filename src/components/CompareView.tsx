import React from 'react';
import { X, ChevronLeft, Check } from 'lucide-react';
import { Smartphone } from '../types';

interface CompareViewProps {
  phones: Smartphone[];
  onClose: () => void;
}

const CompareView: React.FC<CompareViewProps> = ({ phones, onClose }) => {
  // Format price with commas for Indian currency format
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const specCategories = [
    { 
      title: 'Performance', 
      specs: [
        { name: 'Processor', key: 'processor' },
        { name: 'RAM', key: 'ram', isArray: true },
        { name: 'Storage', key: 'storage', isArray: true }
      ] 
    },
    { 
      title: 'Display',
      specs: [
        { name: 'Display', key: 'display' }
      ]
    },
    { 
      title: 'Camera',
      specs: [
        { name: 'Camera', key: 'camera' }
      ]
    },
    { 
      title: 'Battery & Charging',
      specs: [
        { name: 'Battery', key: 'battery' }
      ]
    },
    { 
      title: 'Software',
      specs: [
        { name: 'Operating System', key: 'os' }
      ]
    }
  ];

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm flex justify-center items-center z-50 overflow-y-auto">
      <div className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-y-auto m-4">
        <div className="sticky top-0 bg-white z-10 shadow-sm">
          <div className="flex justify-between items-center p-4 border-b">
            <button 
              className="text-gray-600 hover:text-gray-900 flex items-center"
              onClick={onClose}
            >
              <ChevronLeft className="h-5 w-5 mr-1" /> Back to Results
            </button>
            <h2 className="text-xl font-bold text-gray-900">Phone Comparison</h2>
            <button 
              className="text-gray-600 hover:text-gray-900"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="p-2 sm:p-6">
          {/* Header with phone names */}
          <div className="flex w-full overflow-x-auto pb-4">
            <div className="min-w-[120px] max-w-[120px] flex-shrink-0"></div>
            {phones.map((phone) => (
              <div key={phone.id} className="flex flex-col items-center min-w-[180px] max-w-[220px] flex-shrink-0 mx-2">
                <img 
                  src={phone.image} 
                  alt={phone.name} 
                  className="w-20 h-20 sm:w-28 sm:h-28 object-cover rounded-lg mb-2 sm:mb-4"
                />
                <h3 className="text-base sm:text-lg font-semibold text-center mb-1 line-clamp-2">{phone.name}</h3>
                <p className="text-blue-900 font-bold mb-1 sm:mb-2 text-sm sm:text-base">₹{formatPrice(phone.price)}</p>
                <div className="flex flex-wrap justify-center gap-1 sm:gap-2 mb-2 sm:mb-4">
                  {phone.category.slice(0, 2).map((category) => (
                    <span key={category} className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded text-xs">
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Features comparison */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 bg-gray-100 p-3 rounded">Key Features</h3>
            {/* Mobile: vertical cards, Desktop: horizontal table */}
            <div className="block sm:hidden">
              <div className="flex flex-col gap-4">
                {phones.map((phone) => (
                  <div key={phone.id} className="bg-gray-50 rounded-lg p-4 shadow flex flex-col items-center">
                    <img src={phone.image} alt={phone.name} className="w-16 h-16 object-cover rounded mb-2" />
                    <h4 className="font-semibold text-center mb-1">{phone.name}</h4>
                    <div className="flex flex-wrap justify-center gap-1 mb-2">
                      {phone.category.slice(0, 2).map((category) => (
                        <span key={category} className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded text-xs">{category}</span>
                      ))}
                    </div>
                    <ul className="w-full">
                      {['5G', 'Fast Charging', 'Wireless Charging', 'Water Resistant', 'AMOLED Display'].map((feature) => (
                        <li key={feature} className="flex items-center justify-between py-1 border-b last:border-b-0 text-sm">
                          <span>{feature}</span>
                          {phone.features.includes(feature) ? (
                            <Check className="h-5 w-5 text-green-500" />
                          ) : (
                            <X className="h-5 w-5 text-red-400" />
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {/* Desktop: horizontal table */}
            <div className="hidden sm:flex w-full overflow-x-auto">
              <div className="min-w-[120px] max-w-[120px] flex-shrink-0 font-medium text-gray-700 sticky left-0 bg-gray-100 z-10 border-r">Features</div>
              {phones.map((phone) => (
                <div key={phone.id} className="min-w-[180px] max-w-[220px] flex-shrink-0"></div>
              ))}
              {['5G', 'Fast Charging', 'Wireless Charging', 'Water Resistant', 'AMOLED Display'].map((feature) => (
                <React.Fragment key={feature}>
                  <div className="min-w-[120px] max-w-[120px] flex-shrink-0 py-3 border-b text-gray-600 sticky left-0 bg-white z-10 border-r">{feature}</div>
                  {phones.map((phone) => (
                    <div key={`${phone.id}-${feature}`} className="min-w-[180px] max-w-[220px] flex-shrink-0 py-3 border-b text-center">
                      {phone.features.includes(feature) ? (
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <X className="h-5 w-5 text-red-400 mx-auto" />
                      )}
                    </div>
                  ))}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Detailed specs comparison */}
          {specCategories.map((category) => (
            <div key={category.title} className="mb-8">
              <h3 className="text-lg font-semibold mb-4 bg-gray-100 p-3 rounded">{category.title}</h3>
              <div className="flex w-full overflow-x-auto">
                <div className="min-w-[120px] max-w-[120px] flex-shrink-0 text-gray-600 sticky left-0 bg-white z-10 border-r">
                  {category.specs.map((spec) => (
                    <div key={spec.name} className="py-3 border-b">{spec.name}</div>
                  ))}
                </div>
                {phones.map((phone) => (
                  <div key={phone.id} className="min-w-[180px] max-w-[220px] flex-shrink-0">
                    {category.specs.map((spec) => {
                      const value = phone[spec.key as keyof Smartphone];
                      const displayValue = spec.isArray && Array.isArray(value) 
                        ? value.join(', ')
                        : String(value);
                      return (
                        <div key={`${phone.id}-${spec.name}`} className="py-3 border-b text-center font-medium text-xs sm:text-base">
                          {displayValue}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompareView;