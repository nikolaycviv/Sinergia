/* global $ */
const main = require('./main.js');

document.addEventListener('DOMContentLoaded', () => {
  main.nodes.contactForm = document.body.querySelector('#contactFormID');
  main.nodes.formGroup = main.nodes.contactForm.querySelector('.form-group');
  main.nodes.formName = main.nodes.formGroup[0];
  main.nodes.formEmail = main.nodes.formGroup[1];
  main.nodes.formMessage = main.nodes.formGroup[2];

  main.nodes.formGroup.addEventListener('submit', (event) => {
    const data = {
      'email': main.nodes.formEmail.value,
      'message': main.nodes.formMessage.value,
      'name': main.nodes.formName.value
    };
    $.ajax({
      data: data,
      dataType: 'json',
      encode: true,
      type: 'POST',
      url: '/emailHandler.php'
    }).done((response) => {
      if (response.success) {
        // clear input on click in the form
        main.nodes.formName.value = '';
        main.nodes.formEmail.value = '';
        main.nodes.formMessage.value = '';
        // alert(response.message);
      }
    });
    event.preventDefault();
  });
});
