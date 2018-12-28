require('./models/Registration');
require('./models/Games');
const app = require('./app');
require('dotenv').config();

const mongoose = require('mongoose');

console.log('db:', process.env.DATABASE);

mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise;
mongoose.connection
    .on('connected', () => {
        console.log(`Mongoose connection open on ${process.env.DATABASE}`);
    })
    .on('error', (err) => {
       console.log(`Connection error ${err.message}`);
    });

const server = app.listen(3000, () => {
    console.log(`Express is running on port ${server.address().port}`);
});

