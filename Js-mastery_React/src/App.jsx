import { useState, useEffect } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [likecount, setlikecount] = useState(0);
  const [dislikecount, setdislikecount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [dislike, setdislike] = useState(false)

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

//   useEffect(() => {
//     console.log("Card Rendered");
//   }, []);


  

  return (
    <div>
      <h2>
        {title} <br /> {likecount ?likecount : null} <br/> {dislikecount ? dislikecount : null}
      </h2>
      <button onClick={() => {setHasLiked(!hasLiked) , setlikecount((prevState) => prevState + 1);}} >
        {hasLiked ? "❤️" : "🤍"}
        <span>Like</span>
      </button>
      <button onClick={() => {setdislike(!dislike) , setdislikecount((prevState) => prevState + 1);}}>
        {dislike ? "🖤" : "🤍"}
        <span>Dislike</span>
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
