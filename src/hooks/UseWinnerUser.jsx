import { useState, useEffect } from 'react'

export default function UseWinnerUser ({ pokemonsActive }) {
  const [winnerUser, setWinnerUser] = useState(false)

  useEffect(() => {
    const allPokemonsIsActiveArr = Object.values(pokemonsActive)

    if (allPokemonsIsActiveArr.length > 0) {
      const allPokemonsActive = allPokemonsIsActiveArr.every(pokemon => pokemon === true)

      if (allPokemonsActive) setWinnerUser(true)
    }
  }, [pokemonsActive])

  return { winnerUser, setWinnerUser }
}
