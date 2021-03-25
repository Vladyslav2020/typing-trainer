const { Router } = require("express");
const User = require('../models/User');

const router = Router();

router.get('/get', async(req, res) => {
    try{
        let response = await User.find().sort({numberCompletedTrainings: -1});
        response = response.map(item => ({userId: item._id, name: item.name, numberStars: item.numberStars}));
        res.status(200).json({message: response});
    }
    catch(err){
        console.log("Leaderboard(get) router error:", err.message);
    }
});

module.exports = router;