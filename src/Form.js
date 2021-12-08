import React, { useState } from 'react';
import './Form.css';
const initFields = {
  fname: '',
  lname: '',
  msg: '',
};

const Form = () => {
  const [form, setForm] = useState(initFields);
  const onChangeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // console form

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const onResetHandler = () => {
    setForm(initFields);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <label htmlFor="fname">First Name</label>
        <input
          type="text"
          id="fname"
          onChange={onChangeHandler}
          name="fname"
          value={form.fname}
        />
        <label htmlFor="lname">Last Name</label>
        <input
          type="text"
          id="lname"
          onChange={onChangeHandler}
          name="lname"
          value={form.lname}
        />
        <label htmlFor="msg">Message</label>
        <textarea
          row="10"
          id="msg"
          onChange={onChangeHandler}
          name="msg"
          value={form.msg}
        ></textarea>

        <button type="submit">Submit</button>
        <button type="button" onClick={onResetHandler}>
          Reset
        </button>
      </form>
    </>
  );
};
export default Form;
