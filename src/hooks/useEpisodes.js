import React from 'react'
import axios from 'axios'
import {useQuery} from "react-query";

export default function useEpisodes() {
  return useQuery('episodes', () => (
      axios.get(`/api/episodes`).then((res) => res.data)
  ), {
  })
}
