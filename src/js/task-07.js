// Задание 7
// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" />
// <br />
// <span id="text">Абракадабра!</span>

const sizeInputEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

const fontSizeChange = () => {
  const size = sizeInputEl.value;
  //   console.log(size);
  textEl.style.fontSize = size + "px";
};

sizeInputEl.addEventListener("input", fontSizeChange);

// const sizeInputEl = document.querySelector("#font-size-control");
// const textEl = document.querySelector("#text");

// const fontSizeChange = () =>
//   (textEl.style.fontSize = `${Number(sizeInputEl.value)}px`);

// sizeInputEl.addEventListener("input", fontSizeChange);
