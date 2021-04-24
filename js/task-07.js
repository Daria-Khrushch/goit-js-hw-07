const input = document.querySelector('input');
const text = document.querySelector('span');
input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (input.value > 50) {
        text.style.fontSize= 'large';
    } else if (input.value < 50) {
        text.style.fontSize= 'small';
    } else {
        text.style.fontSize= 'medium';
    }
    
}