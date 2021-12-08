import React, { useState } from 'react';
import './Form.css';
const initFields ={
  fname: '',
  lname: '',
}


const Form = () => {
  const [form, setForm] = useState(initFields);
  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);

  const onSubmitHandler = (e) => {
    e.preventDefault;
    setForm()
  };
  
  const onResetHandler = (e) => {

    // setForm()
  };


  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="fname">First Name</label>
        <input type="text" id="fname" onChange={onChangeHandler} name="fname" />
        <label htmlFor="lname">Last Name</label>
        <input type="text" id="lname" onChange={onChangeHandler} name="lname" />

        <button type="submit">Submit</button>
        <button type="button" onClick={onResetHandler}>Reset</button>
      </form>
    </>
  );
};
export default Form;
