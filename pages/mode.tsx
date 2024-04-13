import Gamebox from "./gamebox";

interface ModeItem {
  game_name: string;
  game_desc : string;
  game_img: string;
  game_link:string;
}

interface ModeProps {
  mode_name: string;
  tap: boolean;
  onClick: () => void;
  games : ModeItem[];
}

const Mode: React.FC<ModeProps> = ({ mode_name, tap, onClick, games }) => {
 
    return (
       <>
       <div className=" pl-40 pt-10  ">
       <div className="cursor-pointer  ">
        <p className={`  ${ tap ? 'text-5xl' : 'text-2xl'} hover:underline`} onClick={onClick}>{mode_name}</p>
       </div>
       {tap ?
        <div className="flex flex-row ">
          {games.map((game, index) => (
  <Gamebox
    key={index} // Provide a unique key prop
    Game_name={game.game_name}
    Game_img={game.game_img}
    Game_link={game.game_link}
  />
))};

          
        </div>: <></>
}
       </div>
      
       </>
    );
}

export default Mode;