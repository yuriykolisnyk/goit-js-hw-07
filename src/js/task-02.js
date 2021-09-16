const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulListEl = document.getElementById("ingredients");

const addLiEl = ingredients.map((ingredient) => {
  let liItems = document.createElement("li");
  liItems.textContent = ingredient;
  return liItems;
});
ulListEl.append(...addLiEl);
