import React, { useState } from 'react';

interface LoginProps {
  onClose: () => void;
}

interface RegistrationProps {
  onClose: () => void;
}

export const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [showRegistration, setShowRegistration] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gray-900 bg-opacity-70 backdrop-blur-lg flex items-center justify-center">
      <div className="w-96 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-800 rounded-t-lg">
          <h2 className="text-lg font-semibold text-white">Login</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form className="px-6 py-4">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Login
          </button>
        </form>
        <div className="px-6 py-2">
          <p className="text-sm text-gray-700">
            Dont have an account?{' '}
            <button onClick={handleRegisterClick} className="text-blue-500 hover:underline focus:outline-none">
              Register here
            </button>
          </p>
        </div>
      </div>
      {showRegistration && <Registration onClose={() => setShowRegistration(false)} />}
    </div>
  );
};

export const Registration: React.FC<RegistrationProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gray-900 bg-opacity-70 backdrop-blur-lg flex items-center justify-center">
      <div className="w-96 bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="flex items-center justify-between px-6 py-4 bg-gray-800 rounded-t-lg">
          <h2 className="text-lg font-semibold text-white">Registration</h2>
          <button onClick={onClose} className="text-white hover:text-gray-200 focus:outline-none">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <form className="px-6 py-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};