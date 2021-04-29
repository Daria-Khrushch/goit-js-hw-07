const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector("ul");
const createListOfElements = ingredients.map(ingredient => {
  const liEl = document.createElement("li");
  liEl.textContent = ingredient;
  return liEl;
});
ingredientsEl.append(...createListOfElements);