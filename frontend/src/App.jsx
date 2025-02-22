import { BrowserRouter as Router ,Routes, Route } from "react-router-dom"

import Home from "./pages/Home"

import { NavBar } from "./components"



function App() {

  return (
    <div className="bg-[#FFFAF3]">
      <Router>
          <NavBar />
          <div className=" ">
            <Routes>
                <Route element={<Home />} path="/" />
            </Routes>
          </div>
      </Router>
    
    </div>
  )
}

export default App
