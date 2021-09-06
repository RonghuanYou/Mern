import React from 'react'

const DisplayUser = (props) => {

    // const { allUsers } = props
    return (
        <div>
            <h1>DisplayUser.jsx</h1>
            {JSON.stringify(props.allUsers)}
            <div>
                {
                    props.allUsers.map((userObj, idx) => <li> username: {userObj.userName} - email: {userObj.email}</li>)
                    
                }



            </div>


        </div>
    )
}

export default DisplayUser
