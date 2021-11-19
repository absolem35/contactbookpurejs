
(function () {
  'use strict'
  const id = document.getElementById('id')
  const firts_name = document.getElementById('firts_name')
  const last_name = document.getElementById('last_name')
  const telephone = document.getElementById('telephone')
  const address = document.getElementById('address')
  const reference = document.getElementById('reference')

  var forms = document.querySelectorAll('.needs-validation')

  const db = window.localStorage

  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()
        event.stopPropagation()

        let contact = {
          id: Math.random(1, 100),
          firts_name: firts_name.value,
          last_name: last_name.value,
          telephone: telephone.value,
          address: address.value,
          reference: reference.value
        }
        if (form.checkValidity()) {
          id.value === '' ? saveContact(db, contact) : updateContact(id.value, contact)
        }

        form.classList.add('was-validated')
      }, false)
    })
  getListContacts(db)
})()

