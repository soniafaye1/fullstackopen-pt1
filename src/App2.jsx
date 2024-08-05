import { useState } from "react";

const Display = ({counter}) => (<div>{counter}</div>)

const Button = ({onClick, text}) => (<button onClick={onClick}>{text}</button>)

const App2 = () => {
    const [counter, setCounter] = useState(0);

    const increaseByOne = () => setCounter(counter + 1)
    const setToZero = () => setCounter(0)
    const decreaseByOne = () => setCounter(counter - 1)

    return (
        <div>
            <Display counter={counter} />
            <Button onClick={increaseByOne} text="+"/>
            <Button onClick={setToZero} text="0" /> 
            <Button onClick={decreaseByOne} text="-"/>
        </div>
    )
}

export default App2