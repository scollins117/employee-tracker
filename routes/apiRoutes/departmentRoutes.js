const express = require('express');
const router = express.Router();
const db = require('../../db/connection');

// get all employees
router.get('/', (req, res) => {
    User.findAll({})
      .then(dbUserData => res.json(dbUserData))
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });

module.exports = router;