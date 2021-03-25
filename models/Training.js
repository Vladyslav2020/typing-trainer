const { Schema, model } = require('mongoose');

const Training = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        unique: true
    },
    text: {
        type: String,
    },
    numberPossibleErrors: {
        type: Number,
        default: 2
    }
});

module.exports = model("Training", Training);