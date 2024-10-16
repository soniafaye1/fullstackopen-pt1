import { useState } from "react"

const Button = ({onClick, text}) =>{
    return(
        <button onClick={onClick}>{text}</button>
    )
}

const Statistics = ({text, value}) => {
    return (
        <p>{text}: {value}</p>
    )
}

const Unicafe = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)
    const [positive, setPositive] = useState(0)

    const handleGoodClick = () => {
        let newGood = good + 1
        let newAll = all + 1

        setGood(newGood)
        setAll(newAll)

        let sum = newGood - bad
        setAverage(sum/newAll)

        let pos = newGood/newAll
        setPositive(pos)
    }

    const handleBadClick = () => { 
        let newBad = bad + 1
        let newAll = all + 1
        setBad(newBad)
        setAll(newAll)

        let sum = good - newBad
        setAverage(sum/newAll)

        let pos = good/newAll
        setPositive(pos)
    }

    const handleNeutralClick = () => { 
        let newNeutral = neutral + 1
        let newAll = all + 1
        setNeutral(newNeutral)
        setAll(newAll)

        let sum = good - bad
        console.log(sum)
        setAverage(sum/newAll)

        let pos = good/newAll
        setPositive(pos)
    }

    return(
        <>
         <h2>give feedback</h2>
         <Button onClick={handleGoodClick} text={"good"} />
         <Button onClick={handleNeutralClick} text={"neutral"} />
         <Button onClick={handleBadClick} text={"bad"}/>

         <h2> Statistics </h2>
         <Statistics text={"good"} value={good}/>
         <Statistics text={"neutral"} value={neutral} />
         <Statistics text={"bad"} value={bad} />
         <Statistics text={"all"} value={all} />
         <Statistics text={"average"} value={average} />
         <Statistics text={"positive"} value={positive} />
        </>
    )
}

export default Unicafe;