const _ = require('lodash');
const Quote = require('../models/quote');

exports.quoteById = (req, res, next, id) => {
  Quote.findByPk(id, { include: [{ all: true }] })
    .then((data) => {
      if (!data) {
        return res.status(400).send({
          error: 'Quote not found!',
        });
      }
      req.quote = data;
      next();
    })
    .catch((err) => {
      return res.status(400).send({ error: err.message });
    });
};

exports.create = (req, res, next) => {
  const quote = new Quote(req.body);
  quote
    .save()
    .then((data) => {
      req.quote = data;
      res.json(data);
      next();
    })
    .catch((err) => {
      return res.status(400).send({ error: err.message });
    });
};

exports.read = (req, res, next) => {
  res.json(req.quote);
};

exports.update = (req, res, next) => {
  let quote = req.quote;
  quote = _.extend(quote, req.body);
  quote
    .save()
    .then((quote) => {
      return res.json(quote);
    })
    .catch((err) => {
      return res.status(400).send({ error: err.message });
    });
};

exports.remove = (req, res, next) => {
  const quote = req.quote;
  quote
    .destroy()
    .then((data) => {
      return res.json('Quote removed sucessfully.');
    })
    .catch((err) => {
      return res.status(400).send({ error: err.message });
    });
};

exports.list = (req, res, next) => {
  const { page, pageSize } = req.query;
  const limit = parseInt(pageSize) || 10;
  const offset = (page ? page - 1 : 0) * limit;

  Quote.findAndCountAll({
    include: [{ all: true }],
    order: [['id', 'DESC']],
    limit,
    offset,
  })
    .then((data) => {
      res.send(data.rows);
    })
    .catch((err) => {
      return res.status(400).send({ error: err.message });
    });
};
