import { useState } from "react";
import Statistics from "./Statistics";
import Button from "./Button";

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  console.log("good:", good, "neutral:", neutral, "bad:", bad)

  return (
    <div>
      <div>
        <h2>give feedback</h2>
        <Button onClick={incrementGood} text="good" />
        <Button onClick={incrementNeutral} text="neutral" />
        <Button onClick={incrementBad} text="bad" />
        <h2>statistics</h2>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  );
};

export default App;
