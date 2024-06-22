const router = require('express').Router()
const authRoutes = require('./auth.routes');
const petRoutes = require('./pet.routes.js');
const hostelRoutes = require ('./hostel.routes')
const adoptionRoute = require ('./adoption.routes.js')

router.use('/auth', authRoutes);
router.use('/pet', petRoutes);
router.use('/hostel', hostelRoutes)
router.use('/adoption', adoptionRoute)

module.exports = router;