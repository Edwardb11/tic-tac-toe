import { useContext } from "react";
import { GameContext } from "../../context/GameProvider";
import Card from "./Card";

const CardList = () => {
  const { currentUser, lastHeightScores } = useContext(GameContext);

  return (
    <div className="space-y-4">
      {currentUser && <Card title="Current User" content={currentUser} />}
      <ul>
        {lastHeightScores.length > 0 ? (
          lastHeightScores.map((score, index) => (
            <li key={index}>
              <Card
                title={`Player: ${score.username}`}
                content={`Score: ${score.score}`}
              />
            </li>
          ))
        ) : (
          <li>No high scores available</li>
        )}
      </ul>
    </div>
  );
};

export default CardList;
