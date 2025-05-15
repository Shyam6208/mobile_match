import React from 'react';
import PhoneCard from './PhoneCard';
import { Smartphone } from '../types';

interface PhoneGridProps {
  phones: Smartphone[];
  compareList: Smartphone[];
  onCompare: (phone: Smartphone) => void;
}

const PhoneGrid: React.FC<PhoneGridProps> = ({ phones, compareList, onCompare }) => {
  if (phones.length === 0) {
    return (
      <div className="min-h-[400px] flex flex-col items-center justify-center bg-gray-50 rounded-lg p-8 my-8">
        <img
          src="https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=800"
          alt="No results"
          className="w-32 h-32 object-cover rounded-full mb-4 opacity-70"
        />
        <h3 className="text-xl font-semibold text-gray-700 mb-2">No phones found</h3>
        <p className="text-gray-500 text-center max-w-md">
          We couldn't find any phones matching your filters. Try adjusting your search criteria.
        </p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {phones.length} Phones Found
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {phones.map((phone) => (
          <PhoneCard 
            key={phone.id} 
            phone={phone} 
            onCompare={onCompare}
            isCompared={compareList.some(p => p.id === phone.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneGrid;