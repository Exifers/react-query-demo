import React from 'react'
import axios from 'axios'
import {useQuery, useQueryClient} from "react-query";

export default function useEpisode(episodeId) {
    const queryClient = useQueryClient()
  return useQuery(['episodes', {id: episodeId}], () => (
    axios.get(`/api/episodes/${episodeId}`).then((res) => res.data)
  ), {
    placeholderData: () => {
      const episodes = queryClient.getQueryData('episodes')
      return episodes?.find(({ id }) => id === episodeId)
    }
  })
}
