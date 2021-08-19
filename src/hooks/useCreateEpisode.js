import React from 'react'
import axios from 'axios'
import {useMutation, useQueryClient} from "react-query";
import {toast} from "react-toastify";

export default function useCreateEpisode() {
    const queryClient = useQueryClient()
    return useMutation((values) => (
        axios.post('/api/episodes', values).then((res) => res.data)
    ), {
        onMutate: (variables) => {
            const previousCacheData = queryClient.getQueryData('episodes')

            queryClient.setQueryData('episodes', episodes => {
                return [
                    ...episodes,
                    variables,
                ]
            })

            return previousCacheData
        },
        onError: (error, variables, context) => {
            const previousCacheData = context
            toast.error('An error has occurred!')
            queryClient.setQueryData('episodes', previousCacheData)
        }
    })
}
