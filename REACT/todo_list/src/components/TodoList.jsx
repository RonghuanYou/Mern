import React, { useState } from 'react'

const TodoList = () => {
    // list: a list of objs, to store all todo event
    const [list, setList] = useState([])
    const [name, setName] = useState("")

    // ADD TODO: create new todo obj({name, isDone: false}) and push it to todoList
    const createTodo = (e) => {
        e.preventDefault()
        setList([...list, {name, isDone: false}])
        setName("")
        console.log(list);
    }

    // USER CLICKS CHECKBOX, TOGGLE EVENT-IS-DONE STATUS
    const toggleIsDone = (idx) => {
        // update one todo in list(use a copylist, update a specific event, set list as copyList)
        const copyList = [...list]
        copyList[idx].isDone = !list[idx].isDone
        setList(copyList)
        // setList([...list, { name, isDone: list[idx].isDone}]) 
        // console.log(list[idx].isDone);
    }


    // DELETE A SPECIFIC TODO EVENT
    const deleteTodo = (idx) => {
        // save the list its index not equal the deletedIdx
        setList(list.filter((obj, i) => idx !== i))

    }

    return (
        <div>
            {JSON.stringify(list)}
            <form onSubmit={createTodo}>
                <div>
                    <label>Name: </label>
                    <input onChange={(e) => setName(e.target.value)} type="text" value={name}/>
                </div>
                <button>Add</button>
            </form>

            {/* display todos */}
            <div>
                <h4>TO DO:</h4>
                { list.map((obj, idx) => (
                    <div key={idx}>
                        <span style={{ textDecoration: obj.isDone ? "line-through" : ""}}>{obj.name}</span>
                        <input onChange={(e) => toggleIsDone(idx)} type="checkbox" checked={obj.isDone} />
                        <button onClick={(e) => deleteTodo(idx)}>Delete</button>
                    </div>
                ))
                }
            </div>
        </div>
    )
}
export default TodoList;