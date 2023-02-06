const express = require('express');
const router = express.Router();

const {
  create,
  read,
  update,
  remove,
  list,
  quoteById,
} = require('../controllers/quote');

router.post('/quotes', create);
router.get('/quotes/:quoteId', read);
router.put('/quotes/:quoteId', update);
router.delete('/quotes/:quoteId', remove);
router.get('/quotes', list);

router.param('quoteId', quoteById);

module.exports = router;
