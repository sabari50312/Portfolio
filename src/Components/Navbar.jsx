import "./Navbar.css";
import { onMount, createEffect, createSignal } from "solid-js";

function Navbar() {
  let listContainer;
  let nav;
  const [scrollPos, setScrollPos] = createSignal(0);

  onMount(() => {
    setScrollPos(window.scrollY);
  });

  createEffect(() => {
    if (scrollPos() > 200) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });

  window.addEventListener("scroll", () => {
    setScrollPos(window.scrollY);
  });

  function toggleNav() {
    listContainer.classList.toggle("active");
  }

  return (
    <nav class="nav" ref={nav}>
      <div class="logo">Sabarinaath S S</div>
      <div class="hamburger" onclick={toggleNav}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
      </div>

      <ul class="list-container" ref={listContainer}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a
            class="orange-button"
            href="https://docs.google.com/document/d/1PrhIu_FA9l8Lvnf9ik_iB1JYzKtG-aPL3XN58De7w-o/edit?usp=sharing"
            target="_blank"
          >
            View Resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
export default Navbar;
