const { User } = require("../models");

const userdata = [
  {
    first_name: "Sal",
    last_name: "Pepper",
    email: "sal@hotmail.com",
    address: "104 Arden St, Coogee NSW 2034",
    password: "password12345",
  },
  {
    first_name: "Lern",
    last_name: "Antino",
    email: "lernantino@gmail.com",
    address: "4 Prince St, Randwick NSW 2031",
    password: "password12345",
  },
  {
    first_name: "Amiko",
    last_name: "Brief",
    email: "amiko2k20@aol.com",
    address: "25 Arnold St, Queens Park NSW 2022",
    password: "password12345",
  },
  {
    first_name: "Jake",
    last_name: "Jordan",
    email: "jordan99@msn.com",
    address: "36 Edward St, Woollahra NSW 2025",
    password: "password12345",
  },
  {
    first_name: "Blake",
    last_name: "Seven",
    email: "the_blake@yahoo.com",
    address: "62 Wolli St, Kingsgrove NSW 2208",
    password: "password12345",
  },
  {
    first_name: "James",
    last_name: "Peach",
    email: "giant@gmail.com",
    address: "86 Portland Cres, Maroubra NSW 2035",
    password: "password12345",
  },
  {
    first_name: "Jack",
    last_name: "Black",
    email: "blackjack@hotmail.com",
    address: "19 Nagle Ave, Maroubra NSW 2035",
    password: "password12345",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
