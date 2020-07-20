import { EBookActions, BookActions, CreateFail } from './../actions/book';
import { initialBookState, IBookState } from '../state/book';

export const bookReducers = (
  state = initialBookState,
  action: BookActions
): IBookState => {
  switch (action.type) {
    case EBookActions.GetList: {
      return {
        ...state,
        books: null,
        status: 'loading'
      };
    }

    case EBookActions.GetListSuccess: {
      return {
        ...state,
        books: action.payload,
        status: 'loaded'
      };
    }

    case EBookActions.GetListFail: {
      return {
        ...state,
        status: 'loaded'
      };
    }

    case EBookActions.GetItemSuccess: {
      return {
        ...state,
        selectedBook: action.payload
      };
    }

    case EBookActions.Create: {
      return {
        ...state,
        books: null,
        newBook: null,
        isCreateSucess: null,
        status: 'loading'
      };
    }

    case EBookActions.CreateSuccess: {
      return {
        ...state,
        books: [action.payload].concat(state.books),
        newBook: action.payload,
        isCreateSucess: true,
        status: 'loaded'
      };
    }

    case EBookActions.CreateFail: {
      return {
        ...state,
        books: state.books,
        newBook: null,
        isCreateSucess: false,
        status: 'loaded'
      };
    }

    case EBookActions.DeleteSuccess: {
      const index = state.books.findIndex(e => e._id === action.payload);

      // splice change state, not use
      if (index > -1) {
        return {
          ...state,
          books: [...state.books.slice(0, index),
          ...state.books.slice(index + 1)]
        };
      }

      return state;
    }

    default:
      return state;
  }
};
