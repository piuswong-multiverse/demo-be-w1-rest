const express = require('express');
const router = express.Router();

// bundle routers together; could also do: 
// const showsRouter = require('./shows');
// router.use('/shows', showsRouter); 

router.use('/dogs', require('./dogs'));
router.use('/shows', require('./shows'));
router.use('/pokemon', require('./pokemon'));
router.use('/trainers', require('./trainers'));

module.exports = router;