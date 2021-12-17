const tableKey = 'cms-table'
let cmsTable
let cmsTableDemo = {}

document.getElementById('SortButton').addEventListener('click', () => {
  const sortedKeys = Object.keys(cmsTable).sort()
  const tempTable = {}
  sortedKeys.forEach(key => (tempTable[key] = cmsTable[key]))
  cmsTable = tempTable
  refreshTable()
})

let enableDisableNameInput = option => {
  let newPersonName = document.getElementById('newPersonName')
  if (option === 'enable') newPersonName.disabled = false
  else if (option === 'disable') newPersonName.disabled = true
}

let refreshTable = () => {
  let cmsTableKeys = Object.keys(cmsTable)
  let tableContaier = document.getElementById('listaContainer')
  let oldTableBody = document.getElementById('tableBody')
  tableContaier.removeChild(oldTableBody)
  let newTableBody = document.createElement('span')
  newTableBody.id = 'tableBody'
  tableContaier.appendChild(newTableBody)

  function createDivs() {
    for (let i = 0; i < cmsTableKeys.length; i++) {
      let currentRow = document.createElement('div')
      let currentNameCol = document.createElement('div')
      let currentPhoneCol = document.createElement('div')
      let currentCpfCol = document.createElement('div')
      let currentDateCol = document.createElement('div')
      let currentEmailCol = document.createElement('div')
      let currentEditBtn = document.createElement('div')
      let currentDeleteBtn = document.createElement('div')

      currentRow.className = 'lista-row'
      currentNameCol.className = 'lista-column lista-name'
      currentPhoneCol.className = 'lista-column lista-phone'
      currentCpfCol.className = 'lista-column lista-cpf'
      currentDateCol.className = 'lista-column lista-date'
      currentEmailCol.className = 'lista-column lista-email'
      currentEditBtn.className = 'lista-column cm-edit'
      currentDeleteBtn.className = 'lista-column cm-delete'

      currentDeleteBtn.setAttribute('title', 'Deletar Usuário')
      currentEditBtn.setAttribute('title', 'Editar Usuário')

      currentNameCol.innerHTML = cmsTableKeys[i]
      currentPhoneCol.innerHTML = cmsTable[cmsTableKeys[i]].phone
      currentCpfCol.innerHTML = cmsTable[cmsTableKeys[i]].cpf
      currentDateCol.innerHTML = cmsTable[cmsTableKeys[i]].date
      currentEmailCol.innerHTML = cmsTable[cmsTableKeys[i]].email

      currentDeleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i> '
      currentEditBtn.innerHTML = '<i class="fas fa-user-edit"></i> '

      currentRow.appendChild(currentNameCol)
      currentRow.appendChild(currentPhoneCol)
      currentRow.appendChild(currentCpfCol)
      currentRow.appendChild(currentDateCol)
      currentRow.appendChild(currentEmailCol)
      currentRow.appendChild(currentEditBtn)
      currentRow.appendChild(currentDeleteBtn)
      newTableBody.appendChild(currentRow)

      let ageButtonMoreThirty = document.getElementById('moreThirty')
      ageButtonMoreThirty.addEventListener('click', () => {
        function age() {
          var dataAtual = new Date()
          var dataNascimento = new Date(currentDateCol.innerHTML)

          var anos = dataAtual.getFullYear() - dataNascimento.getFullYear()

          if (anos > 30) {
            currentNameCol.className =
              'set-age-morethirty lista-column lista-name'
          } else {
            currentNameCol.className = ' lista-column lista-name'
          }
        }
        age()
      })

      let ageButtonUnderThirty = document.getElementById('underThirty')
      ageButtonUnderThirty.addEventListener('click', () => {
        function age() {
          var dataAtual = new Date()
          var dataNascimento = new Date(currentDateCol.innerHTML)

          var anos = dataAtual.getFullYear() - dataNascimento.getFullYear()

          if (anos < 30) {
            currentNameCol.className =
              'set-age-underthirty lista-column lista-name'
          } else {
            currentNameCol.className = ' lista-column lista-name'
          }
        }
        age()
      })

      let cleanAgeButon = document.getElementById('clean')
      cleanAgeButon.addEventListener('click', () => {
        currentNameCol.className = ' lista-column lista-name'
      })
    }
  }
  createDivs()

  let enableDisableNewUserModal = option => {
    let newPersonName = document.getElementById('newPersonName')
    let newPersonPhone = document.getElementById('newPersonPhone')
    let newPersonCpf = document.getElementById('newPersonCpf')
    let newPersonDate = document.getElementById('newPersonDate')
    let newPersonEmail = document.getElementById('newPersonEmail')
    newPersonName.value = ''
    newPersonPhone.value = ''
    newPersonCpf.value = ''
    newPersonDate.value = ''
    newPersonEmail.value = ''

    let newPersonModal = document.getElementById('newPersonModal')
    let backdrop = document.getElementById('backdrop')

    newPersonModal.className = `${option}-modal`
    backdrop.className = `${option}-modal`
  }

  let addNewEntryBtn = document.getElementById('cmAddNewEntry')
  let editBtns = document.getElementsByClassName('cm-edit')
  let deleteBtns = document.getElementsByClassName('cm-delete')

  let newPersonSubmitBtn = document.getElementById('newPersonSubmitButton')
  let newPersonCancelBtn = document.getElementById('newCancelButton')

  newPersonSubmitBtn.addEventListener('click', () => {
    let newPersonName = document.getElementById('newPersonName').value
    let newPersonCpf = document.getElementById('newPersonCpf').value
    let newPersonPhone = document.getElementById('newPersonPhone').value
    let newPersonDate = document.getElementById('newPersonDate').value
    let newPersonEmail = document.getElementById('newPersonEmail').value

    if (newPersonName === '')
      document.getElementById('newPersonName').className = 'input-err'
    else document.getElementById('newPersonName').className = ''

    if (newPersonPhone === '')
      document.getElementById('newPersonPhone').className = 'input-err'
    else document.getElementById('newPersonPhone').className = ''

    if (newPersonCpf === '')
      document.getElementById('newPersonCpf').className = 'input-err'
    else document.getElementById('newPersonCpf').className = ''

    if (newPersonDate === '')
      document.getElementById('newPersonDate').className = 'input-err'
    else document.getElementById('newPersonDate').className = ''

    if (newPersonEmail === '')
      document.getElementById('newPersonEmail').className = 'input-err'
    else document.getElementById('newPersonEmail').className = ''

    if (
      newPersonName !== '' &&
      newPersonEmail !== '' &&
      newPersonCpf !== '' &&
      newPersonPhone !== '' &&
      newPersonDate !== ''
    ) {
      function Validacao() {
        if (
          newPersonEmail.indexOf('@') == -1 ||
          newPersonEmail.indexOf('.') == -1 ||
          newPersonEmail.indexOf('.') - newPersonEmail.indexOf('@') == 1
        ) {
          document.getElementById('newPersonEmail').className = 'input-err'
        } else if (
          newPersonPhone.indexOf('(') !== 0 ||
          newPersonPhone.indexOf(')') !== 3 ||
          newPersonPhone.indexOf('-') !== 9
        ) {
          document.getElementById('newPersonPhone').className = 'input-err'
        } else if (
          (newPersonCpf.indexOf('.') !== 3 &&
            newPersonCpf.indexOf('.') !== 7) ||
          newPersonCpf.indexOf('-') !== 11
        ) {
          document.getElementById('newPersonCpf').className = 'input-err'
        } else {
          cmsTable[newPersonName] = {
            phone: newPersonPhone,
            cpf: newPersonCpf,
            date: newPersonDate,
            email: newPersonEmail
          }
          localStorage.setItem(tableKey, JSON.stringify(cmsTable))
          enableDisableNewUserModal('disable')
          refreshTable()
        }
      }
      Validacao()
    }
  })
  newPersonCancelBtn.addEventListener('click', () => {
    enableDisableNewUserModal('disable')
  })
  addNewEntryBtn.addEventListener('click', () => {
    enableDisableNewUserModal('enable')
  })

  for (let i = 0; i < editBtns.length; i++) {
    editBtns[i].addEventListener('click', $event => {
      let nameToEdit = $event.target.parentElement.children[0].innerText
      let personToEdit = cmsTable[nameToEdit]
      enableDisableNameInput('enable')
      enableDisableNewUserModal('enable')
      let newPersonName = document.getElementById('newPersonName')
      let newPersonPhone = document.getElementById('newPersonPhone')
      let newPersonCpf = document.getElementById('newPersonCpf')
      let newPersonDate = document.getElementById('newPersonDate')
      let newPersonEmail = document.getElementById('newPersonEmail')
      newPersonName.value = nameToEdit
      newPersonPhone.value = personToEdit.phone
      newPersonCpf.value = personToEdit.cpf
      newPersonDate.value = personToEdit.date
      newPersonEmail.value = personToEdit.email
      enableDisableNameInput('disable')
    })
  }
  for (let i = 0; i < deleteBtns.length; i++) {
    deleteBtns[i].addEventListener('click', $event => {
      let nameToDelete = $event.target.parentElement.children[0].innerText
      let isSure = window.confirm(
        'Tem certeza que quer deletar ' + nameToDelete + '?'
      )
      if (isSure)
        // deletar o contato da lista
        deleteUserFromTable(nameToDelete)
    })
  }
}

let deleteUserFromTable = userName => {
  let tempTable = {}
  let cmsTableKeys = Object.keys(cmsTable)
  for (let i = 0; i < cmsTableKeys.length; i++) {
    if (userName !== cmsTableKeys[i]) {
      tempTable[cmsTableKeys[i]] = cmsTable[cmsTableKeys[i]]
    }
  }
  cmsTable = tempTable
  localStorage.setItem(tableKey, JSON.stringify(cmsTable))
  refreshTable()
}
let init = () => {
  if (localStorage.getItem(tableKey)) {
    cmsTable = JSON.parse(localStorage.getItem(tableKey))
  } else {
    cmsTable = cmsTableDemo
    localStorage.setItem(tableKey, JSON.stringify(cmsTable))
  }
  refreshTable()
}
init()
