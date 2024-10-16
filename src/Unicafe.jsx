import { useState } from "react"

const Button = ({onClick, text}) =>{
    return(
        <button onClick={onClick}>{text}</button>
    )
}

const StatisticsLine = ({text, value}) => {
     return (
        <tbody>
            <tr>
                <th>{text}</th>
                <td>{value}</td>
            </tr>

        </tbody>
    )
}

const Statistics = ({good, bad, neutral, all, average, positive}) => {
    if(good === 0 && bad === 0 && neutral === 0){
        return(
            <p>no feedback given</p>
        )
    }else{
       return(
    <div>
        <h2> Statistics </h2>
        <table>
         <StatisticsLine text={"good"} value={good}/>
         <StatisticsLine text={"neutral"} value={neutral} />
         <StatisticsLine text={"bad"} value={bad} />
         <StatisticsLine text={"all"} value={all} />
         <StatisticsLine text={"average"} value={average} />
         <StatisticsLine text={"positive"} value={positive} />
        </table>
    </div>
   ) 
    }
   
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

        <Statistics good={good} bad={bad} neutral={neutral} all={all} average={average} positive={positive} />
        </>
    )
}

export default Unicafe;