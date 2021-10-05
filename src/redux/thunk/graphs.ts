import firebase from 'firebase';
import { Dispatch } from 'redux';
import * as GraphService from '../../services/graphs';
import {
  downloadGraphAction,
  getAllGraphsAction,
  setLoadingAction,
  deleteGraphAction,
} from '../actions/graphs';
import { IVertic } from '../../interfaces/IVertic';

export const saveGraph = (
  vertics: IVertic[],
  links: number[][],
  graphName: string
) => {
  return () => {
    GraphService.saveGraph(vertics, links, graphName)!.then(() => {
      document.querySelector('.modal_popup')!.classList.remove('showModal');
    });
  };
};

export const downloadGraph = (graphname: string) => {
  return (dispatch: Dispatch) => {
    GraphService.downloadGraph(graphname)!.on('value', snapshot => {
      const data = snapshot.val();
      dispatch(
        downloadGraphAction({ vertics: data.vertics, links: data.links })
      );
    });
  };
};

export const deleteGraph = (graphname: string) => {
  return (dispatch: Dispatch) => {
    GraphService.deleteGraph(graphname);
    dispatch(deleteGraphAction(graphname));
  };
};

export const getAllGraphs = () => {
  return (dispatch: Dispatch) => {
    dispatch(setLoadingAction(true));
    GraphService.getAllGraphs()!.on('value', result => {
      if (result.val()) {
        dispatch(getAllGraphsAction(Object.keys(result.val())));
      }
      dispatch(setLoadingAction(false));
    });
  };
};
