import React, {useState} from 'react'
import {Link} from 'react-router-dom'
//
import useEpisodes from '../../hooks/useEpisodes'
import {EpisodeStyles} from '../../components/styled'

export default function EpisodesList() {
    const [season, setSeason] = useState('all')

    const episodesQuery = useEpisodes(season)

    const handleSeasonChange = (event) => {
        setSeason(event.target.value)
    }

    return (
        <div>
            <h1>Episodes</h1>

            <select onChange={handleSeasonChange} value={season}>
                <option value="all">All seasons</option>
                <option value="1">Season 1</option>
                <option value="2">Season 2</option>
                <option value="3">Season 3</option>
                <option value="4">Season 4</option>
                <option value="5">Season 5</option>
            </select>

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
