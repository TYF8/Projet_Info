const menuToggle = document.querySelector(".menu-toggle");
menuToggle.addEventListener("click", toggleMenu);
function toggleMenu() {
  const menuContainer = document.querySelector(".menu-container");
  if (
    menuContainer.style.display === "none" ||
    menuContainer.style.display === ""
  ) {
    menuContainer.style.display = "block";
  } else {
    menuContainer.style.display = "none";
  }
}
