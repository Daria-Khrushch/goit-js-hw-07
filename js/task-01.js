const navItemEl = document.querySelectorAll('.item');
console.log(`В списке ${navItemEl.length} категории.`);

const itemEl = document.querySelectorAll('.item ul');

itemEl.forEach(function (item, index) {
    console.log(`Категория: ${item.previousElementSibling.textContent}`);
    console.log(`Количество элементов: ${item.children.length}`);
})
