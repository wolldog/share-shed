const router = require('express').Router();
const { Booking } = require('../../models');
const { User } = require('../../models');

// Create new booking 

router.post('/', async (req, res) => {
    // if (req.session.loggedIn) {
        console.log(req.body)
        try {
            const dbBookingData = await Booking.create({
            start_date: req.body.startDate,
            end_date: req.body.endDate,
            payment_total: req.body.paymentTotalDec,
            product_id: req.body.productID,
            customer_id: req.session.userID || 1,
            });
        
            res.status(200).json(dbBookingData);
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    // }
    
});

// Get latest booking (for confirmation page) by getting all bookings, limiting to 1 result and ordering by ID in descending order

router.get('/', async (req, res) => {
    try {
      let dbSingleBooking = await Booking.findAll({
        limit: 1,
        // add include: [Product] to get product info
        // where: {
        //     id: ,
        // }
        order: [['id', 'DESC']],
    })
    // res.json(dbSingleBooking);
    // const singleBooking = dbSingleBooking.get({ plain: true });

    // res.status(200).json(singleBooking);
    // res.redirect('/');
    res.render("booking-conf", { dbSingleBooking });
    

    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }

  });

// // Show all bookings
// router.get('/', async (req, res) => {
//     try {
//         const dbBookingData = await Booking.findAll({
//             include: [
//                 {
//                     model: User,
//                     attributes: ['first_name', 'last_name'],
//                 },
//             ],
//         });
//         const bookings = dbBookingData.map((booking) =>
//             booking.get({ plain: true })
//         );
//         res.render('bookings', { bookings, loggedIn: req.session.loggedIn });
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

// // Delete booking by id
// router.delete('/booking/:id', async (req, res) => {
//     try {
//         const dbBookingData = await Booking.destroy({
//             where: {
//                 id: req.params.id,
//             },
//         });

//         if (!dbBookingData) {
//             res.status(404).json({ message: 'No booking found with this id!' });
//             return;
//         }

//         res.status(200).json(dbBookingData);
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;