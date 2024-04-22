import "./Banner.css";
import passportPhoto from "../Assets/passport.jpg";
import developerBanner from "../Assets/developer-banner.jpg";

function Banner() {
  return (
    <>
      <div class="banner-main" id="home">
        <div class="banner">
          <div class="banner-text">
            <p>Hello I'm</p>
            <p class="sabari">Sabarinaath S S</p>
            <p class="cs-grad">Computer science graduate</p>
            <p>with a passion to learn new things</p>
            <p>
              <a class="orange-button" href="#about" id="about-btn">
                About
              </a>
            </p>
          </div>
          <img src={passportPhoto} class="profile-pic"></img>
        </div>
      </div>
      <div class="developer" id="about">
        <div class="dev-container">
          <img class="dev-pic" src={developerBanner}></img>
          <div class="dev-text">
            <p id="dev1">I'm a Developer</p>
            <p id="dev2">I develop applications that make life easier</p>
            <p id="dev3">
              Mainly work on projects based on python, c++ and web projects
              based on HTML, CSS and JavaScript
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;
