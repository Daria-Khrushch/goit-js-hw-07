const input = document.querySelector('input');
const nameOutput = document.querySelector('span');

input.addEventListener('input', onInputChange);

function onInputChange(event) {
    if (event.currentTarget.value === '') {
        nameOutput.textContent = 'незнакомец'
    }
    else {
         nameOutput.textContent = event.currentTarget.value;
    }; 
};

