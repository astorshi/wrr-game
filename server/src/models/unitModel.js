const mongoose = require('mongoose');

const unitSchema = mongoose.Schema({
    unit: {
        type: String,
        requried: true,
    },
    name: {
        type: String,
        requried: true,
        default: "Безымянный",
    },
    health: {
        type: String,
        requried: true,
    },
    armor: {
        type: String,
        requried: true,
    },
    magResist: {
        type: String,
        requried: true,
    },
    positionX: {
        type: String,
        requried: true,
    },
    positionY: {
        type: String,
        requried: true,
    },
    mana: {
        type: String,
        requried: true,
        default: "0",
    },
});

module.exports = mongoose.model('Unit', unitSchema);
