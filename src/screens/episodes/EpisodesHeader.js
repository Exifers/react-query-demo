import React from "react";
import useEpisodes from "../../hooks/useEpisodes";
import {HeaderStyles} from "../../components/styled";

function EpisodesHeader({season, onSeasonChange, value}) {
    const episodesQuery = useEpisodes(season)

    return <>
        <h1>Episodes</h1>

        <HeaderStyles>
            <select onChange={onSeasonChange} value={value}>
                <option value="all">All seasons</option>
                <option value="1">Season 1</option>
                <option value="2">Season 2</option>
                <option value="3">Season 3</option>
                <option value="4">Season 4</option>
                <option value="5">Season 5</option>
            </select>

            {episodesQuery.isLoading ? (
                <h5>Loading ...</h5>
            ) : (
                <h5>{episodesQuery.data?.length} episodes</h5>
            )}
        </HeaderStyles>
    </>;
}

export default EpisodesHeader