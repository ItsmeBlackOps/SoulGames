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
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden"
      style={{
        background: clicked 
          ? contentData.backgrounds["dark-forest"]
          : "linear-gradient(to br, #ed1b76, #f44786, #249f9c)"
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
        <div className="bg-black/40 backdrop-blur-md rounded-2xl shadow-neon p-8 transform transition-all duration-500">
          <h1 className="text-5xl font-bold text-white text-center mb-8 tracking-widest">
            Soul Games
          </h1>
          
          {!clicked ? (
            <button
              onClick={handleClick}
              className="w-full py-4 px-6 flex items-center justify-center gap-3 text-xl font-bold rounded-xl 
                bg-squid-pink hover:bg-squid-lightPink text-white hover:shadow-neon 
                transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              <Skull className="w-6 h-6" />
              PLAY NOW
            </button>
          ) : (
            <div className="space-y-6 animate-fade-in">
              <p className="text-white text-center text-lg leading-relaxed">
                {contentData.scenes[currentScene].text}
              </p>
              <button
                onClick={() => setCurrentScene((prev) => (prev + 1) % contentData.scenes.length)}
                className="w-full py-3 px-6 bg-squid-teal hover:bg-squid-darkTeal text-white 
                  rounded-lg transition-colors duration-300 text-sm font-medium"
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

export default App;