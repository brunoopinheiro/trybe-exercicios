const submitButton = document.getElementById('submit-button');

function previneReload(event) {
  event.target.preventDefault();
}

submitButton.addEventListener('click', previneReload);
