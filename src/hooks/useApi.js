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
      params: { limit: '251', offset: '0' },
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
