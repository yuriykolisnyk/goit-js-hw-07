let inputEl = document.querySelector("#name-input");
let outputEl = document.querySelector("#name-output");

inputEl.addEventListener("input", (event) => {
  event.target.value.length > 0
    ? (outputEl.textContent = event.target.value)
    : (outputEl.textContent = "незнакомец");
});
