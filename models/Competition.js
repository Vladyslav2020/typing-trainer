const { Schema, model } = require('mongoose');

const Competition = new Schema({
    number: {
        type: Number,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    usersList: {
        type: Array,
        default: []
        /* [{ userId: Schema.Types.ObjectID, userName: String, numberErrors: Number, 
            spendedTime: Number, speedTyping: Number }] */
    }
});

module.exports = model("Competition", Competition);