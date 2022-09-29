import { pokemonTypeColors } from './pokemonTypeColors'

export const backgroundColors = types => {
  const bg = types.map(({ type }) => {
    const [[, backgroundColor]] = Object.entries(pokemonTypeColors).filter(([key, _]) => key === type.name)

    return { type, backgroundColor }
  })
  return bg
}
