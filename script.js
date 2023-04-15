const toggleButton = document.getElementsByClassName("toggle-button")[0];
const navbarLinks = document.getElementsByClassName("navbar-options")[0];

toggleButton.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});
