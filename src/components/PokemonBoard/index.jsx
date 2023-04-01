import { useState, useEffect } from 'react'
import UseRandomPokemons from '../../hooks/UseRandomPokemons'
import PokemonCard from '../PokemonCard'
import styles from './PokemonBoard.module.css'

export default function PokemonBoard () {
  const [comparedPokemons, setComparedPokemons] = useState({
    firstPokemon: null,
    secondPokemon: null
  })
  const [pokemonsActive, setPokemonsActive] = useState({})
  const { pokemons, loading } = UseRandomPokemons()

  useEffect(() => {
    const allPokemonsInactive = {}

    pokemons.forEach(pokemon => {
      allPokemonsInactive[pokemon.tag] = false
    })

    setPokemonsActive(allPokemonsInactive)
  }, [pokemons])

  const handleActivePokemon = ({ tag }) => {
    const { firstPokemon, secondPokemon } = comparedPokemons
    // console.log({ pokemonsActive })
    if (firstPokemon === null && !pokemonsActive[tag]) {
      setPokemonsActive({
        ...pokemonsActive,
        [tag]: true
      })

      setComparedPokemons({
        firstPokemon: tag,
        secondPokemon
      })
    } else if (secondPokemon === null && !pokemonsActive[tag]) {
      setPokemonsActive({
        ...pokemonsActive,
        [tag]: true
      })

      setComparedPokemons({
        firstPokemon,
        secondPokemon: tag
      })
    }
  }

  useEffect(() => {
    const { firstPokemon, secondPokemon } = comparedPokemons
    console.log(comparedPokemons)
    console.log({ pokemonsActive })
    // if (firstPokemon !== null && secondPokemon !== null) {
    //   const firstPokemonActive = pokemons.find(pokemon => pokemon.tag === firstPokemon)
    //   const secondPokemonActive = pokemons.find(pokemon => pokemon.tag === secondPokemon)

    //   if (firstPokemonActive.name === secondPokemonActive.name) {
    //     setTimeout(() => {
    //       setComparedPokemons({
    //         firstPokemon: null,
    //         secondPokemon: null
    //       })
    //     }, 1000)
    //   } else {
    //     setTimeout(() => {

    //     }, 1000)
    //   }
    // }
  }, [comparedPokemons])

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
              handleActivePokemon={handleActivePokemon}
            />
          )
        })
      }
    </div>
  )
}
