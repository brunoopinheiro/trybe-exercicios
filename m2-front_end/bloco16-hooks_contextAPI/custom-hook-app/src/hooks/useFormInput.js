import { useState } from 'react';

export default function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  function clear() {
    setValue(initialValue);
  }

  return {
    value,
    handleChange,
    clear,
  };
}
