import { typeColors } from '../../constants/TypeColorsPokemon'
import pokeball from '../../assets/img/pokeball.png'
import styles from './PokemonCard.module.css'

export default function PokemonCard ({ tag, name, image, principalType, isActive, handleActivePokemon }) {
  return (
    <>
      {
        isActive
          ? (
            <button className={styles.Card} style={{ backgroundColor: typeColors[principalType] }}>
              <img src={image} alt={name} />
            </button>
            )
          : (
            <button
              onClick={() => handleActivePokemon({ tag })}
              className={styles.CardOff}
            >
              <img src={pokeball} alt='pokeball' />
            </button>
            )
      }
    </>
  )
}
