const { Schema, Types, model } = require('mongoose');

const TrainingUser = new Schema({
    userId: {
        type: Types.ObjectId,
        required: true,
        ref: "User"
    },
    trainingNumber: {
        type: Number,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    numberAttempts: {
        type: Number,
        default: 0
    },
    spendedTime: {
        type: Number,
        default: 0
    },
    speed:{
        type: Number,
        default: 0
    },
    numberStars: {
        type: Number,
        default: 0
    }
});

module.exports = model("TrainingUser", TrainingUser);