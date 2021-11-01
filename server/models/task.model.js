
const mongoose = require("mongoose")

const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        // required:[true,"Please title your marker"]
    },
    isHome: {
        type: String,
        // required:[true,"Must specify"]
    },
    lat: {
        type: Number,
    },
    lng: {
        type: Number,
    },
    time: {
        type: Date,
    },
    searchAddress: {
        type: String,
    }
}, {timestamps : true})

const Task = mongoose.model("TaskSchema", TaskSchema)
module.exports = Task