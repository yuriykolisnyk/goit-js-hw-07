const counterValue = document.querySelector("#value");
const incrementBtnEl = document.querySelector("#counter").lastElementChild;
const decrementBtnEl = document.querySelector("#counter").firstElementChild;

const increment = () => {
  counterValue.textContent = Number(counterValue.textContent) + 1;
};
const decrement = () => {
  counterValue.textContent = Number(counterValue.textContent) - 1;
};

incrementBtnEl.addEventListener("click", increment);
decrementBtnEl.addEventListener("click", decrement);
