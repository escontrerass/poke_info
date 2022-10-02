export function lastIdData(data) {
  try {
    const info = data.map(event => {
      const stringArray = event.url.split('/')
      return stringArray.some(date => date.includes('251'))
    })
    return info.some(event => event === true)
  } catch (error) {
    console.error(error)
    return null
  }
}
