import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import MainPage from "./components/mainPage";
import { Hero } from "./pages/hero/hero";
import { Skills } from "./pages/skills/skills";
import { Experience } from "./pages/experience/experience";
import "./App.css";
import { Contact } from "./pages/contact/contact";

function App() {
  const isMobile = window.innerWidth < 1000;
  const [entered, setEntered] = useState(false || isMobile);
  

  return (
    <>
      {!entered &&  (
        <Canvas camera={{ position: [0, 3, 12], fov: 65 }}>
          <MainPage onEnter={() => setEntered(true)} />
        </Canvas>
      )}

      {entered && (
        <>
          <Hero />
          <div className="section-divider" />
          <Skills />
          <div className="section-divider" />
          <Experience />
          <div className="section-divider" />
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
