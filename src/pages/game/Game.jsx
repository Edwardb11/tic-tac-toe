import { useContext, useEffect, useState } from "react";
import { GameContext } from "../../context/GameProvider";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const { lastHeightScores, setLastHeightScores, currentUser } =
    useContext(GameContext);
  const initialBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(initialBoard);
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [steps, setSteps] = useState(0);

  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser === "") {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const isCellAvailable = (position) => {
    return board[position] === "";
  };

  const setCell = (position) => {
    if (isCellAvailable(position) && !winner) {
      const newBoard = [...board];
      newBoard[position] = player;
      setBoard(newBoard);
      checkWinner(newBoard);
      setPlayer(player === "X" ? "O" : "X");
      setSteps(steps + 1);
    }
  };
  const checkWinner = (currentBoard) => {
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winLines.length; i++) {
      const [a, b, c] = winLines[i];
      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        setWinner(currentBoard[a]);
        updateScore(steps);
        break;
      }
    }
  };

  const updateScore = () => {
    setLastHeightScores([
      ...lastHeightScores,
      { username: currentUser, score: steps },
    ]);
  };

  const handleCellClick = (index) => {
    if (!winner) {
      setCell(index);
    }
  };

  useEffect(() => {
    if (winner) {
      const timer = setTimeout(() => {
        resetGame();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [winner]);

  const resetGame = () => {
    setBoard(initialBoard);
    setWinner(null);
    setPlayer("X");
    setSteps(0);
  };

  const handleGoBack = () => {
    navigate("/");
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-3 gap-2">
        {board.map((cell, index) => (
          <div
            key={index}
            className="bg-gray-200 w-16 h-16 flex justify-center items-center text-4xl font-bold cursor-pointer"
            onClick={() => handleCellClick(index)}>
            {cell}
          </div>
        ))}
      </div>
      <div className="ml-4">
        {winner && <div className="text-2xl">Winner: {winner}</div>}
        {!winner && !board.includes("") && (
          <div className="text-2xl">It's a draw!</div>
        )}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg text-xl font-semibold"
          onClick={resetGame}>
          Reset Game
        </button>
        <button
          className="mt-4 px-4 py-2 bg-gray-500 text-white rounded-lg text-xl font-semibold ml-4"
          onClick={handleGoBack}>
          Go back to Home
        </button>
      </div>
    </div>
  );
};

export default Game;
