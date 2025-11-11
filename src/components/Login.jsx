import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import logo from "../assets/thumbnail.webp";
import google from "../assets/g.png"
import { useTheme } from '../contexts/ThemeContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { isDark } = useTheme();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    if (login(email, password)) {
      navigate('/');
    } else {
      setError('Incorrect email or password.');
    }
  };

  const handleGoogleLogin = () => {
    alert("Google login clicked");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        {/* Logo and heading */}
        <div className="text-center">
          <img
            className="mx-auto h-20 w-20 sm:h-24 sm:w-24"
            src={logo}
            alt="Marketplace Logo"
          />
          <h2 className="mt-6 text-center text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm sm:text-base text-gray-600 dark:text-gray-400">
            Demo credentials: demo@market.com / 123456
          </p>
        </div>

        {/* Form */}
        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded text-sm sm:text-base">
              {error}
            </div>
          )}

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm md:text-base dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm md:text-base dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-3">
            {/* Normal Sign in */}
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm sm:text-base font-medium rounded-md text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors"
            >
              Sign in
            </button>

            {/* OR Divider */}
            <div className="flex items-center justify-center text-gray-400 dark:text-gray-300 text-sm sm:text-base font-medium">
              <span className="border-b border-gray-300 dark:border-gray-600 w-1/4 mr-2"></span>
              OR
              <span className="border-b border-gray-300 dark:border-gray-600 w-1/4 ml-2"></span>
            </div>

            {/* Google Sign in */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="group relative w-full flex items-center justify-center py-2 px-4 border border-gray-300 text-sm sm:text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-gray-700 transition-colors"
            >
              <img
                src={google}  
                alt="Google logo"
                className="w-5 h-5 mr-2"
              />
              Sign in with Google
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/signup"
              className="font-medium text-orange-600 hover:text-orange-500 dark:text-orange-400 text-sm sm:text-base"
            >
              Don't have an account? Sign up
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
