import React, {useState} from 'react'
//
import useEpisodes from '../../hooks/useEpisodes'
import {EpisodePreviewCard} from "./EpisodePreviewCard";
import EpisodesHeader from "./EpisodesHeader";

export default function EpisodesList() {
    const [season, setSeason] = useState('all')

    const episodesQuery = useEpisodes(season)

    const handleSeasonChange = (event) => {
        setSeason(event.target.value)
    }

    return (
        <div>
            <EpisodesHeader season={season} onSeasonChange={handleSeasonChange} value={season}/>
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
                        <EpisodePreviewCard key={episode.id} episode={episode}/>
                    ))
                )}
            </div>
        </div>
    )
}
