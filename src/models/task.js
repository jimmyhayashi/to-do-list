const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//const checklist = require("./checklist");

const taskSchema = new Schema({
    name: {type: String, required: true}, 
    done: {type: Boolean, default: false}, 
    checklist: {
        type: Schema.Types.ObjectId,
        ref: 'Checklist',
        required: true
    }
})

module.exports = mongoose.model('Task', taskSchema)