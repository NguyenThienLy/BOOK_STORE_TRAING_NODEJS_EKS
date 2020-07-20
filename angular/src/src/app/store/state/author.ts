import { IAuthor } from '../../models/author';

export interface IAuthorState {
    authors: IAuthor[];
    booksSameAuthor: IAuthor[];
}

export const initialAuthorState: IAuthorState = {
    authors: null,
    booksSameAuthor: null
};
