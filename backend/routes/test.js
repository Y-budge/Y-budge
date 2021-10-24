const router = require('express').Router();

router.route('/').get((req, res) => {
  res.redirect('http://localhost:3000');
});

module.exports = router;