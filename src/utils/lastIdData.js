export function lastIdData(data) {
  const info = data.map(event => {
    const stringArray = event.url.split('/')
    return stringArray.some(date => date.includes('251'))
  })
  return info.some(event => event === true)
}
