const express = require('express');
const router = express.Router();

// bundle routers together; could also do: 
// const showsRouter = require('./shows');
// router.use('/shows', showsRouter); 

router.use('/dog', require('./dogs'));
router.use('/getshowsfrommodel', require('./shows'));
router.use('/POKEMON', require('./pokemon'));
router.use('/trainer', require('./trainers'));

module.exports = router;