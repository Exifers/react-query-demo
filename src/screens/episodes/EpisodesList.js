import React from 'react'
//
import {EpisodePreviewCard, EpisodePreviewLoaderCard, EpisodesListLoader} from "./EpisodePreviewCard";
import {useInfiniteQuery} from "react-query";
import axios from "axios";
import InfiniteScroll from 'react-infinite-scroller'

export default function EpisodesList() {
    const {
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        ...episodesQuery
    } = useInfiniteQuery('episodes', ({pageParam = 0}) => (
        axios.get(`/api/episodes?pageOffset=${pageParam}`).then((res) => res.data)
    ), {
        getNextPageParam: lastPage => lastPage.nextPageOffset
    })

    return (
        <div>
            <div
                css={`
                  display: flex;
                  flex-wrap: wrap;
                `}
            >
                {episodesQuery.isLoading ? (
                    <EpisodesListLoader/>
                ) : episodesQuery.isError ? (
                    episodesQuery.error.message
                ) : (
                    <InfiniteScroll
                        hasMore={hasNextPage}
                        loadMore={fetchNextPage}
                    >
                        {episodesQuery.data?.pages?.map((page, index) => (
                            <React.Fragment key={index}>
                                {page.items.map(episode => (
                                    <EpisodePreviewCard key={episode.id} episode={episode}/>
                                ))}
                            </React.Fragment>
                        ))}
                        {isFetchingNextPage && (<EpisodePreviewLoaderCard/>)}
                    </InfiniteScroll>
                )}
            </div>
        </div>
    )
}
