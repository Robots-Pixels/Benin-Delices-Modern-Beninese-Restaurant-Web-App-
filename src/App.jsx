import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./users/Components/Header"
import Accueil from "./users/Pages/Accueil"
import Nous from "./users/Pages/Nous"
import Contact from "./users/Pages/Contact"
import Menu from "./users/Pages/Menu"
import Reserver from "./users/Pages/Reserver"
import Sidebar from "./users/Components/Sidebar"

function App() {
  return (
    <BrowserRouter>
      <div id="main">
        <Header />

          <div className='h-[1000px]'></div>

          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/nous" element={<Nous />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reserver" element={<Reserver />} />
          </Routes>
      </div>

        <Sidebar />
    </BrowserRouter>
  )
}

export default App
