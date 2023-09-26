import React from 'react';
import className from './text.module.scss'; // Import the CSS file for styling



const TextInput = ({ label, placeholder,handleChange,value,type }) => {
  return (
    <div className={className.inputcontainer}>
      <label className={className.inputlabel}>{label}</label>
      <input
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
        className={className.textinput}
      />
    </div>
  );
}

export default TextInput;



export const Textarea = ({ label, placeholder, handleChange,value }) => {
  return (
    <div className={className.textareacontainer}>
      <label className={className.textarealabel}>{label}</label>
      <textarea
      value={value}
        placeholder={placeholder}
        className={className.textarea}
        onChange={handleChange}
      />
    </div>
  );
}

