import React, { useState } from 'react'

const CreateUser = (props) => {
    // new user variables
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")

    // userObj = {username, email}
    const [userObj, setUserObj] = useState({})

    // error messages
    const [userNameErrorMsg, setNameErrorMsg] = useState("")
    const [emailErrorMsg, setEmailErrorMsg] = useState("")

    
    // create user
    const createUser = (e) => {
        e.preventDefault()
        // create new user object and set it
        const newUser = {userName, email}
        setUserObj(newUser)

        // call addNewUser() from App.js and add new userObj to allUsersObjs
        props.addNewUser(newUser)
    }


    // validation check
    const checkNameLength = (name) => {
        setUserName(name)

        if (name.length < 3){
            setNameErrorMsg("Name is at least 3 characters")
        } else if (name.length === 0){
            setNameErrorMsg("")
        } else{
            setNameErrorMsg("")
        }
    }
    
    const checkEmail = (email) => {
        setEmail(email)

        if (email.length === 0){
            setEmailErrorMsg("Email must be present")
        } else {
            setEmailErrorMsg("")
        }
    }


    return (
        <div>
            <h4>Create New User:</h4>
            <form onSubmit={createUser}>
                User Name: {JSON.stringify(userName)} <br/>
                Email: {JSON.stringify(email)} <br />
                User: {JSON.stringify(userObj)} <br />

                <div>
                    <label>Username: </label>
                    <input type="text" onChange={(e) => checkNameLength(e.target.value)} value={userName} /> <br/>
                    {userNameErrorMsg ? <span style={{ color: "red" }}>{userNameErrorMsg}</span> : <span>&nbsp;</span>}
                </div>

                <div>
                    <label>Email Address</label>
                    <input type="email" onChange={(e) => checkEmail(e.target.value)} value={email} /> <br />
                    {emailErrorMsg ? <span style={{ color: "red" }}>{emailErrorMsg}</span> : <span>&nbsp;</span>}
                </div>

                <input type="submit" value="Create User"/>
            </form>
        </div>
    )
}

export default CreateUser
