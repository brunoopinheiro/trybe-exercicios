const submitButton = document.getElementById('submit-button');
let picker = new Pikaday({ field: document.getElementById('trip-date') });
picker.gotoToday();
const validate = new window.JustValidate('#form');

function previneReload(event) {
  event.target.preventDefault();
}

validate.addField('#input-email', [
  {
    rule: 'required',
    errorMessage: 'Email is required',
  },
  {
    rule: 'email',
    errorMessage: 'Email is invalid',
  },
]);

submitButton.addEventListener('click', previneReload);
