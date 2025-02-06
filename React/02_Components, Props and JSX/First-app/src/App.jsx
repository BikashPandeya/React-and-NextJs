import React from "react"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Card from "./components/card"

function App() {


  return (
    <>
      <Navbar />

      <div className="cards">
        <Card title = "card1" description="Cars 1 Description"/>
        <Card title = "card2" description="Cars 2 Description"/>
        <Card title = "card3" description="Cars 3 Description"/>
        <Card title = "card4" description="Cars 4 Description"/>
        <Card title = "card5" description="Cars 5 Description"/>
      </div>
      <Footer />
    </>
  )
}

export default App
