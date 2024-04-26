// pages/login/Login.tsx


import React, { useState } from 'react';
import { Registration } from './registration'; // Import the Registration component

interface LoginProps {
  onClose: () => void;
}

export const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showRegistration, setShowRegistration] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  // Added to manage error messages
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async (e:any) => {
    e.preventDefault();
    

    // Replace with your actual API endpoint
    const response = await fetch('https://majorproject-backend-1.onrender.com/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    try {
      if (response.ok) {
        // Login successful
        setShowAlert(true);
        setEmail('');
        setPassword('');
        setErrorMessage(''); // Clear any previous error messages
         // Get user data from response
        //const userData = await response.json();

        const responseData = await response.json();
        const { user } = responseData;

        // Store username in localStorage
        localStorage.setItem('username', user.name);
        
        window.location.reload();
        
      } else {
        // Login failed with proper error handling
        const errorData = await response.json();
        setErrorMessage(errorData.message || 'Login failed'); // Use specific error message from response (if available) or a generic message
      }
    } catch (error) {
      console.error('Error during login:', error);
      setErrorMessage('An unexpected error occurred. Please try again later.');
    }
  };

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
        {showAlert }
        {errorMessage && (
          <div className="alert alert-danger px-6 py-3 mb-4 rounded" role="alert">
            {errorMessage}
          </div>
        )}
        <form className="px-6 py-4" onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800">Email</label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">Password</label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
export default Login;