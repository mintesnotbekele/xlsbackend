
const Sequelize = require('sequelize');
const db = require('../config/database');
  
    const uploadModel =  db.define("upload", {
      id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
      itemno: {
        type: Sequelize.STRING,
        defaultValue: "10",
      },
      description: {
        type: Sequelize.STRING,
      },
      unit: {
        type: Sequelize.STRING,
      },
      qty: {
        type: Sequelize.STRING,
      },
      rate: {
          type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.STRING,
      },
    },
    )
  module.exports = uploadModel;
  