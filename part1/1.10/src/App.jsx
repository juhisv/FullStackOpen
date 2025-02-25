import { useState } from 'react'

const StatisticLine = ({text, value}) => {  
  return (
    <p>{text} {value}</p>
  )
}

const Statistics = (props) => {
  const { good, neutral, bad } = props
  if( good+neutral+bad === 0){
    return (
      <>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </>
      )
    } 
  else {
    return (
      <>
        <h2>statistics</h2>
        <StatisticLine text="good" value={good}/>
        <StatisticLine text="neutral" value={neutral}/>
        <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={bad+neutral+good}/>
        <StatisticLine text="average" value={(good-bad)/(bad+neutral+good)}/>
        <StatisticLine text="positive" value={good/(bad+neutral+good)*100}/>
      </>
    )}
  }

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  ) 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />  
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </>
  )
}

export default App