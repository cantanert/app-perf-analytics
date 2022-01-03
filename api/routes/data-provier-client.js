const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'DATA PROVIDER CLIENT'
  })
});

module.exports = router;