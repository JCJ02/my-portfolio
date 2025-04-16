import { useState } from "react";
import NavigationBar from "./layouts/NavigationBar"
import Skills from "./pages/Skills";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./layouts/Footer";
import Home from "./pages/Home";
import { ToastContainer } from 'react-toastify';
import Experiences from "./pages/Experiences";

function App() {
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    setTheme(!theme)
  }
  return (
    <>
      <div className={`${theme && "dark"} relative font-poppins h-screen w-full`}>
        <NavigationBar switchTheme={handleTheme} />
        <Home />
        <About />
        <Skills />
        <Experiences />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <ToastContainer />
    </>
  )
}

export default App;
