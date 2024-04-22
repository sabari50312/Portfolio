import ProgressBar from "./ProgressBar";
import "./Skills.css";

function Skills() {
  return (
    <>
      <div class="skills" id="skills">
        <h1 class="skills-heading">My Tech Stack</h1>
        <ul class="skills-list">
          <li class="skills-list-item">
            <span class="list-span">
              <p>Python</p>
              <p>95%</p>
            </span>
            <ProgressBar width={95} />
          </li>
          <li class="skills-list-item">
            <span class="list-span">
              <p>JavaScript</p>
              <p>80%</p>
            </span>
            <ProgressBar width={80} />
          </li>

          <li class="skills-list-item">
            <span class="list-span">
              <p>HTML + CSS</p>
              <p>90%</p>
            </span>
            <ProgressBar width={90} />
          </li>

          <li class="skills-list-item">
            <span class="list-span">
              <p>C++</p>
              <p>60%</p>
            </span>
            <ProgressBar width={60} />
          </li>
        </ul>
      </div>
    </>
  );
}
export default Skills;
