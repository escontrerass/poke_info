import { useGetSelectedData } from 'hooks/useApi'

export function Favorite(id) {
  const { data } = useGetSelectedData(`pokemon/${id}`)

  return data
}

export function ListFavorites(array) {
  const favorites = array.map(id => {
    const data = Favorite(id)
    return data
  })
  return favorites
}
