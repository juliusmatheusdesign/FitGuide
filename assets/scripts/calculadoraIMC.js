/* 
Abaixo de 17 Muito abaixo do peso
Entre 17 e 18,49 Abaixo do peso
Entre 18,5 e 24,99 Peso Normal
Entre 25 e 29,99 Acima do peso
*/

// peso / (altura*altura);

var idade
var peso
var altura
var imc
var resultado

function calcular(event) {
  event.preventDefault()

  idade = document.getElementById('age').value
  peso = document.getElementById('weight').value
  altura = document.getElementById('height').value

  imc = peso / (altura * altura)

  resultado = document.getElementById('resultado')

  if (imc < 17) {
    resultado.innerHTML =
      '<br/> Seu resultado foi: ' +
      imc.toFixed(2) +
      '<br/> Cuidado você está muito abaixo do peso!'
    resultado.className = 'very_low'
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML =
      '<br/> Seu resultado foi: ' +
      imc.toFixed(2) +
      '<br/> Você está abaixo do peso!'
    resultado.className = 'down'
  } else if (imc >= 18.5 && imc < 24.99) {
    resultado.innerHTML =
      '<br/> Seu resultado foi: ' +
      imc.toFixed(2) +
      '<br/> Você está no peso ideal!'
    resultado.className = 'ideal'
  } else if (imc > 25 && imc <= 29.99) {
    resultado.innerHTML =
      '<br/> Seu resultado foi: ' +
      imc.toFixed(2) +
      '<br/> Você está acima do peso!'
    resultado.className = 'above'
  } else if (imc >= 30) {
    resultado.innerHTML =
      '<br/> Seu resultado foi: ' + imc.toFixed(2) + '<br/> Cuidado Obesidade!'
    resultado.className = 'obesity'
  }

  document.getElementById('age').value = ''
  document.getElementById('weight').value = ''
  document.getElementById('height').value = ''
}
