import { ExperienceSection } from "./components/sections/Experience";
import { IntroSection } from "./components/sections/Intro";
import { PhotographySection } from "./components/sections/Photography";
import { Nav } from "./components/Nav";

import "./App.css";

function App() {
  return (
    <div>
      <Nav />

      <IntroSection />
      <hr />

      <ExperienceSection />
      <hr />

      <PhotographySection />
    </div>
  );
}

export default App;
