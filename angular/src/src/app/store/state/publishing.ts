import { IPublishing } from '../../models/publishing';

export interface IPublishingState {
    publishings: IPublishing[];
}

export const initialPublishingState: IPublishingState = {
    publishings: null,
};
