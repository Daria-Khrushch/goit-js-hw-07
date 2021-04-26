const input = document.querySelector('input');
const text = document.querySelector('span');
input.addEventListener('input', onInputChange);

function onInputChange(event) {
    let inputValue = input.value;
    text.style.fontSize = `${inputValue}px`;
}