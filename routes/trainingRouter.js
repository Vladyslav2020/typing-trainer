const { Router } = require("express");
const config = require("config");
const Training = require("../models/Training");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const router = Router();

router.post('/add', async (req, res) => {
    try{
        const { password } = req.body;
        if (password !== config.get('adminPassword')){
            return res.status(400).json({message: "Invalid data"});
        }
        const { number, title, text, numberPossibleErrors } = req.body;
        const result = await Training.findOne({number});
        if (result){
            return res.status(400).json({message: "This training already exists"});
        }
        if (!number || !title || !text){
            return res.status(400).json({message: "Fields for creating new training haven't to be empty"})
        }
        const newTraining = new Training({
            number,
            title,
            text,
            numberPossibleErrors
        });
        await newTraining.save();
        res.status(200).json({message: "New training added"});
    }
    catch(err){
        res.status(500).json({message: 'Server error'});
        console.log("Training router(add) error:", err.message);
    }
});

router.get('/get', auth, async(req, res) => {
    try{
        const number = req.query.number;
        const user = await User.findOne({_id: req.user.userId});
        if (user.numberCompletedTrainings + 1 >= number){
            const training = await Training.findOne({number});
            if (!training){
                return res.status(400).json({message: "Invalid training number"});
            }
            return res.status(200).json({message: {
                number: training.number, 
                title: training.title, 
                text: training.text, 
                numberPossibleErrors: training.numberPossibleErrors
            }});
        }
        res.status(400).json({message: "Unattainable training"});
    }
    catch(err){
        res.status(500).json({message: "Server error"});
        console.log("Training router(get) error:", err.message);
    }
})

module.exports = router;