const router = require('express').Router();
const sequelize = require('../config/connection');
const { Game, Player, Tag } = require('../models');

// Get all ..

//Sends viewer to home page where they are asked to login or signup
router.get('/', async (req,res) => {
    try{
        //renders hompage.handlebars
        res.render('chatroom');
    } catch (err) {
        console.log(err);
        res.status(404).json(err);
    }
});

// Login

//
router.get('/', function(req, res) {
    res.render('homepage')
});

router.get('/signup', function(req, res) {
    res.render('signup')
});




module.exports = router;

