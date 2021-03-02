const { Route } = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult  } = require('express-validator');

const router = Route();

router.post('/register',
    [
        check('name', 'Too short name').notEmpty().isLength({min: 3}),
        check('name', 'Too long name').isLength({max: 50}),
        check('email', 'Incorrect email').isEmail(),
        check('password', 'Too short password').isLength({min: 6}),
        check('password', 'Too long password').isLength({max: 50})
    ],
    async(req, res) => {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Incorrect data"});
            }
            const {name, email, password} = req.body;
            const candidat = await User.findOne({email});
            if (candidat){
                return res.status(400).json({message: 'This user already exists'});
            }
            const hashedPassword = await bcrypt.hash(password, 12);
            const newUser = new User({name, email, password: hashedPassword});
            await newUser.save();
            json.status(200).json({message: "New user saved"});
        }
        catch(err){
            res.status(500).json({message: "Server error"});
            console.log("Server error", err.message);
        }
});


router.post('/login', 
    [
        check('email', 'Incorrect email').normalizeEmail().isEmail(),
        check('password', 'Incorrect password').exists()
    ],
    async(req, res) => {
        try{
            const errors = validationResult(req);
            if (!errors.isEmpty()){
                return res.status(400).json({message: "Incorrect data"});
            }
            const {email, password} = req.body;
            const user = await User.findOne({email});
            const result = await bcrypt.compare(password, user.password);
            if (!result){
                return res.status(400).json({message: "Incorrect email or password, please try again"});
            }
            const token = jwt.sign({userId: user.id}, config.get('jwtSecretKey'), {expiresIn: '2h'});
            res.status(200).json({message: {token, id: user.id, name: user.name}});
        }
        catch(err){
            res.status(500).json({message: "Server error"});
            console.log("Server error", err.message);
        }
});


module.exports = router;