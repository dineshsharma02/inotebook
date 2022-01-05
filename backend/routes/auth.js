const express = require('express');
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router();
router.post('/',[
    body('name',"Enter a valid name").isLength({ min: 5 }),
    body('email',"Enter a valid email").isEmail(),
    body('password',"Enter a valid password with length more than 5").isLength({ min: 5 }),
],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    

    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
      }).then(user => res.json(user))
      .catch(err=>{console.log(err)
    res.json({
        error:'please enter unique value for email',message:err.message
    })})
})

module.exports = router