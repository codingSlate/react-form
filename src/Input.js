import React, { Fragment, useRef } from 'react';
import uniqid from 'uniqid';
import './Form.css';
const Input = ({ type, labelText, ...props }) => {
  const id = useRef(uniqid());
  return (
    <Fragment>
      <label htmlFor={id.current}>{labelText}</label>
      {type === 'textarea' ? (
        <textarea id={id.current} {...props}></textarea>
      ) : (
        <input id={id.current} {...props} />
      )}
    </Fragment>
  );
};
export default Input;
