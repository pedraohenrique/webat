import {
  CREATE_QUOTE,
  RETRIEVE_QUOTES,
  READ_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
} from '../actions/types';

const initialState = { quotes: [], quote: {} };

function quoteReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case CREATE_QUOTE:
      return { quotes: [payload, ...state.quotes] };

    case RETRIEVE_QUOTES:
      return { quotes: payload };

    case READ_QUOTE:
      return { ...state, quote: payload };

    case UPDATE_QUOTE:
      return state.quotes.map((quote) => {
        if (quote.id === payload.id) {
          return {
            ...quote,
            ...payload,
          };
        } else {
          return quote;
        }
      });

    case DELETE_QUOTE:
      return state.filter(({ id }) => id !== payload.id);

    default:
      return state;
  }
}

export default quoteReducer;
