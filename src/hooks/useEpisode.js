import React from 'react'
import axios from 'axios'

export const fetchEpisode = (postId) =>
  axios.get(`/api/posts/${postId}`).then((res) => res.data)

export default function useEpisode(postId) {
  const [state, setState] = React.useReducer((_, action) => action, {
    isLoading: true,
  })

  const fetch = React.useCallback(async () => {
    setState({ isLoading: true })
    try {
      const data = await fetchEpisode(postId)
      setState({ isSuccess: true, data })
    } catch (error) {
      setState({ isError: true, error })
    }
  }, [postId])

  React.useEffect(() => {
    fetch()
  }, [fetch])

  return {
    ...state,
    fetch,
  }
}
