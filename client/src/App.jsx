import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./users/Components/Header"
import Accueil from "./users/Pages/Accueil"
import Nous from "./users/Pages/Nous"
import Contact from "./users/Pages/Contact"
import Menu from "./users/Pages/Menu"
import Reserver from "./users/Pages/Reserver"
import Sidebar from "./users/Components/Sidebar"
import { useState } from "react"
import Footer from "./users/Components/Footer"

function App() {
    const [active, setActive] = useState(false);
  
  return (
    <BrowserRouter>

    <div id="header" className="sticky top-0 z-50">
        <Header />
    </div>

      <div
        id="main"
        className={`transition-transform duration-400 ease-in-out overflow-x-hidden ${
          active ? "bg-black bg-opacity-70" : "bg-transparent"
        }`}
        style={{
          transition: "transform 0.4s ease-in-out, background-color 0.6s ease-in-out",
        }}
        >

          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/nous" element={<Nous />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserver" element={<Reserver />} />
          </Routes>

      <Footer/>

      </div>

        <Sidebar active={active} setActive={setActive}/>
    </BrowserRouter>
  )
}

export default App
