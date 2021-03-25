const jwt = require('jsonwebtoken');
const config = require('config');
const User = require('../models/User');

module.exports = async (req, res, next) => {
    if (req.method == 'OPTIONS'){
        return next();
    }
    try{
        let token = req.headers.authorization;
        token = token.split(' ')[1];
        if (!token){
            return res.status(401).json({message: "No authorization"});
        }
        const decoded = jwt.verify(token, config.get('jwtSecretKey'));
        req.user = decoded;
        const user = await User.findOne({_id: req.user.userId});
        if (!user){
            return res.status(401).json({message: "No authorization"});
        }
        next();
    }
    catch(err){
        console.log("Auth middleware error:", err.message);
        return res.status(500).json({message: "Server error"});
    }
}