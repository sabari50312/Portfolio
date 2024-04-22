import "./ProjectGrid.css";
import ProjectTile from "./ProjectTile";
import chatapp from "../Assets/chatapp.jpg";
import nnforge from "../Assets/nnforge.jpg";
import flappy from "../Assets/flappy.jpg";
import neat from "../Assets/neat.jpg";
import yolo from "../Assets/yolo.jpg";
import todo from "../Assets/todo.jpg";

function ProjectGrid() {
  return (
    <>
      <div class="portfolio-title" id="portfolio">
        <p id="portfolio-title">Portfolio</p>{" "}
        <p id="project-title">My Projects</p>
      </div>
      <div class="grid-main">
        <ProjectTile
          img={chatapp}
          title="Public Chat App"
          description="Public ChatApp in React & Firebase with Google Auth"
          link="https://github.com/sabari50312/Public-Chat-App"
        />
        <ProjectTile
          img={nnforge}
          title="NN Forge"
          description="GUI Neural Network designer to Python Code"
          link="https://github.com/sabari50312/NNForge"
        />
        <ProjectTile
          img={flappy}
          title="FlappyBird"
          description="Flappy Bird clone in Python using PyGame module"
          link="https://github.com/sabari50312/FlappyBird"
        />
        <ProjectTile
          img={neat}
          title="NEAT-FlappyBird"
          description="Flappy Bird reinforcement learning using NEAT module"
          link="https://github.com/sabari50312/NEAT-FlappyBird"
        />
        <ProjectTile
          img={yolo}
          title="Weapon Detection "
          description="A Weapon detection CV model using YOLOv5"
          link="https://github.com/sabari50312/Weapon-Detection-YOLOv5"
        />
        <ProjectTile
          img={todo}
          title="To-Do List"
          description="Simple To-Do list in browser using HTML, CSS, JavaScript"
          link="https://github.com/sabari50312/to-do-list"
        />
      </div>
    </>
  );
}
export default ProjectGrid;
