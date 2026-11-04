import { useValues } from "../store"
const Statistics = () => {
  const { good, bad, neutral } = useValues()
  // const good = 0
  // const neutral = 0
  // const bad = 0
  // const all = 0
  // const average = 0
  // const positive = 0

   if (bad == 0 && good == 0 && neutral == 0) {
    return (<p>No feedback given</p>)
  }

  const all = good + bad + neutral
  const average = (good - bad) / all
  const positive = (good / all) * 100
  
  return (
    <div>
      <h2>statistics</h2>
      <table>``
        <tbody>
          <tr><td>good</td><td>{good}</td></tr>
          <tr><td>neutral</td><td>{neutral}</td></tr>
          <tr><td>bad</td><td>{bad}</td></tr>
          <tr><td>all</td><td>{all}</td></tr>
          <tr><td>average</td><td>{average}</td></tr>
          <tr><td>positive</td><td>{positive}</td></tr>
        </tbody>
      </table>
    </div>
  )
}

export default Statistics
