const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our Booking model
class Booking extends Model {}

//TODO: Method to calculate payment total - daily_rate * no. of days

// create fields/columns for Booking model
Booking.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    end_date:  {
        type: DataTypes.DATEONLY,
        allowNull: true
    },
    payment_total: {
      type: DataTypes.DECIMAL(8, 2),
      allowNull: false,
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      }
    },
    customer_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'user',
          key: 'id',
          unique: false
        }
      },

  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'booking'
  }
);

module.exports = Booking;
