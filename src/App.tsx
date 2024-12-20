import React, { useRef } from "react";
import Header from "./containers/Header/index.tsx";
import About from "./containers/About/index.tsx";
import Project from "./containers/projetos/index.tsx";
import Footer from "./containers/Footer/index.tsx";

function App() {
  const AboutsectionRef = useRef<HTMLDivElement>(null);
  const ProjectsectionRef = useRef<HTMLDivElement>(null);

  const scrollToSection = () => {
    AboutsectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToProject = () => {
    ProjectsectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Header
        onFirstButtonClick={scrollToSection}
        onSecondButtonClick={scrollToProject}
      />
      <About ref={AboutsectionRef} />
      <Project ref={ProjectsectionRef} />
      <Footer />
    </>
  );
}

export default App;
