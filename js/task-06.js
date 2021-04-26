const input = document.querySelector('input');
input.addEventListener('blur', onInputBlur);
const lengthEl = input.dataset['length'];
console.log(lengthEl);

function onInputBlur(event) {
    const trueLength = input.value.length;
    console.log(trueLength);
    if (trueLength === Number(lengthEl)) {
        console.log('ok');
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');
        input.classList.add('invalid');
        console.log('neok');
    };
}

