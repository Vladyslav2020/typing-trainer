const { Schema, model, Types } = require('mongoose');

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    registerDate: {
        type: Number,
        required: true
    },
    numberCompletedTrainings: {
        type: Number,
        default: 0
    },
    numberFriends: {
        type: Number,
        default: 0
    },
    numberFriendsWith: {
        type: Number,
        default: 0
    },
    rank: {
        type: String,
        default: "beginner"
    },
    friendsList: {
        type: Array,
        default: []
    },
    trainingsList: {
        type: Array,
        default: []
    },
    speedTypingRecord: {
        type: Number,
        default: 0
    }
});

module.exports = model('User', User);