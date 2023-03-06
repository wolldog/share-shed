const { Model, DataTypes, DECIMAL } = require("sequelize");
const sequelize = require("../config/connection");

// create our Product model
class Product extends Model {}

// create fields/columns for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_make: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    product_model: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    daily_rate: {
      type: DataTypes.DECIMAL(6, 2),
      allowNull: false,
    },
    user_manual: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    //image currently hard coded
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "hand-tools.jpeg"
    },
    //foreignKey references 'User' table
    owner_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    //foreignKey references 'Category' table
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
