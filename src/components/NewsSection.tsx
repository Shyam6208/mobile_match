import React from 'react';

const newsItems = [
  {
    title: 'Samsung Galaxy S25 Launch Date Announced',
    date: 'June 10, 2025',
    summary: 'Samsung has officially announced the launch date for its upcoming Galaxy S25 series, featuring new AI-powered camera features and a sleeker design.',
    image: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'iOS 19: What to Expect',
    date: 'June 8, 2025',
    summary: "Apple is set to unveil iOS 19 at WWDC, with major updates to privacy, widgets, and cross-device integration. Here's what you need to know.",
    image: 'https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: 'Best Budget Phones of 2025',
    date: 'June 5, 2025',
    summary: 'Looking for a great phone without breaking the bank? Check out our expert picks for the best budget smartphones available this year.',
    image: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    title: '5G Rollout Expands Across India',
    date: 'June 2, 2025',
    summary: 'Major telecom operators have expanded 5G coverage to more cities, promising faster speeds and better connectivity for all users.',
    image: 'https://images.pexels.com/photos/1786433/pexels-photo-1786433.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

const NewsSection: React.FC = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((news, idx) => (
            <div key={idx} className="bg-blue-50 rounded-xl shadow-md overflow-hidden flex flex-col">
              <img src={news.image} alt={news.title} className="h-48 w-full object-cover" />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{news.title}</h3>
                <p className="text-gray-500 text-sm mb-4">{news.date}</p>
                <p className="text-gray-700 flex-1">{news.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 