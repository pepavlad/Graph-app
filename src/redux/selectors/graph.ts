import { createSelector } from 'reselect';

const graphState = (state: any) => state.graphState;

export const selectLinks = createSelector(graphState, state => state.links);
export const selectGraphs = createSelector(graphState, state => state.graphNames);
export const selectImgURL = createSelector(graphState, state => state.imgURL);
export const selectVertics = createSelector(graphState, state => state.vertics);

 
