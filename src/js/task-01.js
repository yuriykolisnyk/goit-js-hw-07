const navEl = document.querySelectorAll(".item");
console.log(`В списке ${navEl.length} категории.`);

navEl.forEach((num) =>
  console.log(
    "Категория:",
    num.firstElementChild.textContent,
    "\n",
    "Количество элементов:",
    num.lastElementChild.children.length
  )
);
