import { createSelector } from 'reselect';
import { TGraphState } from '../../interfaces/graphs';

const graphState = (state: TGraphState) => state.graphState;

export const selectIsLoading = createSelector(
  graphState,
  state => state.isLoading
);
export const selectLinks = createSelector(graphState, state => state.links);
export const selectGraphs = createSelector(
  graphState,
  state => state.graphNames
);
export const selectVertics = createSelector(graphState, state => state.vertics);
