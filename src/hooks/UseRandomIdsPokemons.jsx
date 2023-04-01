import { useState, useEffect } from 'react'

export default function UseRandomIdsPokemons ({ amountPokemons = 8 } = {}) {
  const [randomIds, setRandomIds] = useState([])
  const [loadingIds, setLoadingIds] = useState(true)

  useEffect(() => {
    for (let index = 0; index < amountPokemons; index++) {
      const randomId = Math.floor(Math.random() * 898) + 1
      setRandomIds(randomIds => [...randomIds, randomId])
    }

    setLoadingIds(false)
  }, [])

  return { randomIds, loadingIds }
}
