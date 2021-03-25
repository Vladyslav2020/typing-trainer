const { Router } = require('express');
const Competition = require('../models/Competition');

const router = Router();

router.get('/get', async(req, res) => {
    try{
        const response = await Competition.find().sort({date: -1});
        res.status(200).json({message: response});
    }
    catch(err){
        res.status(500).json({message: "Server error"});
        console.log("Error in conmpetition(get) router:", err.message);
    }
})

module.exports = router;