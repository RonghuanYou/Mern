// const UserController = require("../controllers/user.controller")
const { createNewUser, getAllUsers, getOneUser, updateUser, deleteUser } = require("../controllers/user.controller")

module.exports = (app) => {
    // CREATE, callback func for createNewUser in conroller file
    app.post("/api/users", createNewUser)

    // READ ALL
    app.get("/api/users", getAllUsers)

    // READ ONE 
    app.get("/api/users/:id", getOneUser)

    // UPDATE
    app.put("/api/users/:id", updateUser)

    // DELETE
    app.delete("/api/users/:id", deleteUser)
}