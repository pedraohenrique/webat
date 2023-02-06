const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

// import routes
const quoteRoutes = require('./routes/quote');

// database
const sequelize = require('./util/database');

// app
const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

const port = process.env.PORT || 8000;

// routes
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to We Bat API.' });
});
app.use(quoteRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
