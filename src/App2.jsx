import { useState } from "react";

const History = (props) => {
    if(props.allClicks.length === 0){
        return (
            <div>
                press buttons
            </div>
        )
    }
    
    return (
        <div>
            button press history: {props.allClicks.join(" ")}
        </div>
    )
}

const Button = ({handleClick, text}) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App2 = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClick = () => {
        setAll(allClicks.concat("L"))
        setLeft(left + 1)
    }

    const handleRightClick = () => {
        setAll(allClicks.concat("R"))
        setRight(right + 1) 
    }

    const HandleResetClick = () => {
        setAll([])
        setRight(0)
        setLeft(0)
    }

    return (
        <div>
            {left}
            <Button onClick={handleLeftClick} text={'left'} />
            <Button onClick={handleRightClick} text={'right'} />
            {right}

            <Button onClick={HandleResetClick} text="reset" />
            
            <History allClicks={allClicks}/>
        </div>
    )
}

export default App2