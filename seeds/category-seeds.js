const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Power Tools',
  },
  {
    category_name: 'Gardening',
  },
  {
    category_name: 'Cleaning',
  },
  {
    category_name: 'Trailers',
  },
  {
    category_name: 'General',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
