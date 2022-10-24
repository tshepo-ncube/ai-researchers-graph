const express = require('express');
const Researcher = require('../models/Researcher');
const router = express.Router();
const Post = require('../models/Researcher')

/*
    .get
    returns everything in the database
*/
router.get('/', async (req,res) => {
    try{
        const researchers = await Researcher.find();
        res.json(researchers);

    }catch(err){
        res.json({message:err});
    }
});
/*
    .post - adds researcher to the database
    return - nothing
*/
router.post('/', async (req, res) => {
    const post = new Post({
        Surname: req.body.Surname, initials: req.body.initials, title: req.body.title, institution: req.body.institution,
        rating: req.body.rating, primary_field: req.body.primary_field,
        secondary_field: req.body.secondary_field, specialisation: req.body.specialisation
    });
    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err) {
        res.json({ message: err});
    }
});

//Specific post
router.get('/:postId', async (req, res) => {
    try{
        const post = await Researcher.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});

//Delete
router.delete('/:postId', async (req, res) => {
    const removedPost = await Researcher.remove({_id: req.params.postId});
});

//Update rating
router.patch('/:postId', async (req, res) => {
    try{
        const updatedPost = await Researcher.updateOne(
            {_id: req.params.postId},
            {$set: {rating: req.body.rating} });
    }catch(err){
        res.json({message: err});
    }
});

module.exports = router;