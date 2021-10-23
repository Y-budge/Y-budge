const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
var Twitter = require('twitter');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const plaidRouter = require('./routes/plaid');
const logRouter = require('./routes/log')

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
  client.post('statuses/update', {status: 'Calhacktest3'},  function(error, tweet, response) {
    if(error) throw error;
    console.log(tweet);  // Tweet body.
    console.log(response);  // Raw response object.
  })

});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
