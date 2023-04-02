import Counter from '../Counter'
import ResetGame from '../ResetGame'
import styles from './StatsBar.module.css'

export default function StatsBar ({ amountOfChanges, setAmountOfChanges }) {
  return (
    <div className={styles.StatsBar}>
      <Counter amountOfChanges={amountOfChanges} />
      <ResetGame setAmountOfChanges={setAmountOfChanges} />
    </div>
  )
}
