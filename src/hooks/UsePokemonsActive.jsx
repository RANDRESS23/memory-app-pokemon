import { useState, useEffect } from 'react'

export default function UsePokemonsActive ({ pokemons }) {
  const [pokemonsActive, setPokemonsActive] = useState({})

  useEffect(() => {
    const allPokemonsInactive = {}

    pokemons.forEach(pokemon => {
      allPokemonsInactive[pokemon.tag] = false
    })

    setPokemonsActive(allPokemonsInactive)
  }, [pokemons])

  return { pokemonsActive, setPokemonsActive }
}
