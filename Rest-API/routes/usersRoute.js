const express = require('express');
const User = require('../models/User');
const router = express.Router();

/*
    .get
    returns users that created profiles in the database
*/
router.get('/', async (req,res) => {
    try{
        const LoggedUsers = await User.find();
        res.json(LoggedUsers);

    }catch(err){
        res.json({message:err});
    }
});
/*
    .post - adds researcher to the database
    return - nothing
*/
router.post('/', async (req, res) => {
    const user = new User({
        fullName: req.body.fullName, email: req.body.email, password: req.body.password
    });
    try{
        const savedUser = await user.save();
        res.json(savedUser);
    }catch(err) {
        res.json({ message: err});
    }
});

//Specific post
router.get('/:userId', async (req, res) => {
    try{
        const user = await User.findById(req.params.userId);
        res.json(user);
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;