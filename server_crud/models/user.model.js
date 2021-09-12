// 3. create mongoose schema and model
const mongoose = require("mongoose")
// mongodb has no build in validations
// mongoose is doing all the validations and talking to mongoDB


// a. the schema -- the rules that the entries in the db must follow
const UserSchema = new mongoose.Schema({
    name: String,
    age: Number
}, { timestamps: true})

// b. the model -- this is what we use to make the actual queries to the db
const User = mongoose.model("User", UserSchema)

// c. export
module.exports = User




