import React from 'react'
import axios from 'axios'

export const fetchEpisode = (episodeId) =>
  axios.get(`/api/episodes/${episodeId}`).then((res) => res.data)

export default function useEpisode(episodeId) {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  })

  const fetch = React.useCallback(async () => {
    setState({ isLoading: true })
    try {
      const data = await fetchEpisode(episodeId)
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, [episodeId])

  React.useEffect(() => {
    fetch()
  }, [fetch])

  return {
    ...state,
    fetch,
  }
}
