import { Dispatch } from 'redux';
import { connectVerticAction } from '../../../redux/actions/graphs';
import { IVertic } from '../../../interfaces/IVertic';

export const connect = (vertics: IVertic[]) => {
  const [firstVert, secondVert] = vertics.reduce(
    (toConnectVertics: IVertic[], vertic: IVertic) => {
      if (vertic.isSelectedFirst || vertic.isSelectedSecond) {
        toConnectVertics.push(vertic);
      }
      return toConnectVertics;
    },
    []
  );
  return [firstVert.num, secondVert.num];
};

export const connectVertic = (vertics: IVertic[], links: number[][]) => {
  const [firstVert, secondVert] = connect(vertics);
  if (
    !links.some(
      ([first, second]) =>
        (first === firstVert && second === secondVert) ||
        (first === secondVert && second === firstVert)
    )
  ) {
    return [firstVert, secondVert];
  }
};
