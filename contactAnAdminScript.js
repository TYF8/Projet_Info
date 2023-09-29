document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const menuContainer = document.querySelector(".menu-container");

  menuToggle.addEventListener("click", function () {
    if (
      menuContainer.style.display === "none" ||
      menuContainer.style.display === ""
    ) {
      menuContainer.style.display = "block";
    } else {
      menuContainer.style.display = "none";
    }
  });
});
