const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Quote = sequelize.define('quotes', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  departureName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  destinationName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  departureDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  returnDate: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  travellers: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  transportation: Sequelize.STRING,
  contactInformation: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

module.exports = Quote;
