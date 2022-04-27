import firebase from 'firebase';
import React from 'react';
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
    GraphService.saveGraph(vertics, links, graphName)!;
  };
};

export const downloadGraph = (
  graphname: string,
  history: {
    push(url: string): void;
  }
) => {
  return (dispatch: Dispatch) => {
    GraphService.downloadGraph(graphname)?.on('value', snapshot => {
      const data = snapshot.val();
      if (data) {
        dispatch(
          downloadGraphAction({ vertics: data.vertics, links: data.links })
        );
        history.push('/home');
      }
    });
  };
};

export const deleteGraph = (graphname: string) => {
  return (dispatch: Dispatch) => {
    GraphService.deleteGraph(graphname)?.then(() => {
      dispatch(deleteGraphAction(graphname));
    });
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
