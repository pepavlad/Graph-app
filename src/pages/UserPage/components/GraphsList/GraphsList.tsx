import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { downloadGraph, deleteGraph } from '../../../../redux/thunk/graphs';
import { selectGraphs } from '../../../../redux/selectors/graph';

import './GraphsList.scss';

const GraphsList: React.FC = React.memo(() => {
  const dispatch = useDispatch();
  const history = useHistory();
  const graphs: string[] = useSelector(selectGraphs);
  const loadGraph = (event: React.MouseEvent) => {
    dispatch(downloadGraph((event.target as HTMLAnchorElement).id, history));
  };
  const delGraph = (event: React.MouseEvent) => {
    dispatch(deleteGraph((event.target as HTMLAnchorElement).id));
  };
  return (
    <div className='graphs'>
      <ul>
        {graphs.map(graphname => (
          <li className='graph_item' key={graphname}>
            {graphname}
            <div className='icons'>
              <i className='material-icons' onClick={loadGraph} id={graphname}>
                open_in_browser
              </i>
              <i className='material-icons' onClick={delGraph} id={graphname}>
                delete
              </i>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

export default GraphsList;
