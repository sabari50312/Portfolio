import "./BottomBar.css";

function BottomBar() {
  return (
    <nav class="footer" id="contact">
      <ul class="footer-list">
        <li>
          <a href="https://github.com/sabari50312" target="_blank">
            <ion-icon name="logo-github"></ion-icon>
            <span>GitHub</span>
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/sabari50312/" target="_blank">
            <ion-icon name="logo-linkedin"></ion-icon>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default BottomBar;
