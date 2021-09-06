import React, { useState } from 'react';
import './Home.scss';
import Canvas from '../../components/Canvas/Canvas';

const Home: React.FC = () => {
	const [btnType, setBtnType] = useState('');
	const handleClick = (type: string) => {
		setBtnType(type);
	};
	return (
		<div className='home'>
			<div className='btns'>
				<a
					onClick={() => handleClick('add')}
					className='waves-effect cyan lighten-3 btn add'
				>
					<i className='material-icons'>add</i>
					Добавить вершину
				</a>
				<a
					onClick={() => handleClick('connect')}
					className='waves-effect cyan lighten-3 btn'
				>
					<i className='material-icons'>power_input</i>
					Соединить вершины
				</a>
				<a
					onClick={() => handleClick('add')}
					className='waves-effect cyan lighten-3 btn'
				>
					<i className='material-icons'>settings</i>
					Алгоритмы
				</a>
			</div>
			<Canvas btnType={btnType} />
		</div>
	);
};

export default Home;
