const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.map(function (item) {
  const listEl = document.createElement('li');
  listEl.textContent = item;
  const navEl = document.querySelector('ul');
  navEl.append(listEl);
})

