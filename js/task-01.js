const navItemEl = document.querySelectorAll('.item');
console.log(`В списке ${navItemEl.length} категории.`);

const titleAnimals = document.querySelector('.title_animals');
console.log(`Категория: ${titleAnimals.textContent}`);
const animalsEl = document.querySelectorAll('.animals li');
console.log(`Количество элементов: ${animalsEl.length}`);

const titleFood = document.querySelector('.title_food');
console.log(`Категория: ${titleFood.textContent}`);
const foodEl = document.querySelectorAll('.food li');
console.log(`Количество элементов: ${foodEl.length}`);

const titleTechnologies = document.querySelector('.title_technologies');
console.log(`Категория: ${titleTechnologies.textContent}`);
const technologiesEl = document.querySelectorAll('.technologies li');
console.log(`Количество элементов: ${technologiesEl.length}`);