import React from 'react'
import {Link} from 'react-router-dom'
//
import useEpisodes from '../../hooks/useEpisodes'
import {EpisodeStyles} from '../../components/styled'

export default function EpisodesList() {
    const episodesQuery = useEpisodes()

    return (
        <div>
            <h1>Episodes</h1>

            <div
                css={`
                  display: flex;
                  flex-wrap: wrap;
                `}
            >
                {episodesQuery.isLoading ? (
                    <span>Loading...</span>
                ) : episodesQuery.isError ? (
                    episodesQuery.error.message
                ) : (
                    episodesQuery.data.map((episode) => (
                        <EpisodeStyles as={Link} to={`./${episode.id}`} key={episode.id}>
                            <h3>{episode.title}</h3>
                            <small>season {episode.season}</small>
                            <p>{episode.body}</p>
                        </EpisodeStyles>
                    ))
                )}
            </div>
        </div>
    )
}
