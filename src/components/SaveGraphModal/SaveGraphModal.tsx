import React from 'react';
import { useDispatch } from 'react-redux';
import './SaveGraphModal.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { saveGraph } from '../../redux/thunk/graphs';

const SaveGraphModal: React.FC = () => {
  const dispatch = useDispatch();
  const closeModal = () => {
    document.querySelector('.modal_popup')!.classList.remove('showModal');
  };
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const pngURL = canvas.toDataURL();
    const { graphname } = event.target as HTMLInputElement & {
      graphname: { value: string };
    };
    dispatch(saveGraph(pngURL, graphname.value));
  };
  return (
    <div className='modal_popup'>
      <div className='modal_window'>
        <div className='close_btn'>
          <i className='material-icons' onClick={closeModal}>
            close
          </i>
        </div>
        <form onSubmit={handleSubmit}>
          <Input
            type='text'
            name='graphname'
            placeholder='Type name'
            label='Graph name'
          />
          <Button text='save' className='btn cyan lighten-3 z-depth-0' />
        </form>
      </div>
    </div>
  );
};

export default SaveGraphModal;
