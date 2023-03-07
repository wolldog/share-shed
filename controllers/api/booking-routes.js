// Create new booking 
// Need to get product ID from params and add to the booking
router.post('/product/booking', async (req, res) => {
    try {
        const dbBookingData = await Booking.create({
        user_id: req.session.user_id,
        start_date: req.body.start_date,
        end_date: req.body.end_date,
        location: req.body.location,
        price: req.body.price,
        description: req.body.description,
        });
    
        res.status(200).json(dbBookingData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Show all bookings
router.get('/', async (req, res) => {
    try {
        const dbBookingData = await Booking.findAll({
            include: [
                {
                    model: User,
                    attributes: ['first_name', 'last_name'],
                },
            ],
        });
        const bookings = dbBookingData.map((booking) =>
            booking.get({ plain: true })
        );
        res.render('bookings', { bookings, loggedIn: req.session.loggedIn });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Delete booking by id
router.delete('/booking/:id', async (req, res) => {
    try {
        const dbBookingData = await Booking.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!dbBookingData) {
            res.status(404).json({ message: 'No booking found with this id!' });
            return;
        }

        res.status(200).json(dbBookingData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});