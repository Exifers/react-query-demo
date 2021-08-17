import React from 'react'
import {useParams} from 'react-router-dom'

import useEpisode from '../../hooks/useEpisode'

export default function Episode() {
    const {episodeId} = useParams()
    const episodeQuery = useEpisode(episodeId)

    return (
        <>
            {episodeQuery.isLoading ? (
                <span>Loading...</span>
            ) : episodeQuery.isError ? (
                episodeQuery.error.message
            ) : (
                <div>
                    <h2>{episodeQuery.data.title}</h2>
                    <img src={episodeQuery.data.photoUrl} alt='poster' height='300px'/>
                    <p>{episodeQuery.data.body}</p>
                </div>
            )}
        </>
    )
}
