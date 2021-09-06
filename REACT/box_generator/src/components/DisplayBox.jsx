
const DisplayBox = (props) => {
    return (
        <div style={{ display: "flex" }}>
            {
                props.boxes.map((boxObj, idx) => {
                    return <div 
                        key={idx}
                        style={{ backgroundColor: boxObj.newColor, width: +boxObj.newWidth, height: parseInt(boxObj.newHeight), marginRight: 20}}> 
                    </div>
                })
            }
            
        </div>
    )
}

export default DisplayBox
