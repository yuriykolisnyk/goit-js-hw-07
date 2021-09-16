const allCategoriesEl = document.querySelectorAll(".item");
console.log(`В списке ${allCategoriesEl.length} категории.`);

allCategoriesEl.forEach((item) =>
  console.log(
    "Категория:",
    item.firstElementChild.textContent,
    "\n",
    "Количество элементов:",
    item.lastElementChild.children.length
  )
);
