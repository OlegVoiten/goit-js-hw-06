const validatorInput = document.getElementById("validation-input");

validatorInput.addEventListener('blur', () => {
    const validatorValue = validatorInput.value;
    const dataLength = parseInt(validatorInput.dataset.length);

    const isValide = validatorValue.length === dataLength;
    validatorInput.classList.toggle("valid", isValide);
    validatorInput.classList.toggle("invalid", !isValide);
    

    // if (validatorValue.length === dataLength) {
    //     validatorInput.classList.remove('invalid');
    //     validatorInput.classList.add('valid');
    // }
    // else {
    //     validatorInput.classList.remove('valid');
    //     validatorInput.classList.add('invalid');
    // }
});

