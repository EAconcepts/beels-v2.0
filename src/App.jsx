import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
import Invoicing from "./pages/Invoicing/Invoicing";
import Bookkeeping from "./pages/Bookkeeping/Bookkeeping";
import Receipt from "./pages/Receipt/Receipt";
import Airtime from "./pages/Airtime/Airtime";
import Company from "./pages/company/Company";
const App = () => {
  return (
    <div>
      <Topnav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invoicing" element={<Invoicing />} />
        <Route path="/bookkeeping" element={<Bookkeeping />} />
        <Route path="/receipt" element={<Receipt />} />
        <Route path="/airtime" element={<Airtime />} />
        <Route path="/company" element={<Company />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
