// const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize'

const sequelize = new Sequelize('pcmappv3', 'postgres', 'my_password', {
  host: '0.0.0.0',
  port: 54320,
  dialect: 'postgres',
  define: {
    freezeTableName: true,
  },
});

export  {sequelize};