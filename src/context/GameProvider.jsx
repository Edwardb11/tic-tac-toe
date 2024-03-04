import { createContext, useState } from "react";

export const GameContext = createContext({});

const GameProvider = ({ children }) => {
  const [lastHeightScores, setLastHeightScores] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  return (
    <GameContext.Provider
      value={{
        lastHeightScores,
        setLastHeightScores,
        currentUser,
        setCurrentUser,
      }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
