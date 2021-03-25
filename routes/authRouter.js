const { Router } = require('express');
const config = require('config');
const { check, validationResult  } = require('express-validator');
const bcrypt = require('bcrypt');
const User = require('../models/User');
const TrainingUser = require("../models/TrainingUser");
const jwt = require('jsonwebtoken');

const router = Router();

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

            const newUser = new User({
                name, 
                email, 
                password: hashedPassword, 
                registerDate: (new Date).toISOString(),
                numberCompletedTrainings: 0, 
                numberFriends: 0, 
                rank: "beginner", 
                friendList: [], 
                trainingsList: [], 
                speedTypingRecord: 0
            });
            await newUser.save();
            const trainingsList = [];
            for(let i = 0; i < 10; i++){
                let training = new TrainingUser({
                    userId: newUser._id,
                    trainingNumber: i + 1,
                    completed: false,
                    numberAttempts: 0,
                    spendedTime: 0,
                    speed: 0,
                    numberStars: 0
                });
                await training.save();
                trainingsList.push(training.id);
            }
            await User.updateOne({_id: newUser._id}, {trainingsList});
            res.status(200).json({message: "New user saved"});
        }
        catch(err){
            res.status(500).json({message: "Server error"});
            console.log("Auth register error:", err.message);
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
            res.status(200).json({
                message: {
                    token, 
                    id: user.id, 
                    name: user.name, 
                    email: user.email, 
                    registerDate: user.registerDate,
                    numberCompletedTrainings: user.numberCompletedTrainings,
                    numberFriends: user.numberFriends,
                    rank: user.rank,
                    friendList: user.friendList,
                    speedTypingRecord: user.speedTypingRecord
                }
            });
        }
        catch(err){
            res.status(500).json({message: "Server error"});
            console.log("Auth login router error:", err.message);
        }
});

module.exports = router;