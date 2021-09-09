import { createSelector } from 'reselect';

const graphState = (state: any) => state.graphState;

export const selectLinks = createSelector(graphState, state => state.links);
export const selectVertics = createSelector(graphState, state => state.vertics);

 
