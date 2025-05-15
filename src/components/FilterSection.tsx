import React, { useState } from 'react';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { FilterOptions, PriceRange } from '../types';

interface FilterSectionProps {
  onFilterChange: (filters: FilterOptions) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ onFilterChange, isOpen, setIsOpen }) => {
  const [filters, setFilters] = useState<FilterOptions>({
    priceRange: { min: 0, max: 150000 },
    brands: [],
    features: [],
    category: [],
    search: ''
  });

  const brands = ['Apple', 'Samsung', 'Xiaomi', 'OnePlus', 'Nothing', 'Realme', 'Poco', 'iQOO', 'Motorola', 'Redmi', 'Vivo'];
  const features = ['5G', 'Fast Charging', 'Wireless Charging', 'Water Resistant', 'High Refresh Rate', 'AMOLED Display'];
  const categories = ['Premium', 'Mid-range', 'Budget', 'Gaming', 'Camera', 'Battery', 'Performance'];

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFilters = { ...filters, search: e.target.value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handlePriceChange = (type: 'min' | 'max', value: string) => {
    const numberValue = parseInt(value) || 0;
    const newPriceRange = { ...filters.priceRange, [type]: numberValue };
    const newFilters = { ...filters, priceRange: newPriceRange };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBrandChange = (brand: string) => {
    let newBrands;
    if (filters.brands.includes(brand)) {
      newBrands = filters.brands.filter(b => b !== brand);
    } else {
      newBrands = [...filters.brands, brand];
    }
    const newFilters = { ...filters, brands: newBrands };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleFeatureChange = (feature: string) => {
    let newFeatures;
    if (filters.features.includes(feature)) {
      newFeatures = filters.features.filter(f => f !== feature);
    } else {
      newFeatures = [...filters.features, feature];
    }
    const newFilters = { ...filters, features: newFeatures };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleCategoryChange = (category: string) => {
    let newCategories;
    if (filters.category.includes(category)) {
      newCategories = filters.category.filter(c => c !== category);
    } else {
      newCategories = [...filters.category, category];
    }
    const newFilters = { ...filters, category: newCategories };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const resetFilters = () => {
    const newFilters = {
      priceRange: { min: 0, max: 150000 },
      brands: [],
      features: [],
      category: [],
      search: ''
    };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  return (
    <div className="bg-white shadow-md rounded-lg my-8">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search for smartphones..."
              className="w-full py-3 pl-10 pr-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={filters.search}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          <button 
            className="flex items-center justify-center px-4 py-3 bg-blue-50 text-blue-800 rounded-lg hover:bg-blue-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <SlidersHorizontal className="h-5 w-5 mr-2" />
            <span>Filters</span>
            {(filters.brands.length > 0 || filters.features.length > 0 || filters.category.length > 0 || 
              filters.priceRange.min > 0 || filters.priceRange.max < 150000) && (
              <span className="ml-2 bg-blue-800 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs">
                {filters.brands.length + filters.features.length + filters.category.length + 
                  (filters.priceRange.min > 0 ? 1 : 0) + (filters.priceRange.max < 150000 ? 1 : 0)}
              </span>
            )}
          </button>
        </div>

        {isOpen && (
          <div className="mt-6 bg-gray-50 p-4 rounded-lg border border-gray-200 animate-fadeIn">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Filter Options</h3>
              <div className="flex gap-2">
                <button 
                  className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
                  onClick={resetFilters}
                >
                  <X className="h-4 w-4 mr-1" /> Reset All
                </button>
                <button 
                  className="text-sm text-gray-500 hover:text-gray-800"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-2 text-gray-700">Price Range (₹)</h4>
                <div className="flex items-center gap-2">
                  <input 
                    type="number" 
                    placeholder="Min" 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={filters.priceRange.min || ''}
                    onChange={(e) => handlePriceChange('min', e.target.value)}
                  />
                  <span className="text-gray-500">to</span>
                  <input 
                    type="number" 
                    placeholder="Max" 
                    className="w-full p-2 border border-gray-300 rounded"
                    value={filters.priceRange.max || ''}
                    onChange={(e) => handlePriceChange('max', e.target.value)}
                  />
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="font-medium mb-2 text-gray-700">Brands</h4>
                <div className="flex flex-wrap gap-2">
                  {brands.map((brand) => (
                    <button
                      key={brand}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filters.brands.includes(brand)
                          ? 'bg-blue-800 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      } transition-colors`}
                      onClick={() => handleBrandChange(brand)}
                    >
                      {brand}
                    </button>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div>
                <h4 className="font-medium mb-2 text-gray-700">Features</h4>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <button
                      key={feature}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filters.features.includes(feature)
                          ? 'bg-blue-800 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      } transition-colors`}
                      onClick={() => handleFeatureChange(feature)}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="font-medium mb-2 text-gray-700">Categories</h4>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`px-3 py-1 rounded-full text-sm ${
                        filters.category.includes(category)
                          ? 'bg-blue-800 text-white'
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                      } transition-colors`}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSection;