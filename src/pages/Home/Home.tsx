import React, { useState, useEffect, useRef, useCallback } from 'react';
import M from 'materialize-css';
import './Home.scss';
import Canvas from '../../components/Canvas/Canvas';
import SaveGraphModal from '../../components/SaveGraphModal/SaveGraphModal';

const Home: React.FC = () => {
  const [btnType, setBtnType] = useState<string>('add');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const btnRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const dropdowns = dropdownRef.current!;
    const options = {
      inDuration: 300,
      outDuration: 300,
      coverTrigger: false,
    };

    M.Dropdown.init(dropdowns, options);
  }, []);

  const handleClick = (type: string) => {
    return (event: React.MouseEvent) => {
      event.stopPropagation();
      if (!btnType.includes(type)) {
        Array.from(btnRef.current!.children).forEach(e => {
          e.classList.remove('active');
        });
        (event.currentTarget as HTMLAnchorElement).classList.add('active');
      }
      setBtnType(type);
    };
  };
  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);
  const showModal = () => {
    setIsModalOpen(true);
  };
  return (
    <div>
      {isModalOpen && <SaveGraphModal closeModal={closeModal} />}
      <div className='home'>
        <div className='btns' ref={btnRef}>
          <button
            onClick={handleClick('move')}
            className='waves-effect btn move graph-btn'
          >
            <i className='material-icons'>open_with</i>
          </button>
          <button
            onClick={handleClick('add')}
            className='waves-effect btn graph-btn active'
          >
            <i className='material-icons'>add</i>
            Добавить вершину
          </button>
          <button
            onClick={handleClick('connect')}
            className='waves-effect btn graph-btn'
          >
            <i className='material-icons'>power_input</i>
            Соединить вершины
          </button>
          <button
            onClick={handleClick('delete')}
            className='waves-effect btn graph-btn delete'
          >
            <i className='material-icons'>close</i>
            Удалить
          </button>
          <button
            onClick={handleClick('bfs dfs')}
            className='dropdown-trigger btn graph-btn'
            data-target='dropdown'
            ref={dropdownRef}
          >
            Алгоритмы<i className='material-icons right'>settings</i>
          </button>
          <ul id='dropdown' className='dropdown-content'>
            <li>
              <span onClick={handleClick('bfs')}>Поиск в ширину</span>
            </li>
            <li>
              <span onClick={handleClick('dfs')}>Поиск в глубину</span>
            </li>
          </ul>
          <button
            onClick={showModal}
            className='waves-effect btn graph-btn save'
          >
            <i className='material-icons'>save</i>
            Сохранить
          </button>
        </div>
        <Canvas btnType={btnType} />
      </div>
    </div>
  );
};

export default Home;
