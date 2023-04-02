import toast, { Toaster } from 'react-hot-toast'
import { VscDebugRestart } from 'react-icons/vsc'
import styles from './ResetGame.module.css'

export default function ResetGame ({ setAmountOfChanges }) {
  const handleResetGame = () => {
    toast((t) => (
      <span className={styles.Alert}>
        <div className={styles.AlertTitle}>Do you want to restart the game?</div>
        <div className={styles.ButtonsContainer}>
          <button
            onClick={() => {
              setAmountOfChanges(prevAmountOfChanges => prevAmountOfChanges + 1)
              toast.dismiss(t.id)
            }}
            className={styles.ButtonConfirm}
          >
            Restar
          </button>
          <button
            onClick={() => toast.dismiss(t.id)}
            className={styles.ButtonDismiss}
          >
            Cancel
          </button>
        </div>
      </span>
    ), {
      duration: 10000
    })
  }

  return (
    <>
      <button onClick={handleResetGame} className={styles.ResetGame}>
        <div>Reset Game</div>
        <VscDebugRestart />
      </button>
      <Toaster />
    </>
  )
}
