import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Topnav from "./components/Topnav"
import Footer from "./components/Footer"
import Invoicing from "./pages/Invoicing/Invoicing"
const App = () => {
  return (
    <div>
      <Topnav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/invoicing" element={<Invoicing/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App