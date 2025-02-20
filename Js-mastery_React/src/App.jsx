import { useState, useEffect } from "react";
import "./App.css";

const Card = ({ title }) => {
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);
  const [hasDisliked, setHasDisliked] = useState(false);

  useEffect(() => {
    console.log(`${title} has been liked: ${hasLiked}`);
  }, [hasLiked]);

  const handleLike = () => {
    if (hasLiked) {
      setLikeCount((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikeCount((prev) => prev + 1);
      setHasLiked(true);
      
      // If disliked, remove dislike
      if (hasDisliked) {
        setDislikeCount((prev) => prev - 1);
        setHasDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (hasDisliked) {
      setDislikeCount((prev) => prev - 1);
      setHasDisliked(false);
    } else {
      setDislikeCount((prev) => prev + 1);
      setHasDisliked(true);
      
      // If liked, remove like
      if (hasLiked) {
        setLikeCount((prev) => prev - 1);
        setHasLiked(false);
      }
    }
  };

  return (
    <div className="card">
      <h2>{title}</h2>
      <p>Likes: {likeCount}</p>
      <p>Dislikes: {dislikeCount}</p>
      <button onClick={handleLike}>
        {hasLiked ? "❤️" : "🤍"} <span>Like</span>
      </button>
      <button onClick={handleDislike}>
        {hasDisliked ? "🖤" : "🤍"} <span>Dislike</span>
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
