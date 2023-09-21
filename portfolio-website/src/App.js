import "./App.css";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import About from "./pages/about";
import NoPage from "./pages/nopage";
import logo from "./resources/logo.png";
import ContactMe from "./components/contactme";

function App() {
  document.body.classList.add("backdrp");
  return (
      <div>
        <header>
          <nav>
            <BrowserRouter>
              <div className="navbar">
                <div className="imgwrapper">
                  <img className="logo" src={logo} alt="logo"></img>
                </div>
                <ul className="list">
                  <li className="item">
                    <Link className="link" to="/">
                      Home
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="link" to="/Projects">
                      Projects
                    </Link>
                  </li>
                  <li className="item">
                    <Link className="link" to="/About">
                      About
                    </Link>
                  </li>
                </ul>
                <br></br>
                <br></br>
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

        <footer>
          <ContactMe />
        </footer>
      </div>
  );
}

export default App;
