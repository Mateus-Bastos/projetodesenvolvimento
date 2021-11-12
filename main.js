const registrar = document.getElementById('registrar')

function cadastro() {
  const nome = document.getElementById('nome')
  const sobrenome = document.getElementById('sobrenome')
  const email = document.getElementById('email')
  const telefone = document.getElementById('telefone')
  const cpf = document.getElementById('cpf')
  const data = document.getElementById('data')
  const list = document.getElementById('list')

  if (
    nome.value !== '' &&
    sobrenome.value !== '' &&
    email.value !== '' &&
    telefone.value !== '' &&
    cpf.value !== '' &&
    data.value !== ''
  ) {
    function Validacao() {
      if (
        email.value.indexOf('@') == -1 ||
        email.value.indexOf('.') == -1 ||
        email.value.indexOf('.') - email.value.indexOf('@') == 1
      ) {
        list.textContent = 'email invalido'
      } else if (
        telefone.value.indexOf('(') !== 0 ||
        telefone.value.indexOf(')') !== 3 ||
        telefone.value.indexOf('-') !== 9
      ) {
        list.textContent = 'telefone invalido'
      } else if (
        (cpf.value.indexOf('.') !== 3 && cpf.value.indexOf('.') !== 7) ||
        cpf.value.indexOf('-') !== 11
      ) {
        list.textContent = 'Cpf invalido'
      } else {
        list.textContent = `Cadastro realizado com sucesso: \n ${nome.value} ${sobrenome.value} \n ${email.value} \n ${telefone.value} \n ${cpf.value} \n ${data.value}`
      }
    }
    registrar.addEventListener('click', Validacao)
  } else {
    list.textContent = 'preencha todos os campos'
  }
}

registrar.addEventListener('click', cadastro)
