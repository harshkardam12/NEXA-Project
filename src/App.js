import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About2 from "./component/About2";
import Main from "./page/Main";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import WHO from "./component/WHO";
import Service from "./component/Service";
import Navbar from "./component/Navbar";
import Web from "./component/Web";
import Home from "./component/Home";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/abo" element={<About2 />} />
          <Route path="/con" element={<Contact />} />
          <Route path="/who" element={<WHO />} />
          <Route path="/web" element={<Web />} />
          <Route path="/ser" element={<Service />} />
        </Routes>
        
        {/* <Web /> */}
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
