// const { DataTypes } = require('sequelize');
import { DataTypes } from 'sequelize';
import {sequelize} from '../db';
// const sequelize = require('../db/sequelize');

// sequelize.authenticate();
try {
   sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
// export const sequelize.define('pcmappv2_member', {
//   name:{
//     type: DataTypes.STRING,
//     allowNull: false
//   }
// })
const Member = sequelize.define('pcmappv2_member', {
  member_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  member_email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    isEmail: true,
  },
  member_phone:{
    type: DataTypes.STRING(20),
    allowNull: false,    
  },
  member_since: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  member_birthdate: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  member_address_state: {
    type:DataTypes.STRING,
    allowNull: true,
  },
  member_address_postcode: {
    type:DataTypes.STRING,
    allowNull: true,
  },
  member_on_chat: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  member_source: {
    type: DataTypes.STRING(2),
    allowNull: true,
  },
  member_expiry_date: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  member_pdpa_accepted: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  member_status:  {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  owner_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

},{
  tableName: 'pcmappv2_member',
});


export {Member} 