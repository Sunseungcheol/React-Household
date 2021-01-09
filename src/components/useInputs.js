import { useState } from 'react';

function useInputs(initialForm) {
  //console.log(initialForm);
  const [inputs, setInputs] = useState(initialForm);
  const onChange = e => {
    const { name, value } = e.target;
    console.log(name, value);
    setInputs(form => ({ ...form, [name]: value }));
  };

  const onlyNumber = e => {
    if (
      (e.keycode < 48 || e.which > 57) &&
      (e.keycode < 96 || e.keycode > 105)
    ) {
      e.preventDefault();
      setInputs({
        id: inputs.id,
        category: inputs.category,
        text: inputs.text,
        amount: 0,
      });
      e.target.value = '';
    }
  };

  return [inputs, setInputs, onChange, onlyNumber];
}

export default useInputs;
