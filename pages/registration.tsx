import React, { useState } from 'react';

interface RegistrationProps {
  onClose: () => void;
}

export const Registration: React.FC<RegistrationProps> = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registering, setRegistering] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setRegistering(true);

    try {
      const response = await fetch('https://majorproject-backend-1.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }

      const data = await response.json();

      if (data.message === 'register successful') {
        setRegisterSuccess(true);
        localStorage.setItem('username', name); // Store username in localStorage
        
        window.location.reload();
      } else {
        // Handle registration failure (e.g., display an error message)
        console.error('Registration failed:', data.message);
      }
    } catch (error) {
      console.error('Registration error:', error);
    } finally {
      setRegistering(false);
    }
  };

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
        <form className="px-6 py-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-800">Name</label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              className="w-full px-4 py-2 mt-1 text-gray-800 bg-gray-200 border-none rounded-md
              focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 text-white ${registering ? 'bg-green-500' : 'bg-blue-500'} rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
            disabled={registering}
          >
            {registering ? 'Registering...' : 'Register'}
          </button>

        </form>

        {registerSuccess}
      </div>
    </div>
  );
};

export default Registration;
