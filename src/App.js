import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Album from "./components/Album";
import Footer from "./components/Footer";
import About from "./components/About";
import { Route, Routes } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" Component={Home} />
        <Route path="/albums" Component={Album} />
        <Route path="/about" Component={About} />
      </Routes>

      <Footer />
      <SpeedInsights />
    </div>
  );
}

export default App;
