// Create new booking 

router.post('/product/:id', async (req, res) => {
    try {
        const dbBookingData = await Booking.create({
        start_date: req.body.startDate,
        end_date: req.body.endDate,
        payment_total: req.body.dailyRate,
        product_id: req.body.productID,
        customer_id: req.session.user_id,
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