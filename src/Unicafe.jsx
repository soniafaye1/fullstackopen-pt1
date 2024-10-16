import { useState } from "react"

const Button = ({onClick, text}) =>{
    return(
        <button onClick={onClick}>{text}</button>
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

        console.log("good: "+newGood, "bad: "+bad, "newAll: "+newAll)
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
                
        console.log("good: "+good, "newBad: "+newBad, "newAll: "+newAll)

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
                
        console.log("good: "+good, "bad: "+bad, "all: "+ newAll)
    }



    return(
        <>
         <h2>give feedback</h2>
         <Button onClick={handleGoodClick} text={"good"} />
         <Button onClick={handleNeutralClick} text={"neutral"} />
         <Button onClick={handleBadClick} text={"bad"}/>

         <h2> Statistics </h2>
         <p>good: {good}</p>
         <p>neutral: {neutral}</p>
         <p>bad: {bad}</p>
         <p>all: {all}</p>
         <p>average: {average}</p>
         <p>positive: {positive}</p>
        </>
    )
}

export default Unicafe;