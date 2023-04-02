import toast, { Toaster } from 'react-hot-toast'
import UseRandomPokemons from '../../hooks/UseRandomPokemons'
import UsePokemonsActive from '../../hooks/UsePokemonsActive'
import UseComparePokemons from '../../hooks/UseComparePokemons'
import UseWinnerUser from '../../hooks/UseWinnerUser'
import UseConfettiWinner from '../../hooks/UseConfettiWinner'
import PokemonCard from '../PokemonCard'
import ReactCanvasConfetti from 'react-canvas-confetti'
import { confettiStyles } from '../../constants/ConfettiStyles'
import styles from './PokemonBoard.module.css'

export default function PokemonBoard ({ amountOfChanges }) {
  const { pokemons, loading } = UseRandomPokemons({ amountOfChanges })
  const { pokemonsActive, setPokemonsActive } = UsePokemonsActive({ pokemons })
  const {
    comparedPokemons,
    setComparedPokemons,
    enableCard
  } = UseComparePokemons({ setPokemonsActive, pokemons, pokemonsActive })
  const { winnerUser, setWinnerUser } = UseWinnerUser({ pokemonsActive })
  const { getInstance, fire } = UseConfettiWinner()

  const handleActivePokemon = ({ tag }) => {
    const { firstPokemon, secondPokemon } = comparedPokemons
    if ((!firstPokemon && !pokemonsActive[tag]) || (!secondPokemon && !pokemonsActive[tag])) {
      setPokemonsActive({
        ...pokemonsActive,
        [tag]: true
      })

      setComparedPokemons({
        firstPokemon: !firstPokemon ? tag : firstPokemon,
        secondPokemon: (!secondPokemon && firstPokemon) ? tag : secondPokemon
      })
    }
  }

  if (loading) return <div>Loading...</div>

  if (winnerUser) {
    toast.success('Congratulations!', {
      duration: 4000
    })

    fire()
    setTimeout(() => fire(), 500)
    setTimeout(() => fire(), 1000)

    setWinnerUser(false)
  }

  return (
    <div className={styles.Container}>
      {
        pokemons.map((pokemon, index) => {
          return (
            <PokemonCard
              key={`${pokemon.id}${index}`}
              tag={pokemon.tag}
              name={pokemon.name}
              image={pokemon.sprites.front_default}
              principalType={pokemon.types[0].type.name}
              isActive={pokemonsActive[pokemon.tag]}
              handleActivePokemon={
                enableCard
                  ? handleActivePokemon
                  : () => { toast.error('Wait for the cards to hide!.') }
              }
            />
          )
        })
      }
      <Toaster />
      <ReactCanvasConfetti refConfetti={getInstance} style={confettiStyles} />
    </div>
  )
}
