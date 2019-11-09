/* global $ */
import { nodes } from './nodes'

export default (() => {
  document.addEventListener('DOMContentLoaded', () => {
    nodes.formGroup.addEventListener('submit', (event) => {
      const data = {
        'email': nodes.formEmail.value,
        'message': nodes.formMessage.value,
        'name': nodes.formName.value
      }
      $.ajax({
        data,
        dataType: 'json',
        encode: true,
        type: 'POST',
        url: '/emailHandler.php'
      }).done((response) => {
        if (response.success) {
          // clear input on click in the form
          nodes.formName.value = ''
          nodes.formEmail.value = ''
          nodes.formMessage.value = ''
          // alert(response.message)
        }
      })
      event.preventDefault()
    })
  })
})()
