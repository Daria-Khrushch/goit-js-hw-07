const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(function (item, index) {
    const listEl = document.createElement('li');
    const navEl = document.querySelector('ul');
    listEl.textContent = `${item}`;
    console.log(navEl.appendChild(listEl));
 });