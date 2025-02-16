import { useState, useEffect } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [count, setcount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

//   useEffect(() => {
//     console.log("Card Rendered");
//   }, []);

  return (
    <div
      className="card"
      onClick={() => {
        setcount((prevState) => prevState + 1);
      }}
    >
      <h2>
        {title} <br /> {count ? count : null}
      </h2>
      <button onClick={() => setHasLiked(!hasLiked)}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
  return (
    <div className="card-container">
      <Card title="Star Wars" />
      <Card title="Avatar" />
      <Card title="The Lion King" />
      <Card title="Avengers" />
    </div>
  );
};

export default App;
