import React, { FC, InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string;
}

const Input: FC<InputProps> = ({
	type = 'text',
	placeholder,
	name,
	label,
	min,
	minLength,
}) => (
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
			/>
		</div>
	</div>
);

export default Input;
