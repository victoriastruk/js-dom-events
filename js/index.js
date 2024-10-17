// завдання 1
const btnEl = document
  .querySelector(".button")
  .addEventListener("click", () => alert("Привіт тобі, клацальник!"));

// завдання 2
const linkEl = document.querySelector(".link");
function addBtn() {
  const btn = document.createElement("button");
  btn.textContent = "Кнопка";
  document.querySelector(".wrap").appendChild(btn);
}
linkEl.addEventListener("click", addBtn);

// завдання 3
const onOffEl = document.querySelector(".on-off");
const lampEl = document.querySelector(".lamp");

let isLight = false;

function switcH() {
  if (!isLight) {
    lampEl.style.backgroundColor = "yellow";
    lampEl.style.border = "2px solid white";
    isLight = true;
  } else {
    lampEl.style.backgroundColor = "rgb(173, 171, 171)";
    lampEl.style.border = "2px solid rgb(71, 70, 70)";
    isLight = false;
  }
}
onOffEl.addEventListener("click", switcH);
