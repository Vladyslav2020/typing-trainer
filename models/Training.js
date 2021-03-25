const { Schema, model } = require('mongoose');

const Training = new Schema({
    number: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
    },
    numberPossibleErors: {
        type: Number,
        default: 2
    }
});

module.exports = model("Training", Training);