import "./ProjectTile.css";

function ProjectTile({ img, title, description, link }) {
  return (
    <div class="project-tile-main">
      <a class="project-link" href={link} target="_blank">
        <img src={img} class="project-tile-img">
          Image here
        </img>
        <div class="project-tile-text">
          <p class="project-title">{title}</p>
          <p class="project-desc">{description}</p>
          <p id="view-project">
            VIEW PROJECT
            <ion-icon name="arrow-forward-outline" id="arrow"></ion-icon>
          </p>
        </div>
      </a>
    </div>
  );
}
export default ProjectTile;
