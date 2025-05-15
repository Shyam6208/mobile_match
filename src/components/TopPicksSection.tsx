import React, { useState } from 'react';
import { ChevronRight, X } from 'lucide-react';
import { Smartphone } from '../types';

interface TopPicksSectionProps {
  smartphones: Smartphone[];
}

const TopPicksSection: React.FC<TopPicksSectionProps> = ({ smartphones }) => {
  const [showModal, setShowModal] = useState<'premium' | 'budget' | null>(null);

  // Get top premium and budget phones
  const premiumPhones = smartphones
    .filter(phone => phone.category.includes('Premium'))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  
  const budgetPhones = smartphones
    .filter(phone => phone.category.includes('Budget'))
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 5);
  
  // All premium and budget phones for modal
  const allPremiumPhones = smartphones
    .filter(phone => phone.category.includes('Premium'))
    .sort((a, b) => b.rating - a.rating);
  const allBudgetPhones = smartphones
    .filter(phone => phone.category.includes('Budget'))
    .sort((a, b) => b.rating - a.rating);

  // Best Overall (highest rated phone)
  const bestOverall = [...smartphones].sort((a, b) => b.rating - a.rating)[0];
  
  // Format price with commas for Indian currency format
  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <div className="bg-blue-50 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center">Top Picks</h2>
        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Our experts have curated the best smartphones across different price ranges to help you make the right choice
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Best Overall */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden md:col-span-2 mb-8">
            <div className="bg-green-600 text-white p-4 flex items-center">
              <h3 className="text-xl font-semibold flex-1">Best Overall</h3>
              <span className="bg-white text-green-600 px-3 py-1 rounded-full text-xs font-bold">Editor's Choice</span>
            </div>
            <div className="p-4 flex items-center">
              <img 
                src={bestOverall.image} 
                alt={bestOverall.name} 
                className="w-20 h-20 object-cover rounded-lg mr-6"
              />
              <div className="flex-grow">
                <h4 className="font-semibold text-gray-900 text-lg">{bestOverall.name}</h4>
                <p className="text-gray-500 text-sm mb-1">{bestOverall.processor} • {bestOverall.ram[0]} RAM</p>
                <p className="font-bold text-blue-900">₹{formatPrice(bestOverall.price)}</p>
                <div className="flex items-center text-sm text-orange-500 mt-1">
                  <span className="mr-1">{bestOverall.rating}</span>
                  <span>★</span>
                </div>
              </div>
            </div>
          </div>
          {/* Premium Phones */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-blue-900 text-white p-4">
              <h3 className="text-xl font-semibold">Best Premium Phones</h3>
              <p className="text-blue-200 text-sm">Top-tier performance and features</p>
            </div>
            <div className="p-4">
              {premiumPhones.map((phone, index) => (
                <div 
                  key={phone.id} 
                  className={`flex items-center py-3 ${
                    index < premiumPhones.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <img 
                    src={phone.image} 
                    alt={phone.name} 
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900">{phone.name}</h4>
                    <p className="text-gray-500 text-sm">{phone.processor} • {phone.ram[0]} RAM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-900">₹{formatPrice(phone.price)}</p>
                    <div className="flex items-center text-sm text-orange-500 mt-1">
                      <span className="mr-1">{phone.rating}</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              ))}
              <button 
                className="mt-4 w-full py-2 text-blue-700 hover:text-blue-900 flex items-center justify-center transition-colors"
                onClick={() => setShowModal('premium')}
              >
                View All Premium Phones <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          {/* Budget Phones */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="bg-orange-500 text-white p-4">
              <h3 className="text-xl font-semibold">Best Budget Phones</h3>
              <p className="text-orange-100 text-sm">Great performance without breaking the bank</p>
            </div>
            <div className="p-4">
              {budgetPhones.map((phone, index) => (
                <div 
                  key={phone.id} 
                  className={`flex items-center py-3 ${
                    index < budgetPhones.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <img 
                    src={phone.image} 
                    alt={phone.name} 
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900">{phone.name}</h4>
                    <p className="text-gray-500 text-sm">{phone.processor} • {phone.ram[0]} RAM</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-blue-900">₹{formatPrice(phone.price)}</p>
                    <div className="flex items-center text-sm text-orange-500 mt-1">
                      <span className="mr-1">{phone.rating}</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              ))}
              <button 
                className="mt-4 w-full py-2 text-orange-600 hover:text-orange-800 flex items-center justify-center transition-colors"
                onClick={() => setShowModal('budget')}
              >
                View All Budget Phones <ChevronRight className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal for All Phones */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative p-6">
            <button 
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={() => setShowModal(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <h2 className="text-2xl font-bold mb-6 text-center">
              {showModal === 'premium' ? 'All Premium Phones' : 'All Budget Phones'}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(showModal === 'premium' ? allPremiumPhones : allBudgetPhones).map(phone => (
                <div key={phone.id} className="flex items-center bg-gray-50 rounded-lg p-4 shadow">
                  <img 
                    src={phone.image} 
                    alt={phone.name} 
                    className="w-16 h-16 object-cover rounded-lg mr-4"
                  />
                  <div className="flex-grow">
                    <h4 className="font-semibold text-gray-900">{phone.name}</h4>
                    <p className="text-gray-500 text-sm mb-1">{phone.processor} • {phone.ram[0]} RAM</p>
                    <p className="font-bold text-blue-900">₹{formatPrice(phone.price)}</p>
                    <div className="flex items-center text-sm text-orange-500 mt-1">
                      <span className="mr-1">{phone.rating}</span>
                      <span>★</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopPicksSection;