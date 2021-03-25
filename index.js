const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const path = require('path');
const authRouter = require('./routes/authRouter.js');
const trainingRouter = require("./routes/trainingRouter");
const trainingUser = require("./routes/trainingUserRouter");
const leaderboard = require("./routes/leaderBoardRouter");
const competition = require("./models/Competition");

const app = express();
const PORT = config.get('port') || 3000;

app.use(express.json({extended: true}));

(async () => {
    try{
        await mongoose.connect(config.get("mongoURL"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`Server has been starting on ${PORT} PORT`));
        app.use('/api/auth', authRouter);
        app.use("/api/training", trainingRouter);
        app.use("/api/training-user", trainingUser);
        app.use("/api/leaderboard", leaderboard);
        app.use("/api/competition", competition);
    }
    catch(err){
        console.log("Server error", err.message);
        process.exit(1);
    }
})();

