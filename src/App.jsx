// src/App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import { AuthProvider, useAuth } from './contexts/AuthContext';
// import { CartProvider } from './contexts/CartContext';
// import { ThemeProvider } from './contexts/ThemeContext';
// import Login from './components/Login';
// import SignUp from './components/SignUp';
// import Home from './components/Home';
// import CartPage from './components/CartPage';
// import Navbar from './components/Navbar';
// import './index.css'

// function ProtectedRoute({ children }) {
//   const { isAuthenticated } = useAuth();
//   return isAuthenticated ? children : <Navigate to="/login" />;
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <AuthProvider>
//         <CartProvider>
//           <Router>
//             <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
//               <Routes>
//                 <Route path="/login" element={<Login />} />
//                 <Route path="/signup" element={<SignUp />} />
//                 <Route path="/" element={
//                   <ProtectedRoute>
//                     <Navbar />
//                     <Home />
//                   </ProtectedRoute>
//                 } />
//                 <Route path="/cart" element={
//                   <ProtectedRoute>
//                     <Navbar />
//                     <CartPage />
//                   </ProtectedRoute>
//                 } />
//               </Routes>
//             </div>
//           </Router>
//         </CartProvider>
//       </AuthProvider>
//     </ThemeProvider>
//   );
// }

// export default App;



// // src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import CartPage from './components/CartPage';
import Navbar from './components/Navbar';
import logo from "./assets/thumbnail.webp"
import './index.css'


function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" />;
}

function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <Router>
            <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={
                  <ProtectedRoute>
                    <div>
                      <Navbar />
                      <Home />
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="/cart" element={
                  <ProtectedRoute>
                    <div>
                      <Navbar />
                      <CartPage />
                    </div>
                  </ProtectedRoute>
                } />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;