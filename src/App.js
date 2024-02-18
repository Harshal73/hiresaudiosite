import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Album from "./components/Album";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Album />
      <About />
      <Footer />
    </div>
  );
}

export default App;
