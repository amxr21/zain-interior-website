import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

import { NavBar } from "./components"
import { Footer } from "./sections"



function App() {

  return (
    <div className="bg-[#FFFAF3]">
        <NavBar />

            <Home />
    
        <Footer />
    
    </div>
  )
}

export default App
