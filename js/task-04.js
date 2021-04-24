const counterValue = document.querySelector('.value');
let currentValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

buttonDecrement.addEventListener('click', () => {
    currentValue -= 1;
    counterValue.textContent = currentValue;
});
buttonIncrement.addEventListener('click', () => {
    currentValue += 1;
    counterValue.textContent = currentValue;
});




