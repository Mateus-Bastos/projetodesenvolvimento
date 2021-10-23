const registrar = document.getElementById('registrar')

function cadastro() {
  const nome = document.getElementById('nome').value
  const sobrenome = document.getElementById('sobrenome').value
  const email = document.getElementById('email').value
  const telefone = document.getElementById('telefone').value
  const cpf = document.getElementById('cpf').value
  const data = document.getElementById('data').value
  const list = document.getElementById('list')

  if (
    nome !== '' &&
    sobrenome !== '' &&
    email !== '' &&
    telefone !== '' &&
    cpf !== '' &&
    data !== ''
  ) {
    list.textContent = 'oi'
  } else {
    3
  }
}

registrar.addEventListener('click', cadastro)
