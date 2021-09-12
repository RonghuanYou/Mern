const express = require("express")
const app = express()
const PORT = 1337

// 1. import mongoose - require mongoose
// 2. connect to mongodb by requiring the file here
require("./config/mongoose.config")
// 3. create mongoose schema
// 4. use mongoose model to make CRUD functions -> controller
// 5. create routes to execute the functions to the db

// middleware
app.use(express.json(), express.urlencoded({extended: true}))

// Routes after middleware
// require returns a function, since inside routes there is a callback func
require('./routes/user.routes')(app)





// start the server
app.listen(PORT, () => console.log(`server up on port: ${PORT}`))