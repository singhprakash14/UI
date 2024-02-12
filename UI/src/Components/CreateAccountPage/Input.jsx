import React from "react";

const Input = ({ label, important, value, onChange }) => {
  return (
    <div className="input-group">
      <label className="input-group__label">
        {label} <span>{important}</span>
      </label>
      <input
        type="text"
        class="input-group__input"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
