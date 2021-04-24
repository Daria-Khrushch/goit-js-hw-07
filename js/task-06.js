const input = document.querySelector('input');
input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    if (input.value.length >= 6) {
         input.classList.remove('invalid');
        input.classList.add('valid');
    } else if (input.value.length <= 6) {
        input.classList.remove('valid');
        input.classList.add('invalid');
    } 
}