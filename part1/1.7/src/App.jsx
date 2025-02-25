import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

  return (
    <>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text='good' />
      <Button onClick={() => setNeutral(neutral + 1)} text='neutral' />  
      <Button onClick={() => setBad(bad + 1)} text='bad' />
      <h2>statistics</h2>
      <p>good {good} &ensp; neutral {neutral} &ensp; bad {bad}</p>
      <p>all {bad+neutral+good} &ensp; average {(good-bad)/(bad+neutral+good)}</p>
      <p>positive {good/(bad+neutral+good)*100} %</p>
    </>
  )
}

export default App