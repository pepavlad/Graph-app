import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './SaveGraphModal.scss';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { selectVertics, selectLinks } from '../../redux/selectors/graph';
import { saveGraph } from '../../redux/thunk/graphs';

type SaveGraphModalProp = {
  closeModal: () => void;
};
const SaveGraphModal = React.memo(({ closeModal }: SaveGraphModalProp) => {
  const dispatch = useDispatch();
  const vertics = useSelector(selectVertics);
  const links = useSelector(selectLinks);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const { graphname } = event.target as HTMLInputElement & {
      graphname: { value: string };
    };
    dispatch(saveGraph(vertics, links, graphname.value));
    closeModal();
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
});

export default SaveGraphModal;
