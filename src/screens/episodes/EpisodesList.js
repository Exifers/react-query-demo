import React from 'react'
//
import useEpisodes from '../../hooks/useEpisodes'
import {EpisodePreviewCard, EpisodePreviewLoaderCard} from "./EpisodePreviewCard";
import EpisodesHeader from "./EpisodesHeader";

export default function EpisodesList() {
    const episodesQuery = useEpisodes()

    return (
        <div>
            <EpisodesHeader/>
            <div
                css={`
                  display: flex;
                  flex-wrap: wrap;
                `}
            >
                {episodesQuery.isLoading ? (
                    <EpisodePreviewLoaderCard/>
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
