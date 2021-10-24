const router = require('express').Router();
// let Log = require('../models/log.model');

router.route('/login/:id').get((req, res) => {
    console.log(req.params.id);

    // res.redirect('https://api.teller.io/accounts/test_token_ppngc7nfpjb5w/transactions');
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const newUser = new Log({username, password});

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;