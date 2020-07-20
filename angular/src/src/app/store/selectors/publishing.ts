import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app';
import { IPublishingState } from '../state/publishing';

const selectPublishings = (state: IAppState) => state.publishings;

export const selectPublishingList = createSelector(
  selectPublishings,
  (state: IPublishingState) => state.publishings
);
