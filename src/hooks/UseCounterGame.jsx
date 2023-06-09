import { useState, useEffect } from 'react'

export default function UseCounterGame ({ amountOfChanges, stopClock }) {
  const [counterGame, setCounterGame] = useState('00:00')

  useEffect(() => {
    let minutesFinal = 0
    let secondsFinal = 0
    let clockGameUser = null

    if (!stopClock) {
      clockGameUser = setInterval(() => {
        if (minutesFinal === 59) minutesFinal = 0

        if (secondsFinal === 59) {
          secondsFinal = 0
          minutesFinal += 1
        } else secondsFinal += 1

        const minutesFinalString = minutesFinal < 10 ? `0${minutesFinal}` : minutesFinal
        const secondsFinalString = secondsFinal < 10 ? `0${secondsFinal}` : secondsFinal
        const clockFinal = `${minutesFinalString}:${secondsFinalString}`

        setCounterGame(clockFinal)
      }, 1000)
    } else clearInterval(clockGameUser)

    return () => clearInterval(clockGameUser)
  }, [amountOfChanges, stopClock])

  return { counterGame }
}
