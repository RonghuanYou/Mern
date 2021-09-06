import React, { useState } from 'react'

const CreateBox = (props) => {
    const [newColor, setNewColor] = useState("")
    const [newWidth, setBoxWidth] = useState(0)
    const [newHeight, setBoxHeight] = useState(0)



    // error message:
    const [widthErrorMsg, setWidthErrorMsg] = useState("")
    const [heightErrorMsg, setHeightErrorMsg] = useState("")


    // create box func(e: form submit event)
    const createBox = (e) => {
        // avoid refreshing page
        e.preventDefault()

        // check user input(case: user modifies input type)
        const width = parseInt(newWidth)
        const height = parseInt(newHeight)

        // init msg
        setWidthErrorMsg("")
        setHeightErrorMsg("")

        if (isNaN(width)){
            setWidthErrorMsg("Width is not a number")
        }
        if (isNaN(height)){
            setHeightErrorMsg("Height is not a number")
            return
        }

        // add newBox to boxes list
        props.addBox(newColor, width, height)
        setNewColor("")     // set color as empty
        setBoxWidth(0)      // set boxWidth as empty
        setBoxHeight(0)     // set boxHeight as empty
    }


    return (
        <div>
            {/* when we submit the form, we call createBox() */}
            <form onSubmit={createBox}>

                <div style={{ marginTop: 20 }}>
                    <label>Color: </label>
                    <input onChange={(e) => setNewColor(e.target.value)}
                        type="text"
                        value={newColor} // clear the input box, when we creaet box, we set color as empty, input will show empty as default
                    />
                </div>

                <div style={{ marginTop: 20 }}>
                    <label>Box Width: </label>
                    <input onChange={(e) => setBoxWidth(e.target.value)}
                        type="number" 
                        value={newWidth} 
                    />
                    <span style={{ color: "red" }}>{widthErrorMsg}</span>

                </div>

                <div style={{ marginTop: 20 }}>
                    <label>Box Height: </label>
                    <input onChange={(e) => setBoxHeight(e.target.value)}
                        type="number" 
                        value={newHeight}
                    />
                    <span style={{ color: "red" }}>{heightErrorMsg}</span>
                    <br />
                </div>
                <button style={{ marginTop: 20 }}>Add</button>
            </form>

        </div>
    )
}

export default CreateBox
