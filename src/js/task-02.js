const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulList = document.getElementById("ingredients");

const addLi = ingredients.map((ingredient) => {
  let liItems = document.createElement("li");
  liItems.textContent = ingredient;
  return liItems;
});
ulList.append(...addLi);
