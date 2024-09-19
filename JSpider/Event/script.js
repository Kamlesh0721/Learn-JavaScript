function switchMode() {
  const PAGE = document.querySelector(".page");
  PAGE.classList.toggle("dark");

  const DAY_BUTTON=document.querySelector(".fa-sun");
  const NIGHT_BUTTON=document.querySelector(".fa-moon");

  DAY_BUTTON.classList.toggle("hide");
  NIGHT_BUTTON.classList.toggle("hide");
}
