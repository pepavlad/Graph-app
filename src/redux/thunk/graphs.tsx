import { Dispatch } from 'redux';
import * as GraphService from '../../services/graphs';
import { IVertic } from '../../interfaces/IVertic';

const saveGraph = (
  vertics: IVertic[],
  links: number[][],
  graphname: string
) => {
  return () => {
    GraphService.saveGraph(vertics, links, graphname)!
      .then(() => {
        window.alert(`${graphname} saved`);
      })
      .catch(error => window.alert(error.message));
  };
};

export default saveGraph;
