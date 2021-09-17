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
