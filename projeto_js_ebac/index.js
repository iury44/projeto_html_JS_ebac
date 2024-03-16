const numberA = document.getElementById("number-a");
const numberB = document.getElementById("number-b");
const btn = document.querySelector("form button");
const alertError = document.getElementById("error");
const alertValidated = document.getElementById('validated')
let formValidated;

function validatedNumber(numberOne, numberTwo) {
  if (numberA.value.trim() === '' || numberB.value.trim() === '') {
    alert('Fomulários com Campos Vazios');
    return false;
  }
  if(numberA.value === numberB.value){
    
    alertError.classList.add('equal-message')
    alertError.innerHTML = 'A e B São iguais'
    alertValidated.style.display = 'none'
    setTimeout(()=>{
      alertError.classList.remove('equal-message')
      alertError.innerHTML = ''
      numberA.value = ''
      numberB.value = ''
    },3000)
    return false;
  }
  const comparacao = numberOne > numberTwo;
  return comparacao;
}

btn.addEventListener('click', (event) => {
  event.preventDefault();
  
  formValidated = validatedNumber(parseInt(numberA.value), parseInt(numberB.value));
  
  if (formValidated) {
    alertMenssagerError();
    numberA.value = '';
    numberB.value = '';
  } 
    messageValidated();
  
});

function alertMenssagerError() {
  if (parseFloat(numberA.value) > parseFloat(numberB.value)) {
    alertError.classList.add('error-message');
    alertError.innerHTML = `O valor de A (${numberA.value}) é maior que o valor de B (${numberB.value})`;
    alertValidated.style.display = 'none'
    numberA.classList.remove('input-error');
    numberB.classList.remove('input-error');

    setTimeout(() => {
      alertError.innerHTML = '';
      alertError.classList.remove('error-message');
      numberA.classList.add('input-error');
      numberB.classList.add('input-error');
    }, 3000);
  }
}

function messageValidated() {
  alertValidated.classList.add('validated-message');
  alertValidated.innerHTML = `O valor de B (${numberB.value})
   é maior que o valor de A (${numberA.value}) \n Enviado com sucesso`;

  setTimeout(() => {
    alertValidated.innerHTML = '';
    alertValidated.classList.remove('validated-message');
    numberA.value = '';
    numberB.value = '';
  }, 3000);
}
