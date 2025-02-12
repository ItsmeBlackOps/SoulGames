import React, { useState } from 'react';
import { Skull, Crown, User, Lock } from 'lucide-react';
import contentData from './data/content.json';

function App() {
  const [clicked, setClicked] = useState(false);
  const [currentScene, setCurrentScene] = useState(0);
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [isVip, setIsVip] = useState(false);

  const validateVipCredentials = (id: string, pwd: string) => {
    return id === contentData.vipCredentials.id && pwd === contentData.vipCredentials.password;
  };

  const handleLogin = () => {
    setIsVip(validateVipCredentials(userId, password));
    setClicked(true);
    setCurrentScene(0);
  };

  const scenes = isVip ? contentData.scenes.vip : contentData.scenes.regular;

  const backgroundStyles = clicked
    ? {
        backgroundImage: contentData.backgrounds[isVip ? "vip-lounge" : "dark-forest"],
      }
    : {
        backgroundImage: `url('https://i.imgur.com/rVg7CW4.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      };

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden bg-squid-pattern"
      style={backgroundStyles}
    >
      {clicked && (
        <img
          src={scenes[currentScene].image}
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
            <div className="space-y-4">
              <div className="space-y-3">
                <div>
                  <label className="block text-white text-sm font-medium mb-1">
                    Player ID:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-squid-pink" />
                    </div>
                    <input
                      type="text"
                      placeholder="Enter ID"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 border-2 border-squid-pink/50 rounded-lg 
                        text-white placeholder-white/50 focus:outline-none focus:border-squid-pink
                        transition-colors duration-300"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-1">
                    Password:
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-squid-pink" />
                    </div>
                    <input
                      type="password"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2 bg-white/10 border-2 border-squid-pink/50 rounded-lg 
                        text-white placeholder-white/50 focus:outline-none focus:border-squid-pink
                        transition-colors duration-300"
                    />
                  </div>
                </div>
                <button
                  onClick={handleLogin}
                  className="w-full py-3 px-6 bg-squid-pink hover:bg-squid-lightPink text-white 
                    rounded-lg transition-all duration-300 flex items-center justify-center gap-2
                    transform hover:scale-105 active:scale-95"
                >
                  <Crown className="w-5 h-5" />
                  Enter Realm
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-fade-in">
              {isVip && (
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Crown className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-squid">VIP ACCESS GRANTED</span>
                  <Crown className="w-5 h-5 text-yellow-400" />
                </div>
              )}
              <p className="text-white text-center text-lg leading-relaxed font-medium">
                {scenes[currentScene].text}
              </p>
              <button
                onClick={() => setCurrentScene((prev) => (prev + 1) % scenes.length)}
                className="w-full py-3 px-6 bg-squid-teal hover:bg-squid-darkTeal text-white 
                  rounded-lg transition-all duration-300 text-sm font-squid tracking-wider
                  border-2 border-white/20 shadow-lg hover:shadow-squid-teal/50
                  transform hover:scale-105 active:scale-95"
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