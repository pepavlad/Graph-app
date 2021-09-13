import { Dispatch } from 'redux';
import { IVertic } from '../../../interfaces/IVertic';
import { connectVerticAction } from '../../../redux/actions/graphs';

const connect = (vertics: IVertic[]) => {
  const [firstVert] = vertics.filter(elem => elem.isSelectedFirst);
  const [secondVert] = vertics.filter(elem => elem.isSelectedSecond);
  return [firstVert.num, secondVert.num];
};

const connectVertic = (vertics: IVertic[], links: number[][]) => {
  return (dispatch: Dispatch) => {
    const [firstVert, secondVert] = connect(vertics);
    if (
      !links.some(
        ([first, second]) =>
          (first === firstVert && second === secondVert) ||
          (first === secondVert && second === firstVert)
      )
    ) {
      dispatch(connectVerticAction([firstVert, secondVert]));
    }
  };
};

export default connectVertic;
