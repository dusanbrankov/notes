const inputPx = document.querySelector("#input-px");
const inputRem = document.querySelector("#input-rem");
const inputEm = document.querySelector("#input-em");
// const buttonRem = document.querySelector("#calc-rem");
const buttonEm = document.querySelector("#calc-em");
const resultRem = document.querySelector("#result-rem");
const resultEm = document.querySelector("#result-em");

const tabs = document.querySelectorAll(".tab");
const form = document.querySelector("#px-to-rem");
const remToEm = document.querySelector("#rem-to-em");

form.addEventListener("submit", event => {
  event.preventDefault();
  resultRem.textContent = `${inputPx.value / 16}rem`;
  console.log(inputPx.value / 16);
})

buttonEm.addEventListener("click", () => {
  resultEm.textContent = `${inputRem.value / 16}em`;
  console.log(inputRem.value / 16);
})

tabs.forEach(tab => {
  tab.addEventListener("click", event => {
    document.querySelector(".tab--active")?.classList.remove("tab--active");
    event.currentTarget.classList.toggle("tab--active");
    document.querySelector(".calc-container--show")?.classList.remove("calc-container--show");
    document.querySelector(event.currentTarget.dataset.content).classList.add("calc-container--show");
  })
});
