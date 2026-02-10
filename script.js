const btn = document.querySelector(".menu-btn");
const menu = document.querySelector("#navMenu");

btn.addEventListener("click", () => {
  menu.classList.toggle("open");
});
