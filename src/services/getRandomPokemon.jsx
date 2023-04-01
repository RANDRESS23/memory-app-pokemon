export default async function getRandomPokemon ({ idPokemon }) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    const data = await response.json()

    return data
  } catch (error) {
    console.log(error)
  }
}
