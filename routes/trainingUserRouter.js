const { Router } = require('express');
const auth = require("../middleware/authMiddleware");
const TrainingUser = require("../models/TrainingUser");
const User = require("../models/User");
const Training = require("../models/Training");

const router = Router();

router.get("/get", auth, async(req, res) => {
    try{
        const number = req.query.number;
        const data = await TrainingUser.findOne({userId: req.user.userId, trainingNumber: number});
        if (!data){
            return res.status(400).json({message: "Incorrect data"});
        }
        const trainingInfo = await Training.findOne({number: data.trainingNumber});
        const title = trainingInfo.title;
        res.status(200).json({message: {
            trainingNumber: data.trainingNumber,
            title,
            completed: data.completed,
            numberAttempts: data.numberAttempts,
            spendedTime: data.spendedTime,
            speed: data.speed,
            numberStars: data.numberStars
        }});
    }
    catch(err){
        res.status(500).json({message: "Server error"});
        console.log("Training user router (get) error:", err.message);
    }
});

router.post("/update", auth, async(req, res) => {
    try{
        const {completed, numberAttempts, spendedTime, speed, numberStars} = req.body;
        if ((!completed && completed !== false) || (!numberAttempts && numberAttempts !== 0) || 
            (!spendedTime && spendedTime !== 0) || (!speed && speed !== 0) || (!numberStars && numberStars !== 0)){
            return res.status(400).json({message: "Incorrect data"});
        }
        const trainingItem = await TrainingUser.findOne({userId: req.user.userId});
        await TrainingUser.updateOne({userId: req.user.userId}, {completed: trainingItem.completed || completed, 
            spendedTime: Math.min(spendedTime, trainingItem.spendedTime), speed: Math.max(speed, trainingItem.speed),
            numberStars: Math.max(numberStars, trainingItem.numberStars), 
            numberAttempts: Math.max(numberAttempts, trainingItem.numberAttempts)});
        if (!trainingItem.completed && completed){
            const user = await User.findOne({_id: req.user.userId});
            await User.updateOne({_id: req.user.userId}, {numberCompletedTrainings: user.numberCompletedTrainings + 1});
        }
        res.status(200).json({message: "Training successfully updated"});
    }
    catch(err){
        res.status(500).json({message: "Server error"});
        console.log("Training user router (update) error:", err.message);
    }
})

module.exports = router;