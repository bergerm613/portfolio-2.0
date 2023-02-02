import { ExperienceSection } from "./components/sections/Experience";
import { IntroSection } from "./components/sections/Intro";
import { PhotographySection } from "./components/sections/Photography";
import { Nav } from "./components/Nav";

import { CursorProvider } from "./providers/CursorProvider";

import "./App.css";

const App = () => {
  return (
    <CursorProvider>
      <Nav />

      <IntroSection />
      <hr />

      <ExperienceSection />
      <hr />

      <PhotographySection />
    </CursorProvider>
  );
};

export default App;
