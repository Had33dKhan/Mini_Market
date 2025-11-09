// // src/components/Home.js
// import React, { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import CategorySidebar from './CategorySidebar';
// import ProductGrid from './ProductGrid';
// import { useAuth } from '../contexts/AuthContext';
// import { useTheme } from '../contexts/ThemeContext';

// // Mock data for products
// const mockProducts = [
//   {
//     id: 1,
//     name: "Wireless Bluetooth Headphones",
//     price: 2999,
//     category: "Electronics",
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
//     description: "High-quality wireless headphones with noise cancellation"
//   },
//   {
//     id: 2,
//     name: "Smartphone X Pro",
//     price: 45999,
//     category: "Electronics",
//     image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
//     description: "Latest smartphone with advanced camera features"
//   },
//   {
//     id: 3,
//     name: "Men's Casual T-Shirt",
//     price: 899,
//     category: "Fashion",
//     image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
//     description: "Comfortable cotton t-shirt for everyday wear"
//   },
//   {
//     id: 4,
//     name: "Women's Running Shoes",
//     price: 3499,
//     category: "Fashion",
//     image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
//     description: "Lightweight running shoes for maximum comfort"
//   },
//   {
//     id: 5,
//     name: "Kitchen Blender",
//     price: 2499,
//     category: "Home & Living",
//     image: "https://plus.unsplash.com/premium_photo-1718043036199-d98bef36af46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000",
//     description: "Powerful blender for smoothies and food processing"
//   },
//   {
//     id: 6,
//     name: "Organic Coffee Beans",
//     price: 1299,
//     category: "Groceries",
//     image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=300&h=300&fit=crop",
//     description: "Premium organic coffee beans from Ethiopia"
//   },
//   {
//     id: 7,
//     name: "Laptop Backpack",
//     price: 1999,
//     category: "Electronics",
//     image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
//     description: "Water-resistant backpack with laptop compartment"
//   },
//   {
//     id: 8,
//     name: "Yoga Mat",
//     price: 1599,
//     category: "Sports",
//     image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
//     description: "Non-slip yoga mat for exercise and meditation"
//   },
//   {
//     id: 9,
//     name: "Smart Watch",
//     price: 7999,
//     category: "Electronics",
//     image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
//     description: "Feature-rich smartwatch with health monitoring"
//   },
//   {
//     id: 10,
//     name: "Wireless Mouse",
//     price: 1499,
//     category: "Electronics",
//     image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
//     description: "Ergonomic wireless mouse for comfortable use"
//   },
//   {
//     id: 11,
//     name: "Desk Lamp",
//     price: 1299,
//     category: "Home & Living",
//     image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
//     description: "Modern LED desk lamp with adjustable brightness"
//   },
//   {
//     id: 12,
//     name: "Water Bottle",
//     price: 599,
//     category: "Sports",
//     image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300&h=300&fit=crop",
//     description: "Insulated stainless steel water bottle"
//   }
// ];

// const categories = [
//   "All Categories",
//   "Electronics",
//   "Fashion",
//   "Groceries",
//   "Home & Living",
//   "Sports",
//   "Beauty",
//   "Toys"
// ];

// function Home() {
//    const { currentUser, logout } = useAuth();
//    const { isDark } = useTheme();

//   const [selectedCategory, setSelectedCategory] = useState("All Categories");
//   const [searchQuery, setSearchQuery] = useState("");
//   const location = useLocation();

//   useEffect(() => {
//     const urlParams = new URLSearchParams(location.search);
//     const search = urlParams.get('search');
//     if (search) {
//       setSearchQuery(search);
//     }
//   }, [location]);

//   const filteredProducts = mockProducts.filter(product => {
//     const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
//     const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//                          product.description.toLowerCase().includes(searchQuery.toLowerCase());
//     return matchesCategory && matchesSearch;
//   });

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-6">
//       <div className="flex flex-col lg:flex-row gap-6">
//         {/* Sidebar */}
//         <div className="lg:w-1/4">
//           <CategorySidebar
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onCategorySelect={setSelectedCategory}
//           />
//         </div>

//         {/* Main Content */}
//         <div className="lg:w-3/4">
//           {searchQuery && (
//             <div className="mb-4">
//               <h2 className="text-lg font-semibold dark:text-white">
//                 Search results for: "{searchQuery}"
//               </h2>
//               {filteredProducts.length === 0 && (
//                 <p className="text-gray-600 dark:text-gray-400 mt-2">
//                   Item not available.
//                 </p>
//               )}
//             </div>
//           )}
          
//           <ProductGrid products={filteredProducts} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;



// src/components/Home.js
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CategorySidebar from './CategorySidebar';
import ProductGrid from './ProductGrid';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext';

// Mock data for products
const mockProducts = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 2999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
    description: "High-quality wireless headphones with noise cancellation"
  },
  {
    id: 2,
    name: "Smartphone X Pro",
    price: 45999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop",
    description: "Latest smartphone with advanced camera features"
  },
  {
    id: 3,
    name: "Men's Casual T-Shirt",
    price: 899,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop",
    description: "Comfortable cotton t-shirt for everyday wear"
  },
  {
    id: 4,
    name: "Women's Running Shoes",
    price: 3499,
    category: "Fashion",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop",
    description: "Lightweight running shoes for maximum comfort"
  },
  {
    id: 5,
    name: "Kitchen Blender",
    price: 2499,
    category: "Home & Living",
    image: "https://plus.unsplash.com/premium_photo-1718043036199-d98bef36af46?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&fm=jpg&q=60&w=3000",
    description: "Powerful blender for smoothies and food processing"
  },
  {
    id: 6,
    name: "Organic Coffee Beans",
    price: 1299,
    category: "Groceries",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?w=300&h=300&fit=crop",
    description: "Premium organic coffee beans from Ethiopia"
  },
  {
    id: 7,
    name: "Laptop Backpack",
    price: 1999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop",
    description: "Water-resistant backpack with laptop compartment"
  },
  {
    id: 8,
    name: "Yoga Mat",
    price: 1599,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop",
    description: "Non-slip yoga mat for exercise and meditation"
  },
  {
    id: 9,
    name: "Smart Watch",
    price: 7999,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=300&h=300&fit=crop",
    description: "Feature-rich smartwatch with health monitoring"
  },
  {
    id: 10,
    name: "Wireless Mouse",
    price: 1499,
    category: "Electronics",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
    description: "Ergonomic wireless mouse for comfortable use"
  },
  {
    id: 11,
    name: "Desk Lamp",
    price: 1299,
    category: "Home & Living",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=300&fit=crop",
    description: "Modern LED desk lamp with adjustable brightness"
  },
  {
    id: 12,
    name: "Water Bottle",
    price: 599,
    category: "Sports",
    image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?w=300&h=300&fit=crop",
    description: "Insulated stainless steel water bottle"
  }
];

const categories = [
  "All Categories",
  "Electronics",
  "Fashion",
  "Groceries",
  "Home & Living",
  "Sports",
  "Beauty",
  "Toys"
];

function Home() {
  const { currentUser, logout } = useAuth();
  const { isDark } = useTheme();

  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const search = urlParams.get('search');
    if (search) {
      setSearchQuery(search);
    }
  }, [location]);

  const filteredProducts = mockProducts.filter(product => {
    const matchesCategory = selectedCategory === "All Categories" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-[1920px] mx-auto px-4 sm:px-6 md:px-8 py-6">
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        {/* Sidebar */}
        <div className="w-full lg:w-1/4 xl:w-1/5">
          <CategorySidebar
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />
        </div>

        {/* Main Content */}
        <div className="w-full lg:w-3/4 xl:w-4/5">
          {searchQuery && (
            <div className="mb-4">
              <h2 className="text-lg sm:text-xl font-semibold dark:text-white break-words">
                Search results for: "{searchQuery}"
              </h2>
              {filteredProducts.length === 0 && (
                <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
                  Item not available.
                </p>
              )}
            </div>
          )}
          <ProductGrid products={filteredProducts} />
        </div>
      </div>
    </div>
  );
}

export default Home;



