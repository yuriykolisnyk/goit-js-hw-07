const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ulEl = document.getElementById("ingredients");

ingredients.forEach((ingredient) => {
  let liItems = document.createElement("li");
  liItems.innerHTML = ingredient;
  ulEl.appendChild(liItems);
});
