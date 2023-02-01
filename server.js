const express = require('express');
const app = express();
const router = require('./routes/index');
const { seedAndCheck } = require('./db/seed/seed');

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/api', router);

const port = 3000;
app.listen(port, () => {
    seedAndCheck(); // resets database
    console.log(`Server live at http://localhost:${port}`)
});