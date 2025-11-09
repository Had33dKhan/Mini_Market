// src/components/CategorySidebar.js
import React from 'react';

function CategorySidebar({ categories, selectedCategory, onCategorySelect }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sticky top-24 transition-colors">
      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">Categories</h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category}>
            <button
              onClick={() => onCategorySelect(category)}
              className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-orange-100 text-orange-700 dark:bg-orange-900 dark:text-orange-300'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CategorySidebar;