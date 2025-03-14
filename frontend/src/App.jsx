import Home from "./pages/Home"

import { NavBar } from "./components"
import { Footer } from "./sections"

import { LanguageContextWrapper } from "./context/LanguageContext"


function App(){
  return (
    <div className="bg-[#FFFAF3] font-[Doran] relative">
      <LanguageContextWrapper>
        <NavBar/>
        <Home/>
        <Footer />
      </LanguageContextWrapper>
    </div>
  )
}

export default App
