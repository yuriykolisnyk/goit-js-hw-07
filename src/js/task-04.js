// Задание 4
// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

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
