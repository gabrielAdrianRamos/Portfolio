import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header/Header";
import { Home } from "./components/section/Home/Home";
import { About } from "./components/section/About/About";
import { Projects } from "./components/section/Project/Projects";
import { Contact } from "./components/section/Contact/Contact";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
