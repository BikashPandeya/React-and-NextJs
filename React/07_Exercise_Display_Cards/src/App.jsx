import React, { useState, useEffect } from "react";
import "./app.css"

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      {data.map(
        (item) => {
          return (<div key={item.id} className="card">
            <div className="Title">{item.title}</div>
            <div className="description">{item.body}</div>
          </div>)
        }
      )}

    </div>
  );
};

export default App;
