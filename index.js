const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const authRouter = require('./routes/authRoute');

const app = express();
const PORT = config.get('port') || 3000;

app.use(express.json({extended: true}));

(async () => {
    try{
        await mongoose.connect(config.get("mongoURi"), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        app.listen(PORT, () => console.log(`Server has been starting on ${PORT} PORT`));
        app.use('/api', authRouter);
    }
    catch(err){
        console.log("Server error", err.message);
        process.exit(1);
    }
})();

