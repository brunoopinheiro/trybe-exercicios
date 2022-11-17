import { useState } from 'react';

export default function Form() {
  const [form, setForm] = useState({
    fullName: '',
    age: 0,
    city: '',
    module: 'Fundamentos',
  });

  function updater(value, key) {
    setForm({
      ...form,
      [key]: value,
    })
  }

  return (
    <form>
      <label>
        Nome:
        <input
          type="text"
          value={ form.fullName }
          onChange={ ({ target }) => updater(target.value, 'fullName') }
          placeholder="Nome Completo"
        />
      </label>
      <label>
        Idade:
        <input
          type="number"
          value={ form.age }
          onChange={ ({ target }) => updater(target.value, 'age')}
        />
      </label>
      <label>
        Cidade:
        <input
           type="text"
           value={ form.city }
           onChange={ ({ target }) => updater(target.value, 'city')}
        />
      </label>
      <fieldset>
        <legend>Modulo</legend>
        <label>
          Fundamentos
          <input
            type="radio"
            value="Fundamentos"
            onChange={ ({ target}) => updater(target.value, 'module')}
            checked={ form.module === 'Fundamentos' }
          />
        </label>
        <label>
          Front-end
          <input
            type="radio"
            value="Front-end"
            onChange={ ({ target }) => updater(target.value, 'module') }
            checked={ form.module === 'Front-end' }
          />
        </label>
        <label>
          Back-end
          <input
            type="radio"
            value="Back-end"
            onChange={ ({ target }) => updater(target.value, 'module') }
            checked={ form.module === 'Back-end' }
          />
        </label>
        <label>
          Ciencias da Computacao
          <input
            type="radio"
            value="Ciencias da Computacao"
            onChange={ ({ target }) => updater(target.value, 'module') }
            checked={ form.module === 'Ciencias da Computacao' }
          />
        </label>
      </fieldset>
      <button
        type="submit"
        onClick={ (e) => e.preventDefault() }
      >
        Submit
      </button>
    </form>
  );
}
