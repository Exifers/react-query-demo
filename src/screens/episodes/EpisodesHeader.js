import React from "react";
import useEpisodes from "../../hooks/useEpisodes";
import {HeaderStyles} from "../../components/styled";

function EpisodesHeader({children}) {
    const episodesQuery = useEpisodes()

    return <>
        <h1>Episodes</h1>
        <HeaderStyles>
            {children}

            {episodesQuery.isLoading ? (
                <h5>Loading ...</h5>
            ) : episodesQuery.isError ? (
                <h5>{episodesQuery.error.message}</h5>
            ) : (
                <h5>{episodesQuery.data?.length} episodes</h5>
            )}

        </HeaderStyles>
    </>;
}

export default EpisodesHeader