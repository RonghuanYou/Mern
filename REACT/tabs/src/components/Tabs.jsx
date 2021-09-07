import React, { useState } from 'react'

const Tabs = (props) => {
    const [selectedTabIdx, setSelectedTabIdx] = useState(0)

    return (
        <div style={{ marginTop: 30 }}>
            { props.tabContentsArr.map((Obj, idx) => {
                return (
                    <span 
                        key={idx}
                        onClick={(e) => { setSelectedTabIdx(idx)}}
                        style={{ 
                            padding: 20,
                            marginRight: 20, 
                            border: "1px solid grey",
                            backgroundColor: selectedTabIdx === idx? "black" : "",
                            color: selectedTabIdx === idx ? "white" : "",
                        }}
                    >{Obj.header}</span>

                )})
            }
            {/* Display tab content for a specific tab */}
            <div style={{
                padding: 30,
                height: 200, 
                width: 400,
                marginTop: 50, 
                marginLeft: "auto",
                marginRight: "auto",
                border: "1px solid grey"
            }}>
                {props.tabContentsArr[selectedTabIdx].content}
            </div>
        </div>
    )
}

export default Tabs
