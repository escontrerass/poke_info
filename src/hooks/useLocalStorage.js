import { useState, useEffect } from 'react'

export function useLocalStorage() {
  const [storedValue, setStoredValue] = useState(() => {
    const ls = localStorage.getItem('storedValue')
    if (ls) return JSON.parse(ls)
    else return []
  })

  const setValue = id => () => {
    const isStoredValue = storedValue.includes(id)
    if (isStoredValue) setStoredValue(prev => prev.filter(b => b !== id))
    else setStoredValue(prev => [...prev, id])
  }

  useEffect(() => {
    localStorage.setItem('storedValue', JSON.stringify(storedValue))
  }, [storedValue])

  return [storedValue, setValue]
}
