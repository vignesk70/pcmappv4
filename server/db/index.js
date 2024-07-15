// const { Sequelize } = require('sequelize');
import { Sequelize } from 'sequelize'


const sequelize = new Sequelize('pcmappv3', process.env.PG_USER, process.env.PG_PASSWORD, {
  host: process.env.PG_HOST, //'0.0.0.0',
  port: process.env.PG_PORT, //54320,
  dialect: 'postgres',
  define: {
    freezeTableName: true,
  },
});

export  {sequelize};