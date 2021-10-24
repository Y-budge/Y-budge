const express = require('express');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const session = require('express-session');
const axios = require('axios');
const MongoStore = require('connect-mongo')(session);
var Twitter = require('twitter');

require('dotenv').config();
require('./config/passport')(passport);

//connecting db
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const plaidRouter = require('./routes/plaid');
const logRouter = require('./routes/log');
const tellerRouter = require('./routes/teller');

app.use(
  session({
    secret: 'the ultimate secret',
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use('/plaid', plaidRouter);
app.use('/signup', logRouter);

app.post('/twitter', (req, res) => {
  var client = new Twitter({
    consumer_key: '3sUMQK8IsHmeK24zgb968UTOf',
    consumer_secret: 'doJKN1SzcT7jjRRxQFHVmNfLzcqSCempx5rblakdqoJJiEiLbF',
    access_token_key: '975552453121896448-ZNEZ3Cv0xmYggMwZB5pfLOt6lWUOfNB',
    access_token_secret: 'sNztcupQlVhPyIakBqhCeI7xptJUS3onXLg4l4b05zP2K',
  })
  
  var params = {screen_name: "litecoin_report"};
  client.post('statuses/update', {status: 'Calhacktest8'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  })

});

app.get('/auth/twitter',
  passport.authenticate('twitter', {scope: ['profile']}));

app.get('/auth/twitter/callback',
  passport.authenticate('twitter', { failureRedirect: 'https://ybudge.herokuapp.com:3000/login'}),
  function(req, res) {
    console.log('hi');
    res.redirect('https://ybudge.herokuapp.com:3000/');
});

app.get('/logout', (req, res) => {
  req.logout()
  res.redirect('https://ybudge.herokuapp.com:3000/')
})

app.get('/login/:id', function(req, res) {
    res.redirect('https://ybudge.herokuapp.com:3000/');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
