const form = document.querySelector('#form');

const inputs = document.querySelectorAll('.required');

const spanError = document.querySelectorAll('.error-message');

const messages = {
    emptyfield: "Preencha o campo {field}",
    invalidEmail: "Informe um endereço de email válido. ",
    invalidLegth: "Tamanho de senha invalido",
    invalidPassword: "Insira pelo menos um caractere especial"
}

function validateInput(input, spanError) {
    let error = false;
    let message;
    let especial = "/!@#$%^&*(),.?:{}|<>/";
    if (input.value.trim() === '') {
        error = true;
        message = messages.emptyfield.replace('{field}', input.name);
    }else if(input.name==='email' && !/\S+@\S+\.\S+/.test(input.value)){
        error=true;
        message = messages.invalidEmail;
    }else if(input.name=='senha' && input.value.length<8){
        error=true;
        message= messages.invalidLegth;
    }else if(input.name=='senha' && especial.test(input.value)){
        error=true;
        message= messages.invalidPassword;
    }

    if (error) {
        spanError.textContent = message;
        spanError.style.display = 'block';
        spanError.classList.add('errofont');
        input.classList.add('erroinput');
    }
    else {
        spanError.textContent = '';
        spanError.style.display = 'none';
        input.classList.remove('erroinput');
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    inputs.forEach(function (input, index) {
        const errorMessage = spanError[index];
        validateInput(input, errorMessage);
        if (input.value === '') {
            errorMessage.textContent = `Preencha o campo ${input.name}`;
            errorMessage.classList.add('errofont');
            input.classList.add('erroinput');
            errorMessage.style.display = 'block';
        }
    })
})

inputs.forEach(function (input) {
    input.addEventListener('blur', function () {
      const errorMessage = input.nextElementSibling;
      validateInput(input, errorMessage);
    });
  });