import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import M from 'materialize-css';
import './Home.scss';
import Canvas from '../../components/Canvas/Canvas';
import { selectImgURL } from '../../redux/selectors/graph';
import SaveGraphModal from '../../components/SaveGraphModal/SaveGraphModal';

const Home: React.FC = () => {
  const [btnType, setBtnType] = useState('add');
  const imgURL = useSelector(selectImgURL);
  useEffect(() => {
    const dropdowns = document.querySelectorAll('.dropdown-trigger');
    const options = {
      inDuration: 300,
      outDuration: 300,
      coverTrigger: false,
    };

    M.Dropdown.init(dropdowns, options);
  }, []);
  const showModal = () => {
    document.querySelector('.modal_popup')!.classList.add('showModal');
  };
  const handleClick = (type: string) => {
    return (event: React.MouseEvent) => {
      event.stopPropagation();
      if (!btnType.includes(type)) {
        document.querySelectorAll('.graph-btn').forEach(e => {
          e.classList.remove('active');
        });
        (event.currentTarget as HTMLAnchorElement).classList.add('active');
      }
      setBtnType(type);
    };
  };
  return (
    <div>
      <SaveGraphModal />
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
            onClick={handleClick('bfs dfs')}
            className='dropdown-trigger btn graph-btn'
            href='#'
            data-target='dropdown'
          >
            Алгоритмы<i className='material-icons right'>settings</i>
          </a>
          <ul id='dropdown' className='dropdown-content'>
            <li>
              <a onClick={handleClick('bfs')} href='#!'>
                Поиск в ширину
              </a>
            </li>
            <li>
              <a onClick={handleClick('dfs')} href='#!'>
                Поиск в глубину
              </a>
            </li>
          </ul>
          <a onClick={showModal} className='waves-effect btn graph-btn save'>
            <i className='material-icons'>save</i>
            Сохранить
          </a>
        </div>
        <Canvas btnType={btnType} imgURL={imgURL} />
      </div>
    </div>
  );
};

export default Home;
