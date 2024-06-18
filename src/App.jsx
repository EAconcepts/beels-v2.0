import {Routes, Route } from "react-router-dom"
import Home from "./pages/Home/Home"
import Topnav from "./components/Topnav"
import Footer from "./components/Footer"
const App = () => {
  return (
    <div>
      <Topnav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App