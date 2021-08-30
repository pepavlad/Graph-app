import React, { FC, InputHTMLAttributes } from "react";
import InputMask from "react-input-mask";
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  mask: string;
}

const Input: FC<InputProps> = ({
  type = "text",
  placeholder,
  value,
  name,
  onChange,
  label,
  mask,
}) => {
  return (
    <div className="field">
      <div className="control">
        <label htmlFor={name}>{label}</label>
        <InputMask
          mask={mask}
          className="input is-small"
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          id={name}
          onChange={onChange}
          required
          autoComplete="off"
        />
      </div>
    </div>
  );
};

export default Input;
