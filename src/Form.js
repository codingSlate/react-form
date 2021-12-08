import React, { useState } from 'react';
import './Form.css';
const initFields = {
  fname: '',
  lname: '',
  msg: '',
  course: '',
  breakfast: false,
  lunch: false,
  dinner: false,
  shirtSize: '',
};
const loadDatatoFields = {
  fname: 'Kiran',
  lname: 'Gowda',
  msg: 'I am fine and excited',
  course: 'bca',
  breakfast: true,
  lunch: false,
  dinner: false,
  shirtSize: 'l',
};

const Form = () => {
  const [form, setForm] = useState(initFields);
  const onChangeHandler = (e) => {
    const value =
      e.target.type === 'checkbox' ||
      e.target.type === 'checkbox' ||
      e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value;

    setForm({ ...form, [e.target.name]: value });
  };

  // console form

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const onResetHandler = () => {
    // setForm(initFields);
    setForm(loadDatatoFields);
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

        <label htmlFor="course">Select one</label>
        <select
          name="course"
          id="course"
          value={form.course}
          onChange={onChangeHandler}
        >
          <option>Select your course</option>
          <option value="mac">MCA</option>
          <option value="btech">B.Tech</option>
          <option value="bca">BCA</option>
        </select>

        {/* checkbox */}
        <fieldset>
          <legend> Select your food </legend>
          <input
            type="checkbox"
            checked={form.breakfast}
            id="breakfast"
            name="breakfast"
            onChange={onChangeHandler}
          />
          <label htmlFor="breakfast">Breakfast</label>
          <input
            type="checkbox"
            checked={form.lunch}
            id="lunch"
            name="lunch"
            onChange={onChangeHandler}
          />
          <label htmlFor="lunch">Lunch</label>
          <input
            type="checkbox"
            checked={form.dinner}
            id="dinner"
            name="dinner"
            onChange={onChangeHandler}
          />
          <label htmlFor="dinner">Dinner</label>
        </fieldset>

        {/* radio  */}
        <fieldset>
          <legend>T-shirt size</legend>
          <input
            type="radio"
            id="sizeS"
            value="s"
            name="shirtSize"
            checked={form.shirtSize === 's'}
            onChange={onChangeHandler}
          />
          <label htmlFor="sizeS">Small</label>
          <input
            type="radio"
            id="sizeM"
            value="m"
            name="shirtSize"
            checked={form.shirtSize === 'm'}
            onChange={onChangeHandler}
          />
          <label htmlFor="sizeM">Medium</label>
          <input
            type="radio"
            id="sizeL"
            value="l"
            name="shirtSize"
            checked={form.shirtSize === 'l'}
            onChange={onChangeHandler}
          />
          <label htmlFor="sizeL">Large</label>
        </fieldset>

        <button type="submit">Submit</button>
        <button type="button" onClick={onResetHandler}>
          Load Data
        </button>
        {/* <button type="button" onClick={onResetHandler}>
          Reset
        </button> */}
      </form>
    </>
  );
};
export default Form;
