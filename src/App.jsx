import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import ProjectGrid from "./Components/ProjectGrid";
import BottomBar from "./Components/BottomBar";
import Skills from "./Components/Skills";
import "./App.css";

function App() {
  return (
    <>
      <div class="body">
        <Navbar />
        <Banner />
        <ProjectGrid />
        <Skills />
        <BottomBar />
      </div>
    </>
  );
}

export default App;
