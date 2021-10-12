import React, { FC, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const Button: FC<ButtonProps> = ({
  text,
  className,
  onClick,
  type,
  ...elemProps
}) => (
  <button
    type={type}
    className={`button ${className}`}
    onClick={onClick}
    {...elemProps}
  >
    {text}
  </button>
);

export default Button;
