import toast, { Toaster } from 'react-hot-toast'
import UseRandomPokemons from '../../hooks/UseRandomPokemons'
import UsePokemonsActive from '../../hooks/UsePokemonsActive'
import UseComparePokemons from '../../hooks/UseComparePokemons'
import PokemonCard from '../PokemonCard'
import styles from './PokemonBoard.module.css'

export default function PokemonBoard () {
  const { pokemons, loading } = UseRandomPokemons()
  const { pokemonsActive, setPokemonsActive } = UsePokemonsActive({ pokemons })
  const {
    comparedPokemons,
    setComparedPokemons,
    enableCard
  } = UseComparePokemons({ setPokemonsActive, pokemons, pokemonsActive })

  const handleActivePokemon = ({ tag }) => {
    const { firstPokemon, secondPokemon } = comparedPokemons
    if ((!firstPokemon && !pokemonsActive[tag]) || (!secondPokemon && !pokemonsActive[tag])) {
      setPokemonsActive({
        ...pokemonsActive,
        [tag]: true
      })

      console.log('a: ', comparedPokemons)
      setComparedPokemons({
        firstPokemon: !firstPokemon ? tag : firstPokemon,
        secondPokemon: (!secondPokemon && firstPokemon) ? tag : secondPokemon
      })
    }
    console.log('d: ', comparedPokemons)
  }

  if (loading) return <div>Loading...</div>

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
    </div>
  )
}
