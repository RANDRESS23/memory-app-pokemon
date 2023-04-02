import { useState, useEffect } from 'react'

export default function UseRandomIdsPokemons ({ amountPokemons = 8, amountOfChanges } = {}) {
  const [randomIds, setRandomIds] = useState([])
  const [loadingIds, setLoadingIds] = useState(true)

  useEffect(() => {
    setRandomIds([])

    for (let index = 0; index < amountPokemons; index++) {
      const randomId = Math.floor(Math.random() * 898) + 1
      setRandomIds(randomIds => [...randomIds, randomId])
    }

    setLoadingIds(false)
  }, [amountOfChanges])

  return { randomIds, loadingIds }
}
