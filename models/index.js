const Category = require("./Category");
const Product = require("./Product");
const User = require("./User");
const Booking = require("./Booking");

//***Category associations***

//Category has many Products 
Category.hasMany(Product);

//***Product associations***

//Product belongs to one Category
Product.belongsTo(Category, {
  foreignKey: 
    {name: "category_id",
    allowNull: false,
    onDelete: "RESTRICT",
    onUpdate: "CASCADE"
    }
});

//Product belongs to one User as 'owner'
Product.belongsTo(User, {
  foreignKey: 
    {name: "owner_id",
    allowNull: false,
    onDelete: "CASCADE",
    }
});
  
//Product has many bookings
Product.hasMany(Booking);

//***Booking assocations***

//Booking has one User as 'customer'
Booking.belongsTo(User, {
  foreignKey: 
    {name: "customer_id",
    allowNull: false,
    onDelete: "RESTRICT",
    }

});

//Booking has one product
Booking.belongsTo(Product, {
  foreignKey: 
    {allowNull: false,
    onDelete: "RESTRICT",
    }

});

//***User associations***

//User has many Products
User.hasMany(Product, {
  allowNull: true
  });

//User has many Bookings
User.hasMany(Booking, {
  allowNull: true 
});


module.exports = { Category, Product, User, Booking };
