import UseRandomPokemons from '../hooks/UseRandomPokemons'

export default function Home () {
  const { pokemons, loading } = UseRandomPokemons()

  if (loading) return <div>Loading...</div>
  console.log({ pokemons })
  return (
    <div>
      {
        pokemons.map((pokemon, index) => {
          return (
            <div key={`${pokemon.id}${index}`}>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
              <h3>{pokemon.name}</h3>
            </div>
          )
        })
      }
    </div>
  )
}
