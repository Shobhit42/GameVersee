import React from "react";

interface GameboxProps {
  Game_name: string;
  Game_img: string;
  Game_link: string;
}

const Gamebox: React.FC<GameboxProps> = ({ Game_name, Game_img, Game_link }) => {
  
  const handleMouseOver = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.transform = 'scale(1.1)';
    target.style.width = '110%'; // Increase the width by 10%
    target.style.height = '110%'; // Increase the height by 10%
  };

  const handleMouseOut = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.transform = 'scale(1)';
    target.style.width = '100%'; // Reset the width to original size
    target.style.height = '100%'; // Reset the height to original size
  };
  
  return (
    <>
      <a href={Game_link}>
        <div className="text-center my-10 cursor-pointer hover:underline mr-20">
          <div className="relative bg-slate-700 bg-opacity-40 w-64 h-40 rounded-lg overflow-hidden">
            <img
              src={Game_img}
              alt={Game_name}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ transition: "transform 0.3s ease" }}
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            />
          </div>
          <p>{Game_name}</p>
        </div>
      </a>
    </>
  );
};

export default Gamebox;
