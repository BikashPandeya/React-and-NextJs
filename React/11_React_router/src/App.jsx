import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/navbar";
import "./App.css";
import { createBrowserRouter , RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import User from "./components/User";

function App() {
  const [count, setCount] = useState(0);
  const router = createBrowserRouter([{
    path: "/" ,
    element :<><Navbar /> <Home /> </>  
  }, {
    path : "/login" ,
    element : <><Navbar /> <Login/> </>  

  } ,{ 
    path : "/about" ,
    element :<><Navbar /> <About /> </>    
  }
   ,{ 
    path : "/user/:username" ,
    element :<><Navbar /> <User /> </>    
  }
]);

  return (
    <>
      <div>
     
        
        <RouterProvider router = {router} /> 
      </div>
    </>
  );
}

export default App;
