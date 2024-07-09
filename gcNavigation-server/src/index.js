require('./models/User');

const express = require('express');
const mongoose = require('mongoose');

const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
// app.use(trackRoutes);

const mongoUri = 'mongodb+srv://admin:gcapp@users.hm7cysb.mongodb.net/?retryWrites=true&w=majority&appName=Users'

mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
    console.log('Connected to mongo instance')
})

mongoose.connection.on('error', err => {
    console.error('error with connection to mongo', err);
})
app.get('/', requireAuth, (req, res) => {
    res.send(`Your Email: ${req.user.email}`)
});

app.listen(3005, () => {
    console.log('Listening on port 3005')
})