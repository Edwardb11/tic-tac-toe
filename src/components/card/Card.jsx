
const Card = ({ title, content }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;
