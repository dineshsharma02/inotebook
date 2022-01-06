const express = require('express');
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const router = express.Router();
router.post('/createuser',[
    //if there are errors return bad request and the errors 
    body('name',"Enter a valid name").isLength({ min: 5 }),
    body('email',"Enter a valid email").isEmail(),
    body('password',"Enter a valid password with length more than 5").isLength({ min: 5 }),
],async (req,res)=>{
  //returning the array of the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //checking if the user with email already exists
    let user = await User.findOne({email:req.body.email});
    if (user){
      return res.status(400).json({"error":"the user already exists with this email address."})
    }
    

    user = await User.create({
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