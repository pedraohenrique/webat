import {
  CREATE_QUOTE,
  RETRIEVE_QUOTES,
  READ_QUOTE,
  UPDATE_QUOTE,
  DELETE_QUOTE,
} from './types';

import QuoteDataService from '../../services/QuoteService';

export const createQuote =
  (
    departureName,
    destinationName,
    departureDate,
    returnDate,
    travellers,
    transportation,
    contactInformation
  ) =>
  async (dispatch) => {
    try {
      const res = await QuoteDataService.create({
        departureName,
        destinationName,
        departureDate,
        returnDate,
        travellers,
        transportation,
        contactInformation,
      });

      dispatch({
        type: CREATE_QUOTE,
        payload: res.data,
      });

      return Promise.resolve(res.data);
    } catch (err) {
      return Promise.reject(err);
    }
  };

export const retrieveQuotes = () => async (dispatch) => {
  try {
    const res = await QuoteDataService.find();

    dispatch({
      type: RETRIEVE_QUOTES,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const getQuote = (id) => async (dispatch) => {
  try {
    const res = await QuoteDataService.get(id);

    dispatch({
      type: READ_QUOTE,
      payload: res.data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const updateQuote = (id, data) => async (dispatch) => {
  try {
    const res = await QuoteDataService.update(id, data);

    dispatch({
      type: UPDATE_QUOTE,
      payload: data,
    });

    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteQuote = (id) => async (dispatch) => {
  try {
    await QuoteDataService.remove(id);

    dispatch({
      type: DELETE_QUOTE,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
