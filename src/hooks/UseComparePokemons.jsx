import { useState, useEffect } from 'react'

export default function UseComparePokemons ({ setPokemonsActive, pokemons, pokemonsActive }) {
  const [comparedPokemons, setComparedPokemons] = useState({
    firstPokemon: null,
    secondPokemon: null
  })
  const [enableCard, setEnableCard] = useState(true)

  useEffect(() => {
    const { firstPokemon, secondPokemon } = comparedPokemons

    if (firstPokemon !== null && secondPokemon !== null) {
      setEnableCard(false)

      const firstPokemonActive = pokemons.find(pokemon => pokemon.tag === firstPokemon)
      const secondPokemonActive = pokemons.find(pokemon => pokemon.tag === secondPokemon)

      if (firstPokemonActive.name !== secondPokemonActive.name) {
        setTimeout(() => {
          setPokemonsActive({
            ...pokemonsActive,
            [firstPokemon]: false,
            [secondPokemon]: false
          })

          setEnableCard(true)
        }, 2000)
      } else setEnableCard(true)

      setComparedPokemons({
        firstPokemon: null,
        secondPokemon: null
      })
    }
  }, [comparedPokemons])

  return { comparedPokemons, setComparedPokemons, enableCard }
}
