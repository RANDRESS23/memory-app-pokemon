import { useState } from 'react'
import PokemonBoard from '../../components/PokemonBoard'
import Header from '../../components/Header'
import styles from './Home.module.css'
import StatsBar from '../../components/StatsBar'

export default function Home () {
  const [amountOfChanges, setAmountOfChanges] = useState(0)

  return (
    <div className={styles.Container}>
      <Header />
      <StatsBar
        amountOfChanges={amountOfChanges}
        setAmountOfChanges={setAmountOfChanges}
      />
      <PokemonBoard amountOfChanges={amountOfChanges} />
    </div>
  )
}
