import { useState , useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { createLogger } from "vite";



const Card = ({ title }) => {
    const [hasLiked , setHasLiked] = useState(false)

  return (
    <div className="card">
      <h2>{title}</h2>

      <button onClick={() => {setHasLiked(!hasLiked)}}>
        {hasLiked ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

const App = () => {
 

  return (
    <div className="card-container">
      <Card title="Star Wars" rating={5} isCool={true} />
      <Card title="Avatar" />
      <Card title="The Lion King" />
      <Card title="Avengers" />
    </div>
  );
};

export default App;
