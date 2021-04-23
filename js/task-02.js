const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

ingredients.forEach(function (number, index) {
    const listEl = document.createElement('li');
    const navEl = document.querySelector('ul');
    listEl.textContent = `${number}`;
    console.log(navEl.appendChild(listEl));
 });