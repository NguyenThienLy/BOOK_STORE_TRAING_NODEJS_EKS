import { Action, createReducer, on } from '@ngrx/store';

import { EPublishingActions, PublishingActions } from '../actions/publishing';
import { initialPublishingState, IPublishingState } from '../state/publishing';

export const publishingReducers = (
  state = initialPublishingState,
  action: PublishingActions
): IPublishingState => {
  
  switch (action.type) {
    case EPublishingActions.GetListSuccess: {
      return {
        ...state,
        publishings: action.payload
      };
    }

    default:
      return state;
  }
};
