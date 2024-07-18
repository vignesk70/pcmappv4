import { DataTypes } from 'sequelize';
import {sequelize} from '../db';

const Cars = sequelize.define('pcmappv2_car', {
    car_reg_no: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      car_model: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      car_primary_sec: {
        type: DataTypes.SMALLINT,
        allowNull: false,
      },
      car_status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      member_id_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

},{
    tableName:'pcmappv2_car'
})
export {Cars}