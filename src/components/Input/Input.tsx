import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const Input: FC<InputProps> = React.memo(
  ({
    type = 'text',
    placeholder,
    name,
    label,
    min,
    minLength,
    ...elemProps
  }: InputProps) => (
    <div className='field'>
      <div className='control'>
        <label htmlFor={name}>{label}</label>
        <input
          className='input'
          type={type}
          placeholder={placeholder}
          name={name}
          id={name}
          required
          autoComplete='off'
          min={min}
          minLength={minLength}
          {...elemProps}
        />
      </div>
    </div>
  )
);

export default Input;
