import { createSelector } from 'reselect';
import { AppState } from '../reducers';

const graphState = (state: AppState) => state.graphState;

export const selectLinks = createSelector(graphState, state => state.links);
export const selectVertics = createSelector(graphState, state => state.vertics);

 
