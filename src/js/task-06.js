const validatorInputEl = document.querySelector("#validation-input");

const validationCheckEl = (event) => {
  if (event.target.value.length === Number(validatorInputEl.dataset.length)) {
    validatorInputEl.classList = null;
    validatorInputEl.classList.add("valid");
  } else {
    validatorInputEl.classList = null;
    validatorInputEl.classList.add("invalid");
  }
};

validatorInputEl.addEventListener("change", validationCheckEl);
