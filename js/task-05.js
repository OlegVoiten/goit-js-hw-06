const nameInpute = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');


nameInpute.addEventListener('input', () => {
    const inputValue = nameInpute.value;

    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
    }
    else {
        nameOutput.textContent = inputValue;
    };


});
