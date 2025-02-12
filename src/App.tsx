import React, { useState } from 'react';
import { Skull } from 'lucide-react';
import contentData from './data/content.json';

function App() {
  const [clicked, setClicked] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);

  const handleClick = () => {
    setClicked(true);
    setCurrentScene(0);
  };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-squid-pattern"
      style={{
        background: clicked 
          ? contentData.backgrounds["dark-forest"]
          : `url('https://i.imgur.com/rVg7CW4.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {clicked && (
        <img
          src={contentData.scenes[currentScene].image}
          alt="Atmospheric background"
          className="absolute inset-0 w-full h-full object-cover opacity-20 transition-opacity duration-1000"
        />
      )}
      
      <div className="max-w-md w-full relative z-10">
        <div className="bg-black/60 backdrop-blur-md rounded-2xl p-8 transform transition-all duration-500 border-2 border-squid-pink/30 animate-pulse-neon">
          <div className="relative mb-8">
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-squid-pink"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-squid-pink"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-squid-pink"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-squid-pink"></div>
            
            <img 
              src="https://i.imgur.com/Lk2RMN6.png"
              alt="Game of Souls"
              className="w-full h-auto max-w-[300px] mx-auto drop-shadow-[0_0_15px_rgba(237,27,118,0.5)]"
            />
          </div>
          
          {!clicked ? (
            <button
              onClick={handleClick}
              className="w-full py-4 px-6 flex items-center justify-center gap-3 text-xl font-squid rounded-xl 
                bg-squid-pink hover:bg-squid-lightPink text-white
                transition-all duration-300 transform hover:scale-105 active:scale-95
                border-2 border-white/20 shadow-lg hover:shadow-squid-pink/50"
            >
              <Skull className="w-6 h-6" />
              PLAY NOW
            </button>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <p className="text-white text-center text-lg leading-relaxed font-medium">
                {contentData.scenes[currentScene].text}
              </p>
              <button
                onClick={() => setCurrentScene((prev) => (prev + 1) % contentData.scenes.length)}
                className="w-full py-3 px-6 bg-squid-teal hover:bg-squid-darkTeal text-white 
                  rounded-lg transition-colors duration-300 text-sm font-squid tracking-wider
                  border-2 border-white/20 shadow-lg hover:shadow-squid-teal/50"
              >
                Continue Journey
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App