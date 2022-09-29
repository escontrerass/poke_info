import { useEffect, useState } from 'react'
import axios from 'axios'

export function useGetGlobalData(EP) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_URL_API}${EP}`,
      params: { limit: 251, offset: '0' },
    }

    async function getData() {
      try {
        const response = await axios(options)
        setData(response.data.results)
        setLoading(false)
      } catch (error) {
        throw Error(error)
      }
    }

    getData()
  }, [EP])
  return { data, loading }
}

export function useGetDetailData(EP, START = 0, LIMIT = 251) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_URL_API}${EP}`,
      params: { limit: `${LIMIT}`, offset: `${START}` },
    }
    async function getData() {
      try {
        const response = await axios(options)
        const promises = await response.data.results.map(async pokemon => {
          try {
            const { data } = await axios(pokemon.url)
            return data
          } catch (error) {
            throw Error(error)
          }
        })
        const results = await Promise.allSettled(promises)
        setData(results)
        setLoading(false)
      } catch (error) {
        throw Error(error)
      }
    }
    getData()
  }, [EP, LIMIT, START])
  return { data, loading }
}

export function useGetSelectedData(EP) {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)

    const options = {
      method: 'GET',
      url: `${process.env.REACT_APP_URL_API}${EP}`,
    }
    async function getData() {
      try {
        const response = await axios(options)
        setData(response.data)
        setLoading(false)
      } catch (error) {
        throw Error(error)
      }
    }

    getData()
  }, [EP])
  return { data, loading }
}
