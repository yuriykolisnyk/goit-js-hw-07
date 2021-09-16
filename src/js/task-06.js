const inputEl = document.querySelector("#validation-input");

const validationCheck = (event) => {
  if (event.target.value.length === Number(inputEl.dataset.length)) {
    inputEl.classList = null;
    inputEl.classList.add("valid");
  } else {
    inputEl.classList = null;
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("change", validationCheck);
