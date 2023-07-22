const firstNumber = document.querySelector('.firstNumber');
const secondNumber = document.querySelector('.secondNumber');

const message = document.querySelector('.result');

secondNumber.addEventListener('input', (e) => {
  if(+firstNumber.value < +secondNumber.value){
    message.textContent = 'Second Number is Larger';
  } else if(+firstNumber.value > +secondNumber.value) {
    message.textContent = 'First Number is Larger';;

  }else {
    message.textContent = null;
  }
}, true);

firstNumber.addEventListener('input', (e) => {
  if(+firstNumber.value < +secondNumber.value){
    message.textContent = 'Second Number is Larger';
  } else if(+firstNumber.value > +secondNumber.value) {
    message.textContent = 'First Number is Larger';;

  }
  else {
    message.textContent = null;
  }
}, true);