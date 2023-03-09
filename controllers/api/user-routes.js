const router = require('express').Router();
const { User } = require('../../models');

// CREATE new user
router.post('/', async (req, res) => {
  try {
    const dbUserData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      address: req.body.address,
      password: req.body.password,
      
    });

    req.session.save(() => {
      req.session.loggedIn = true;

      res.status(200).json(dbUserData);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;

      res
        .status(200)
        .json({ user: dbUserData, message: 'You are now logged in!' });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Logout
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});


// <<FOR MAPS>>
//GET all users
router.get("/user", async (req, res) => {
  try {
    const dbUserData = await User.findAll({
      include: [{ model: Category}],
    });
    const users = dbUserData.map((user) =>
      user.get({ plain: true })
    );
    return users;
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
router.get("/user", async (req, res) => {
  try {
    const dbUserID = await User.findAll({
      attributes: ['id', 'latlong'],
    });
    return dbUserID;
    
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



module.exports = router;