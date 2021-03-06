const express = require('express');
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const JWT_SECRET = "Thisisasecrettoken"
const fetchuser = require('../middleware/fetchuser')
const router = express.Router();


//route1 - creating new user
router.post('/createuser',[
    //if there are errors return bad request and the errors 
    body('name',"Enter a valid name").isLength({ min: 5 }),
    body('email',"Enter a valid email").isEmail(),
    body('password',"Enter a valid password with length more than 5").isLength({ min: 5 }),
],async (req,res)=>{
  //returning the array of the errors
    let success = false
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    //checking if the user with email already exists
    let user = await User.findOne({email:req.body.email});
  try{
    if (user){
      return res.status(400).json({"error":"the user already exists with this email address.",success})
    }
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt)
    //create a new user
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data={
        user:{
          id:user.id
        }
      }
      success = true
      const authtoken = jwt.sign(data,JWT_SECRET)

      res.json({authtoken,success})
      // .then(user => res.json(user))
    }
    catch(error){
      console.error(error.message);
      res.status(500).send("some error occured");
      
    }
})


//route2 - logging in user
router.post('/login',[
  //if there are errors return bad request and the errors 
  body('email',"Enter a valid email").isEmail(),
  body('password',"Password cannot be blank").exists(),
],async (req,res)=>{
//returning the array of the errors
  let success = false
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ success,errors: errors.array() });
  }
  const {email,password} = req.body;
  //checking if the user with email already exists
try{
  let user = await User.findOne({email:email});
  if (!user){
    return res.status(400).json({success,"error":"Please enter valid credentials"})
  }
  const passwordComapare = await bcrypt.compare(password,user.password);
  if (!passwordComapare){
    return res.status(400).json({"error":"Please enter valid credentials","success":success})
  }
    const data={
      user:{
        id:user.id
      }
    }
    const authtoken = jwt.sign(data,JWT_SECRET)
    success = true
    res.json({authtoken,success})
  }
  catch(error){
    console.error(error.message);
    res.status(500).send("Internal server occured");
    
  }
})
//route3 - getting user token
router.post('/getuser',fetchuser,async (req,res)=>{
  try {
    userId = req.user.id
    const user = await User.findById(userId).select("-password")
    res.send(user)
  } catch(error){
    console.error(error.message);
    res.status(500).send("Internal server occured");
    
  }
})


module.exports = router