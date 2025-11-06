import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.text}
      </h1>
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const StatisticLine = (props) => {
  return(
    <div>
      <p>{props.text} {props.number}</p>
    </div>
  )
}

const Statistic = (props) => {
  if (props.all == 0) {
    return(
      <div>
        <p>No Feedback Given</p>
      </div>
    )
  } else if (props.all>0){
      return(
        <div>
          <Header text='statistics' />
          <StatisticLine text='good' number={props.good} />
          <StatisticLine text='neutral' number={props.neutral} />
          <StatisticLine text='bad' number={props.bad} />
          <StatisticLine text='all' number={props.all} />
          <StatisticLine text='average' number={props.average}/>
          <StatisticLine text='positive' number={props.positive}/>
        </div>
      )
    }
}



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Statistic good={good} neutral={neutral} bad={bad} all={good+neutral+bad} average={(good-bad)/(good+neutral+bad)} positive={((good)/(good+neutral+bad))}/>
     </div>
  )
}

export default App