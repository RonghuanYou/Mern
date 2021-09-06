import './App.css';
import { useState } from 'react'
import DisplayUser from './components/DisplayUser';
import CreateUser from './components/CreateUser';


function App() {
  // allUsrss: variables
  // when we create a user in createForm, the user info will be stored in allUsers
  const [allUsers, setAllUsers] = useState([
    {
      userName: "Ronghuan",
      email: "ronghuan@gmail.com"
    },
    {
      userName: "Isabel",
      email: "isabel@gmail.com"
    }
  ])


  const addNewUser = (newUserObj) => {
    // alt way: copy original arr, push new obj into it, update allUsers
    // const copyUserArr = [...allUsers]
    // copyUserArr.push(newUserObj)
    // setAllUsers(copyUserArr)
    setAllUsers([...allUsers, newUserObj])
  }


  return (
    <fieldset className="App">
      <legend>App.js</legend>
      <h1>App.js</h1>
      {JSON.stringify(allUsers)}

      <CreateUser addNewUser={addNewUser}/>
      <DisplayUser allUsers={allUsers}/>
    </fieldset>
  );
}

export default App;
