import React from 'react';

const SavedGraphItem: React.FC = () => {
  return (
    <li className='graph_item'>
      Graph-1
      <div className='icons'>
        <i className='material-icons'>open_in_browser</i>
        <i className='material-icons'>delete</i>
      </div>
    </li>
  );
};

export default SavedGraphItem;
