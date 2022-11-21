// import logo from './logo.svg';
import React from 'react';
import Swal from 'sweetalert2';
import useFormInput from './hooks/useFormInput';

function App() {
  const firstName = useFormInput('');
  const lastName = useFormInput('');
  const email = useFormInput('');

  function handleSubmit(e) {
    e.preventDefault();

    Swal.fire(
      'Formulário Enviado!',
      `Name: ${firstName.value} ${lastName.value} - Email: ${email.value}`,
      'success'
    );

    firstName.clear();
    lastName.clear();
    email.clear();
  }

  return (
    <div className="container">
      <form onSubmit={ handleSubmit }>
        <label>
          First Name:
          <input value={firstName.value} onChange={firstName.handleChange} />
        </label>
        <label>
          Last Name:
          <input value={lastName.value} onChange={lastName.handleChange} />
        </label>
        <label>
          E-mail:
          <input value={email.value} onChange={email.handleChange} />
        </label>
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}

export default App;
