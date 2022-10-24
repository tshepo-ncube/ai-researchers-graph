const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

//Now we have the ability to create routes, SERVER CREATED

//Import routes
const postsRoute = require('./routes/researchers');   //18:00

//middlewares
app.use(cors());
app.use(bodyParser.json());
app.use('/researchers', postsRoute);  //Anything going to post make sure to use this post route

//ROUTES
app.get('/', (req,res) => {
    res.send('We are on home');
});
app.get('/researchers', (req,res) => {
    res.send('We are on posts');
});

//Connect  to DB
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true},
    () => 
    console.log('Connected to DB!')
);
//lISTENING TO THE SERVER
app.listen(3000);

