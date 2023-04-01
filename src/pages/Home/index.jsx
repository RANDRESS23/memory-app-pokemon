import PokemonBoard from '../../components/PokemonBoard'
import Header from '../../components/Header'
import styles from './Home.module.css'
import StatsBar from '../../components/StatsBar'

export default function Home () {
  return (
    <div className={styles.Container}>
      <Header />
      <StatsBar />
      <PokemonBoard />
    </div>
  )
}
