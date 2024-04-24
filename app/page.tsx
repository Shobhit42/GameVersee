'use client'
import React, { useState, useEffect } from "react";
import Logo from '../pages/logo';
import Mode from '../pages/mode';
import { Login } from "../pages/login";
import './Home.css'; // Import CSS file for styling

export default function Home() {

  const [selectedMode, setSelectedMode] = useState<string>('single');
  const [showLogin, setShowLogin] = useState<boolean>(false); // State to manage login modal visibility

  const handleModeClick = (mode: string) => {
    setSelectedMode(mode);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading state (remove this in a real application)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const singlegames = [
    { game_name: 'Samurai Showdown', game_desc: "Chess game for genius",game_img:"/samuria.png", game_link:"https://game-verse-samurai-showdown.vercel.app/" },
    { game_name: 'Ninja Fight', game_desc: "chess game for genius",game_img:"/NinjaFighter.jpg", game_link:"http://localhost:8000/" },
    {game_name: 'Space War', game_desc:"chess game for genius",game_img:"/space war.jpg", game_link:"https://game-verse-space-war.vercel.app/"}
  ]

  const multigames = [
    {game_name: 'Chess', game_desc:"chess game for genius",game_img:"/CHESS.jpg", game_link:"https://gameversechess.onrender.com/"},
    {game_name: 'Bubble Shooter', game_desc:"chess game for genius",game_img:"/bubble shoot multi.jpg", game_link:"https://game-verse-multibubbleshooter.onrender.com/"}
  ]
  
  const aigames = [
    {game_name: 'Chess', game_desc:"chess game for genius",game_img:"/CHESS VS AI.jpg", game_link:"https://game-verse-chess-ai.vercel.app/"},
    {game_name: 'Ball paddle', game_desc:"chess game for genius",game_img:"/pong.jpg", game_link:"https://gameverse-paddleball-ai.vercel.app/"}
  ]

  return (
    <>    {loading && (
      <div className="loadingSpinner">
        <img src="/loading-spinner.gif" alt="Loading Spinner" width={50} />
      </div>
    )}

      {!loading && (
        <main className={`flex min-h-screen flex-col ${selectedMode} font-[gamefont] relative`}>
          {/* Login Modal */}
          {showLogin && <Login onClose={handleLoginClose} />}

          <div className="min-h-screen bg-black  p-10 bg-opacity-0">
            {/* Login Button */}
            <button className="absolute top-4 right-4 bg-transparent border border-white text-white px-4 py-2 rounded-md" onClick={handleLoginClick}>Login</button>
         
            <Logo />
            
            <Mode mode_name="Single Player" tap={selectedMode === 'single'} onClick={() => handleModeClick('single')} games={singlegames} />
            <Mode mode_name="Multi Player" tap={selectedMode === 'multiple'} onClick={() => handleModeClick('multiple')} games={multigames} />
            <Mode mode_name="Versus AI" tap={selectedMode === 'ai'} onClick={() => handleModeClick('ai')} games={aigames} />
          </div>
        </main>
      )}

    </>

  );
}