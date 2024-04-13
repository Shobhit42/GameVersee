'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import cookie from 'js-cookie';



// ... other imports

const Login = () => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const router = useRouter();

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Call the API endpoint to authenticate the user
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (res.ok) {
      const data = await res.json();
      cookie.set('token', data.token, { expires: 2 });
      router.push('/');
    } else {
      setLoginError('Invalid email or password');
    }
  };

  return (
    <div className=' min-w-full min-h-full flex items-center justify-center absolute left-0 z-20 bg-gray-500 bg-opacity-35'>
      <div className=' relative bg-blue-950  w-3/6 h-4/6 rounded-2xl border border-white border-solid flex items-center justify-center  mt-20 pt-20'>
      <button className='absolute right-4 top-2'>x</button>
        <form onSubmit={handleSubmit} className='flex flex-col my-10'>
          
          <input
            className=' bg-white bg-opacity-0 bo p-2 mb-5 rounded-md border border-white border-solid placeholder:text-gray-100  '
            placeholder='email'
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className='relative'>
            <input
              className='bg-white bg-opacity-0 border border-white border-solid p-2 mb-5 rounded-md placeholder:text-gray-100'
              name="password"
              placeholder='password'
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className='absolute right-2 top-5 transform -translate-y-1/2 cursor-pointer'
            >
              {showPassword ? '👁️' : '👁️‍🗨️'}
            </button>
          </div>
          <button type="submit" className='mb-10 hover:text-[#1eff1e] *:'>Login</button>
          {loginError && <div className=' text-red-500'>{loginError}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;
