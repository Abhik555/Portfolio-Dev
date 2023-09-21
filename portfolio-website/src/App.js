import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import NoPage from "./pages/nopage";

function App() {
  return (
    <div>
      <img src="" alt="backimg"></img>
      <header>
        <nav>
          <BrowserRouter>
            <h1 className="title">Abhik Ghosh</h1>
            <div className="navbar">
              <ul className="list">
                <li className="item">
                  <Link to="/">Home</Link>
                </li>
                <li className="item">
                  <Link to="/Projects">Projects</Link>
                </li>
                <li className="item">
                  <Link to="/About">About</Link>
                </li>
              </ul>
            </div>

            <Routes>
              <Route path="/" exact element={<Home />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/About" element={<About />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </BrowserRouter>
        </nav>
      </header>
    </div>
  );
}

export default App;
