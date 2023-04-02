import { useState, useEffect } from 'react'
import UseRandomIdsPokemons from './UseRandomIdsPokemons'
import getRandomPokemon from '../services/getRandomPokemon'

export default function UseRandomPokemons () {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(false)
  const { randomIds, loadingIds } = UseRandomIdsPokemons()

  useEffect(() => {
    if (!loadingIds) {
      randomIds.forEach(idPokemon => {
        getRandomPokemon({ idPokemon })
          .then(pokemon => {
            const pokemonFinal1 = { tag: `${pokemon.name}${1}`, ...pokemon }
            const pokemonFinal2 = { tag: `${pokemon.name}${2}`, ...pokemon }

            setPokemons(prevPokemons => [...prevPokemons, pokemonFinal1, pokemonFinal2].sort(() => 0.5 - Math.random()))
          })
      })

      setLoading(false)
    }
  }, [loadingIds])

  return { pokemons, loading }
}
