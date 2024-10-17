import { useState } from 'react'

const Anecdotes = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  let l = anecdotes.length; 
  var arr = Array(l).fill(0);
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(arr)
  const [highest, setHighest] = useState(0)
  let index = points.indexOf(highest)
  
  const handleClick = () => {
    let random = Math.floor(Math.random() * l);
    setSelected(random);
  }

  const handleVote = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    if(highest < copy[selected]){
        setHighest(copy[selected])
    }
  }

  return (
    <div>
        <h2>Anecdote of the day</h2>
        {anecdotes[selected]}
        <p>has {points[selected]} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleClick}>next anecdote</button>
        
        <h2>Anecdote of the day</h2>
        {anecdotes[index]}
        <p>has {highest} votes</p>
    </div>

  )
}

export default Anecdotes