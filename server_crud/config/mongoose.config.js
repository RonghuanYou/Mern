// 1. import mongoose
const mongoose = require("mongoose")
const DB = "cool_friday_db"

// 2. connect mongoose lib to MongoDB
mongoose.connect("mongodb://localhost/" + DB)
    .then( () => console.log(`connected to mongodb ${DB} database`))
    .catch( err => console.log(`error connecting to ${DB} databse`, err))

    


