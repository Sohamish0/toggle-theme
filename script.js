const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.querySelector("#nav");
const toggleIcon = document.querySelector("#toggle-icon");
const image1 = document.querySelector("#image1");
const image2 = document.querySelector("#image2");
const image3 = document.querySelector("#image3");
const textBox = document.querySelector("#text-box");

function switchMode(nav_bg, txt_bg, mode) {
  const icon = mode === "Dark" ? ["sun", "moon"] : ["moon", "sun"];
  nav.style.background = `${nav_bg}`;
  textBox.style.background = `${txt_bg}`;
  toggleIcon.children[0].textContent = `${mode} Mode`;
  toggleIcon.children[1].classList.remove(`fa-${icon[0]}`);
  toggleIcon.children[1].classList.add(`fa-${icon[1]}`);
  image1.src = `img/undraw_proud_coder_${mode}.svg`;
  image2.src = `img/undraw_feeling_proud_${mode}.svg`;
  image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}
function darkMode() {
  switchMode("rgb(0 0 0 / 50%)", "rgb(255 255 255 / 50%)", "Dark");
}
function lightMode() {
  switchMode("rgb(255 255 255 / 50%)", "rgb(0 0 0 / 50%)", "Light");
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    darkMode();
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    lightMode();
  }
}

toggleSwitch.addEventListener("change", switchTheme);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", `${currentTheme}`);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    darkMode();
  } else {
    toggleSwitch.checked = false;
    lightMode();
  }
}
