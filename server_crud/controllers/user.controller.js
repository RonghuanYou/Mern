// CRUD: User is an instance
const User = require("../models/user.model")

// shell: db.students.create({query})
// in mongoose: model_name.create({query})

// export an object
module.exports = {
    // CREATE
    createNewUser: (req, res) => {
        // req.body is form information
        User.create(req.body)
            //what we return here is what we receive in react
            .then(newlyCreatedUser => res.json({message: "success", user: newlyCreatedUser}))
            .catch(err => res.json({message: 'something went wrong', error: err}))
    },

    // READ ALL
    getAllUsers: (req, res) => {
        User.find()
            .then(allUsers => {
                console.log(allUsers);
                res.json({allTheUsers: allUsers})
            })
            .catch()
    }, 

    // READ ONE
    getOneUser: (req, res) => {
        User.findById(req.params.id) // id is route parameter
            .then(oneUser => res.json({user: oneUser}))
            .catch(err => res.json({ message: 'something went wrong', error: err }))
    },

    // UPDATE
    updateUser: (req, res) => {
        // User.findOneAndUpdate({_id: req.params.id}, req.body)
        User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true})
            .then(updatedUser => res.json({user: updatedUser}))
            .catch(err => res.json({ message: 'something went wrong', error: err }))
    },
    
    // DELETE
    deleteUser: (req, res) => {
        User.findByIdAndDelete(req.params.id)
            .then(result => res.json({result: result}))
            .catch(err => res.json({ message: 'something went wrong', error: err }))

    }
}

