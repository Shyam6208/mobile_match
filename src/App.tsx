import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import PhoneGrid from './components/PhoneGrid';
import CompareBar from './components/CompareBar';
import CompareView from './components/CompareView';
import TopPicksSection from './components/TopPicksSection';
import Footer from './components/Footer';
import NewsSection from './components/NewsSection';
import { smartphones } from './data/smartphones';
import { Smartphone, FilterOptions } from './types';

function App() {
  const [filteredPhones, setFilteredPhones] = useState<Smartphone[]>(smartphones);
  const [compareList, setCompareList] = useState<Smartphone[]>([]);
  const [showCompareView, setShowCompareView] = useState<boolean>(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const phoneGridRef = React.useRef<HTMLDivElement>(null);

  const handleFilterChange = (filters: FilterOptions) => {
    const filtered = smartphones.filter((phone) => {
      // Filter by price range
      if (phone.price < filters.priceRange.min || phone.price > filters.priceRange.max) {
        return false;
      }

      // Filter by brand
      if (filters.brands.length > 0 && !filters.brands.includes(phone.brand)) {
        return false;
      }

      // Filter by features
      if (filters.features.length > 0 && !filters.features.some(feature => phone.features.includes(feature))) {
        return false;
      }

      // Filter by category
      if (filters.category.length > 0 && !filters.category.some(category => phone.category.includes(category))) {
        return false;
      }

      // Filter by search term
      if (filters.search && !phone.name.toLowerCase().includes(filters.search.toLowerCase()) && 
          !phone.brand.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }

      return true;
    });

    setFilteredPhones(filtered);
  };

  const handleCompare = (phone: Smartphone) => {
    if (compareList.some(p => p.id === phone.id)) {
      // Remove from compare list
      setCompareList(compareList.filter(p => p.id !== phone.id));
    } else {
      // Add to compare list (limit to 4 phones)
      if (compareList.length < 4) {
        setCompareList([...compareList, phone]);
      }
    }
  };

  const handleClearCompare = () => {
    setCompareList([]);
    setShowCompareView(false);
  };

  const handleRemoveFromCompare = (phone: Smartphone) => {
    setCompareList(compareList.filter(p => p.id !== phone.id));
    if (compareList.length <= 1) {
      setShowCompareView(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col" id="home">
      <Header />
      <HeroSection 
        onFindMyPhone={() => setIsFilterOpen(true)}
        onComparePhones={() => {
          if (phoneGridRef.current) {
            phoneGridRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      <main className="flex-grow">
        <div className="container mx-auto">
          <FilterSection 
            onFilterChange={handleFilterChange} 
            isOpen={isFilterOpen}
            setIsOpen={setIsFilterOpen}
          />
          <div ref={phoneGridRef} id="compare">
          <PhoneGrid 
            phones={filteredPhones} 
            compareList={compareList}
            onCompare={handleCompare}
          />
        </div>
        </div>
        <div id="top-picks">
        <TopPicksSection smartphones={smartphones} />
        </div>
        <div id="news">
          <NewsSection />
        </div>
      </main>
      <Footer />
      
      {/* Compare Bar */}
      <CompareBar 
        phones={compareList}
        onRemove={handleRemoveFromCompare}
        onClear={handleClearCompare}
        onCompare={() => setShowCompareView(true)}
      />
      
      {/* Compare View */}
      {showCompareView && compareList.length >= 2 && (
        <CompareView 
          phones={compareList}
          onClose={() => setShowCompareView(false)}
        />
      )}
    </div>
  );
}

export default App;