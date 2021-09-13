import React, { useState } from 'react';
import './Home.scss';
import Canvas from '../../components/Canvas/Canvas';

const Home: React.FC = () => {
  const [btnType, setBtnType] = useState('add');
  const handleClick = (type: string) => {
    return (event: React.MouseEvent) => {
      event.stopPropagation();
      if (btnType !== type) {
        document.querySelectorAll('.graph-btn').forEach(e => {
          e.classList.remove('active');
        });
        (event.currentTarget as HTMLAnchorElement).classList.add('active');
      }
      setBtnType(type);
    };
  };
  return (
    <div className='home'>
      <div className='btns'>
        <a
          onClick={handleClick('move')}
          className='waves-effect btn move graph-btn'
        >
          <i className='material-icons'>open_with</i>
        </a>
        <a
          onClick={handleClick('add')}
          className='waves-effect btn graph-btn active'
        >
          <i className='material-icons'>add</i>
          Добавить вершину
        </a>
        <a
          onClick={handleClick('connect')}
          className='waves-effect btn graph-btn'
        >
          <i className='material-icons'>power_input</i>
          Соединить вершины
        </a>
        <a
          onClick={handleClick('delete')}
          className='waves-effect btn graph-btn delete'
        >
          <i className='material-icons'>close</i>
          Удалить
        </a>
        <a
          onClick={handleClick('algorithms')}
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
