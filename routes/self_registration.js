const express = require('express');
const router = express.Router();


router.get('/self_registration', async (req, res) => {
  res.render('self_registration');
});

module.exports = router; 

