const mongoose = require('mongoose')

const Person = new mongoose.Schema(
    {code: String,
    address: String,
    name: String,
    department: String,
    section: String,
    attribute1: String,
    attribute2: String,
    expertise: String,
    costPerDay: Number,
    costPerHour: Number,
    notes: String},
    {timestamps:true}
)

mongoose.model('Person', Person)
module.exports = mongoose.model('Person')