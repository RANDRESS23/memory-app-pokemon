import { useState, useEffect } from 'react'
import getRandomPokemon from '../services/getRandomPokemon'

export default function UseRandomPokemons () {
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

  }, [])

  return { pokemons, loading }
}
