import { useState, useEffect } from 'react'

export default function UseRandomIdsPokemons () {
  const [randomIds, setRandomIds] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

  }, [])

  return { randomIds, loading }
}
