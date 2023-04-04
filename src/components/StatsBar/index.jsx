import Counter from '../Counter'
import ResetGame from '../ResetGame'
import styles from './StatsBar.module.css'

export default function StatsBar ({ amountOfChanges, setAmountOfChanges, stopClock, setStopClock }) {
  return (
    <div className={styles.StatsBar}>
      <Counter
        amountOfChanges={amountOfChanges}
        stopClock={stopClock}
      />
      <ResetGame
        setAmountOfChanges={setAmountOfChanges}
        setStopClock={setStopClock}
      />
    </div>
  )
}
