import firebase from 'firebase';
import { Dispatch } from 'redux';
import * as GraphService from '../../services/graphs';
import { downloadGraphAction, getAllGraphsAction } from '../actions/graphs';

export const saveGraph = (pngURL: string, graphname: string) => {
  return () => {
    GraphService.saveGraph(pngURL, graphname)!
      .then(() => {
        document.querySelector('.modal_popup')!.classList.remove('showModal');
      })
      .catch(error => window.alert(error.message));
  };
};

export const downloadGraph = (graphname: string) => {
  return (dispatch: Dispatch) => {
    GraphService.downloadGraph(graphname)!
      .then(res => {
        dispatch(downloadGraphAction(res));
      })
      .catch(error => window.alert(error.message));
  };
};

export const getAllGraphs = () => {
  return (dispatch: Dispatch) => {
    GraphService.getAllGraphs()!.then(result => {
      const graphNames: string[] = [];
      result.items.forEach(fileRef => {
        graphNames.push(fileRef.name);
      });
      dispatch(getAllGraphsAction(graphNames));
    });
  };
};
