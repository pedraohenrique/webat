import http from './http-common';

const find = (search) => {
  return http.get('/quotes', { params: search });
};

const get = (id) => {
  return http.get(`/quotes/${id}`);
};

const create = (data) => {
  return http.post('/quotes', data);
};

const update = (id, data) => {
  return http.put(`/quotes/${id}`, data);
};

const remove = (id) => {
  return http.delete(`/quotes/${id}`);
};

const QuoteService = {
  find,
  get,
  create,
  update,
  remove,
};

export default QuoteService;
