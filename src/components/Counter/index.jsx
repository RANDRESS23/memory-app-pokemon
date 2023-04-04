import UseCounterGame from '../../hooks/UseCounterGame'
import { FiClock } from 'react-icons/fi'
import styles from './Counter.module.css'

export default function Counter ({ amountOfChanges, stopClock }) {
  const { counterGame } = UseCounterGame({ amountOfChanges, stopClock })

  return (
    <div className={styles.Counter}>
      <div className={styles.Icon}>
        <FiClock />
      </div>
      <div className={styles.Clock}>{counterGame}</div>
    </div>
  )
}
