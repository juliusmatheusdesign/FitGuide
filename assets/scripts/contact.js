var nome;
var email;
var mensagem;

function contact(event) {
  event.preventDefault()

  nome = document.getElementById('name').value
  email = document.getElementById('email').value
  mensagem = document.getElementById('message').value

  var sucess = document.getElementById('sucess')

  if(nome !== '' && email !== '' && mensagem !== ''){
    sucess.textContent = 'Sua mensagem foi enviada com sucesso, logo retornaremos o contato no e-mail informado.'
  } else {
    sucess.textContent = '';
  }
  
  document.getElementById('name').value = ''
  document.getElementById('email').value = ''
  document.getElementById('message').value = ''
}