import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import CardList from "../../components/card/CardList";
import { GameContext } from "../../context/GameProvider";

const Home = () => {
  const { setCurrentUser, currentUser } = useContext(GameContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target[0].value;
    if (username.trim() !== "") {
      setCurrentUser(username);
      navigate("/game");
    } else {
      alert("Please enter your name.");
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Tic Tac Toe</h1>
      <form className="mt-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          required
          className="mr-2 px-2 py-1 border border-gray-400"
          defaultValue={currentUser}
        />
        <button
          type="submit"
          className="px-3 py-1 bg-blue-500 text-white rounded">
          Start
        </button>
      </form>
      <CardList />
    </div>
  );
};

export default Home;
