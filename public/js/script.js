const toggle = document.getElementById("toggle");
const menu_bar = document.getElementById("menu-bar");

toggle.addEventListener("click", function () {
  menu_bar.classList.toggle("max-xl:hidden");
  menu_bar.classList.toggle("max-xl:block");
});
