import { useState } from 'react'
import PokemonBoard from '../../components/PokemonBoard'
import Header from '../../components/Header'
import styles from './Home.module.css'
import StatsBar from '../../components/StatsBar'
import Footer from '../../components/Footer'

export default function Home () {
  const [amountOfChanges, setAmountOfChanges] = useState(0)
  const [stopClock, setStopClock] = useState(false)

  return (
    <div className={styles.Container}>
      <Header />
      <main className={styles.Container2}>
        <StatsBar
          amountOfChanges={amountOfChanges}
          setAmountOfChanges={setAmountOfChanges}
          stopClock={stopClock}
          setStopClock={setStopClock}
        />
        <PokemonBoard
          amountOfChanges={amountOfChanges}
          setStopClock={setStopClock}
        />
      </main>
      <Footer />
    </div>
  )
}
