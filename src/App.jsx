import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Proyects } from "./pages/Proyects";
import { AboutMe } from "./pages/AboutMe";
import { Cv } from "./pages/Cv";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Proyects />} />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<Cv />} />
      </Routes>
    </>
  );
}

export default App;
