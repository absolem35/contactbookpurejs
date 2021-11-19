const saveContact = (db, contact) => {
  db.setItem(contact.id, JSON.stringify(contact))
  window.location.href = '/'
}
const updateContact = (id, contact) => {
  const db = window.localStorage
  db.setItem(id, JSON.stringify(contact))
  window.location.href = '/'
}

const getListContacts = (db) => {
  let claves = Object.keys(db)
  const bodyTable = document.getElementById('body_table_contact')
  let data = ''

  for (clave of claves) {
    let contact = JSON.parse(db.getItem(clave))
    data += `<tr onclick="editContact(${contact.id})">
                <td>${contact.firts_name}</td>
                <td>${contact.last_name}</td>
                <td>${contact.telephone}</td>
                <td>${contact.address}</td>
                <td>${contact.reference}</td>
                <td onclick="deleteContact(${contact.id})"><i class="bi bi-trash text-danger delete"></i></td>
              </tr>`

  }
  bodyTable.innerHTML = data
}

const editContact = (id) => {
  const db = window.localStorage
  let contact = JSON.parse(db.getItem(id))
  document.querySelectorAll('.needs-validation input').forEach(input => {
    input.value = contact[input.id]
  })
}

const deleteContact = (id) => {
  const db = window.localStorage
  db.removeItem(id)
  window.location.href = '/'
}



